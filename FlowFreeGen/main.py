import cv2
import random
import os
import numpy as np

data_path = 'crawl_data/'
train_path = 'train/'
ENEMY_BIAS = 201
MAX_SIZE = 13


def foreachFile(dir, callback, shuffle=False):
    import os
    for path, _, files in os.walk(dir):
        if shuffle:
            random.shuffle(files)
        for f in files:
            callback(os.path.join(path, f), f)


# 找出主色调
def main_color(block, thresh=50):
    shape = block.shape
    rgb = [0, 0, 0]
    ct = 0
    for i in range(shape[0]):
        for j in range(shape[1]):
            if block[i][j][0] < thresh and block[i][j][1] < thresh and block[i][j][2] < thresh:
                continue
            for c in range(3):
                rgb[c] += block[i][j][c]
            ct += 1
    for c in range(3):
        rgb[c] = int(rgb[c] / ct)
    return np.array(rgb)


#  把原图切分成小方块
def cut_blocks(fpath, fname):
    img1 = cv2.imread(fpath)
    if fname[0] != '1':
        ct = int(fname[0])  # int(fname.split('-')[1].split('mania')[0])
    else:
        ct = int(fname[0:2])
    img2 = img1[132:436, 8:312]
    print(ct, img2.shape)
    dw = int(img2.shape[0] / ct)
    print('dw', dw)
    newName = fname.split('.')[0]
    print('new', newName)
    retArr = [[0 for k in range(ct)] for i in range(ct)]
    for i in range(ct):
        for j in range(ct):
            retArr[i][j] = main_color(img2[i * dw:(i + 1) * dw, j * dw:(j + 1) * dw])
            # cv2.imwrite(train_path+fname+str(i)+str(j)+'.jpg',img2[i*dw:(i+1)*dw,j*dw:(j+1)*dw])
    return np.array(retArr)


# 找出头尾 | 如果出现bug 删掉该路线 | bug通常是由于颜色太接近导致识别成同一条线
# find head and tail from nodes' pos
def find_node(nodes, info=""):
    nearSet = set()
    degree = []
    for n in nodes:
        x = n[0]
        y = n[1]
        d = 0
        for m in nodes:
            if m[0] - x == 0 and abs(m[1] - y) == 1 or abs(m[0] - x) == 1 and abs(m[1] - y) == 0:
                d += 1
        degree.append(d)
    md = 1
    if min(degree) != md:
        print("overlap flow", info)
        return None, None
        md = min(degree)
    st = degree.index(md)
    ed = degree[st + 1:].index(md) + st + 1

    return nodes[st], nodes[ed]


import math


#  读取颜色块信息转成节点图
def color2map(color_arr):
    def dis(c1, c2):
        return math.sqrt(sum([(c1[i] - c2[i]) ** 2 for i in range(3)]))

    def mean(c1, c2):
        return (c1 + c2) / 2

    color_dict = []
    w = color_arr.shape[0]
    for i in range(w):
        for j in range(w):
            color = color_arr[i][j]
            if len(color_dict) == 0:
                color_dict.append({'color': color, 'pos': [(i, j)]})
            else:
                idx = min([k for k in range(len(color_dict))], key=lambda k: dis(color, color_dict[k]['color']))
                d = dis(color, color_dict[idx]['color'])
                # print(d)
                if d < 54:
                    color_dict[idx]['color'] = mean(color, color_dict[idx]['color'])
                    color_dict[idx]['pos'].append((i, j))
                else:
                    color_dict.append({'color': color, 'pos': [(i, j)]})

    # print(color_dict,len(color_dict))
    enemy_points = {}
    ct = 0
    for c in color_dict:
        ndst, nded = find_node(c['pos'])
        if ndst is None:
            continue
        enemy_points[ct] = {'st': ndst, 'ed': nded}
        ct += 1

    ret = np.zeros((w, w,), dtype=np.int)
    for k in enemy_points:
        e = enemy_points[k]
        if e['st'] == e['ed']:
            continue
        sx = e['st'][0]
        sy = e['st'][1]
        dx = e['ed'][0]
        dy = e['ed'][1]
        ret[sx][sy] = k + ENEMY_BIAS
        ret[dx][dy] = k + ENEMY_BIAS
    return ret

    # print(enemy_points)
    # try:
    #    while True:
    #        print(eval(input()))
    # except:
    #    pass


