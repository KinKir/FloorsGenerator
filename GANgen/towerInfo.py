#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/1/3 20:47
# @Author  : hw
# @Site    :
# @File    : towerInfo.py
# @Software: PyCharm
"""
function:
"""

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
class JSdata:
    def __init__(self, path):
        self.data = None
        self.name = None
        self.path = path
        self.fname = ""

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
            return False
        self.name = s[:pos]
        return True

    # 把data写进去 然后存文件
    def write_template(self, rep=[], add_floor=False, data=None, ignore=False):  # rep： 模板字典 预设内容
        for k in rep:
            if k in self.data:
                self.data[k] = rep[k]
        if add_floor:
            self.add_floorId()
        self.set_floor(data)
        self.save_to_js(self.data["floorId"], ignore)
        return self.data["floorId"]  # 这个信息要写到data.js里用于更新

    def add_floorId(self):
        last_id = self.data["name"]
        new_id = str(int(last_id) + 1)
        self.data['floorId'] = self.data['floorId'].replace(last_id, new_id)
        self.data['title'] = self.data['title'].replace(last_id, new_id)
        self.data['name'] = new_id
        print(last_id, self.data["floorId"])
        self.name = self.name.replace(last_id, new_id)

    def set_floor(self, data=None):
        for x in range(len(self.data["map"])):
            for y in range(len(self.data["map"][x])):
                it = self.data["map"][x][y]
                if it == 87:  # 上楼梯 改成下楼梯口
                    self.data["map"][x][y] = 88
                else:
                    # 暂时清空 以后决定要不要自动生成墙怪
                    self.data["map"][x][y] = data[x][y]

    def save_to_js(self, fname=None, ignore=True):
        if fname is None:
            fname = self.fname
        s = self.name + ' = \n' + json.dumps(self.data, ensure_ascii=False)
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


# 获取原塔信息
def get_src_floors(src_path, out_path):
    ct = 0
    all_log = open("info/floors_txt_info.txt", 'w', encoding='utf-8')

    def save_all_floors(path, lst):
        print(path, lst)
        m = JSdata(path)
        exclude = "sample"
        for l in lst:
            if exclude not in l and l[-3:] == '.js':
                nonlocal ct
                ct += 1
                if not m.read_from_js(l):
                    print("error in " + l)
                    continue
                n = l.split('.')[0]
                fname = os.path.join(out_path, '%d-%s.txt' % (ct, n))
                all_log.write("%s 1\n" % fname)
                with open(fname, 'w') as fp:
                    json.dump(m.data['map'], fp)

    floor_path = "floors"
    for root, _, files in os.walk(src_path):
        if floor_path == root[-len(floor_path):]:
            save_all_floors(root, files)
    print("get %d floors" % ct)
    all_log.close()


# debuger % windows
# 用chrome来模拟运行游戏 要模拟开始后才有数据
# 这个可以用来计算实时伤害
# from selenium import webdriver


# class Debuger:
#     def __init__(self):
#         opt = webdriver.ChromeOptions()
#         opt.headless = True
#         self.driver = webdriver.Chrome(options=opt)
#
#     def connect(self, url="http://127.0.0.1:1055/index.html"):
#         self.driver.get(url)
#         self.driver.execute_script("core.events.startGame('');")

"""
def add_event_to_floors(floorIds):
    map = JSdata("data/floors")
    for i in floorIds:
        fname = 'MT%d.js' % i
        try:
            map.read_from_js(fname)
        except:
            continue
        # up : 87 down : 88
        import numpy as np
        arr = np.array(map.data["map"])

        def get_dict(numid, content_func):
            ys, xs = np.where(arr == numid)  # !array的坐标xy是反的
            res = {}
            for x, y in zip(xs, ys):
                key = "%d,%d" % (x, y)
                res[key] = content_func(numid, x, y)
            return res

        def make_floor_change(numid, x, y):
            res = {}
            if numid == 88:
                res["floorId"] = "before"
            else:
                res["floorId"] = "next"
            res["loc"] = [int(x), int(y)]
            res["time"] = 500
            return res

        # 添加上下楼
        d_up = get_dict(87, make_floor_change)
        d = dict(d_up, **get_dict(88, make_floor_change))
        map.data["changeFloor"] = d

        map.save_to_js()
"""


# def parseJSvalue(s):
#     s = cmt_pat.sub("", s)
#     s = s.replace('\n', '')
#     s = empty_pat.sub("}", s)
#     s = fh_pat.sub("", s)
#     true = True
#     false = False
#     null = None
#     return eval(s)


class Cgui:
    def __init__(self):
        self.flst = []
        self.data_dict = {}

    def read_files(self, folder="data/floors"):
        _, _, files = os.walk(folder).__next__()
        for f in files:
            try:
                map = JSdata(folder)
                map.read_from_js(f)

                self.data_dict[f] = map
                self.flst.append(f)
            except:
                self.data_dict[f] = None

    def show_flst(self):
        return self.flst

    def show_one_file(self, f):
        return self.data_dict[f].data

    def get_attr(self, f, attr):
        return self.data_dict[f].data[attr]

    def modify_attr(self, f, attr, content, all=False):
        data = ""
        if len(content) <= 0:
            print("清空数据")
        else:
            try:
                data = json.loads(content)  # parseJSvalue(content)
            except:
                return "解析出错"

        if all:
            for k in self.data_dict:
                mt = self.data_dict[k]
                mt.data[attr] = data
            return "全部%s修改成功"%attr
        else:
            self.data_dict[f].data[attr] = data
            return "修改"+f+" "+attr+"成功"

    def save_all(self):
        errorlist = []
        for k in self.data_dict:
            try:
                self.data_dict[k].save_to_js()
            except:
                errorlist.append(k)
        if len(errorlist) == 0:
            return "写入成功"
        else:
            return "写入出错：" + '、'.join(errorlist)


    # 适合深层结构修改：
    def modify(self, f, arglst, dst):
        if f not in self.data_dict or self.data_dict[f] is None:
            return "文件名出错"
        root = self.data_dict
        for arg in arglst[:-1]:
            if arg not in root:
                return str(arg) + "不在属性内"
        arg = arglst[-1]
        if arg not in root:
            return str(arg) + "不在属性内"
        try:
            data = json.loads(dst)
            root[arg] = data
        except:
            return "json解析出错"

        return None


#if __name__ == '__main__':
#    ids = [i for i in range(10, 20)]
#    add_event_to_floors(ids)

"""
if __name__ == '__main__':
    map = JSdata("data/floors")
    data = JSdata("data")
    map.read_from_js('MT0.js')
    data.read_from_js('data.js')

    txtpath = "output/"
    _, _, flst = os.walk(txtpath).__next__()
    for f in flst:
        with open(txtpath + f, 'r', encoding='utf-8') as f:
            val = eval(f.read().strip())
        data.data["main"]["floorIds"].append(map.write_template(add_floor=True, data=val, ignore=True))
    data.save_to_js()
"""