import json
import re
import os

cmt_pat = re.compile("//.*")  # 去掉注释用的
empty_pat = re.compile(",[\s]*}")
# blank_pat = re.compile("[\s]")
fh_pat = re.compile(";")


#  读取JS数据信息 JS文件格式为 XXX = {}
#  可以把字典变量解析为python格式的 只需特殊处理 null false true即可
#  只解析一个
#  但需要注意的是  不能存在依赖 否则无法解析依赖函数 最好全是字符串和基本类型
class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


class JSdata:
    def __init__(self, path, tempname=None):
        self.data = None
        self.name = None
        self.path = path
        self.fname = tempname or ""

    def read_from_js(self, fname):
        self.fname = fname
        with open(os.path.join(self.path, fname), encoding='utf-8') as f:
            s = f.read()
            s = cmt_pat.sub("", s)
            s = s.replace('\n', '')
            s = empty_pat.sub("}", s)
            s = fh_pat.sub("", s)
        pos = s.find("=")
        true = True
        false = False
        null = None
        try:
            self.data = eval(s[pos + 1:])
        except:
            print("error pase json")
            return False
        self.name = s[:pos]  # 原先数据的名字
        return True

    # 对文件/楼层ID 重命名
    def rename(self, name):
        lst = self.name.split('.')
        lst[-1] = name
        self.name = '.'.join(lst)
        self.data['floorId'] = name

    # 替换data值
    def write_template(self, rep):  # rep： 模板字典 预设内容
        for k in rep:
            if k in self.data:
                self.data[k] = rep[k]

    def save(self):
        self.save_to_js(self.data["floorId"], True)
        return self.data["floorId"]  # 这个信息要写到data.js里用于更新

    def add_floorId(self):
        last_id = self.data["name"]
        new_id = str(int(last_id) + 1)
        self.data['floorId'] = self.data['floorId'].replace(last_id, new_id)
        self.data['title'] = self.data['title'].replace(last_id, new_id)
        self.data['name'] = new_id
        print(last_id, self.data["floorId"])
        self.name = self.name.replace(last_id, new_id)

    def set_floor(self, data, bias, wall=None):
        wall = wall or random.randint(1, 3)
        w = len(data)
        array = np.array(self.data["map"])
        array[:, :] = wall
        array[bias:bias + w, bias:bias + w] = data
        self.data["map"] = array.tolist()

    def save_to_js(self, fname=None, ignore=True):
        fname = fname or self.fname
        print(self.data)
        s = self.name + ' = \n' + json.dumps(self.data, cls=NpEncoder)
        if fname[-3:] != '.js':
            fname += '.js'
        fname = os.path.join(self.path, fname)
        if os.path.isfile(fname) and not ignore:
            print(fname, '已经存在，是否覆盖？')
            if input() != 'y':
                return
        print('写入', fname)
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(s)


generator = JSdata('data/', 'MT0.js')
generator.read_from_js('MT0.js')

hardLog = {}


# 由节点信息生成楼层
def generateFloor(arr, floorHead='XT'):
    w = arr.shape[0]
    if str(w) not in hardLog:
        hardLog[str(w)] = 0
    hardLog[str(w)] += 1
    ct = hardLog[str(w)]

    bias = int((MAX_SIZE - w) / 2)
    print('bias:', bias)
    generator.set_floor(arr, bias)

    name = str(w) + '_' + str(ct)
    showname = str(w) + '-' + str(ct)
    floorId = floorHead + name
    generator.rename(floorId)
    generator.write_template({
        'name': showname,
        'title': showname
    })
    return generator.save()


#
mapInfo = {}  # 映射信息 原文件名:楼层名

floorList = []


def main(fpath, fname):
    print(fpath, fname)
    if fname.split('.')[-1] == 'js':
        return
    blocks = cut_blocks(fpath, fname)
    try:
        arr = color2map(blocks)
    except:
        print('error in ', fname)
        return
    mapInfo[fname] = generateFloor(arr)
    floorList.append(mapInfo[fname])


foreachFile('crawl_data', main)
print(mapInfo)
with open('meta.json', 'w', encoding='utf-8') as f:
    f.write(str(mapInfo))

with open('floorData.json', 'w', encoding='utf-8') as f:
    f.write(str(floorList))
