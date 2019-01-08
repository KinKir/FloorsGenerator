import os, sys

# print("输入原塔路径")
src_path = '/chome/houwei/pytcl/gan/dcgan/data/projects'

temp_dirs = ["data/traindata/", "data/srcdata/", "output/floors_img/", "output/floors/"]
os.chdir("/chome/houwei/pytcl/gan/dcgan")
for path in temp_dirs:
    os.system("rm -rf %s*" % path)
    os.makedirs(path, exist_ok=True)

# --------- 1 转换原塔数据为训练文件 ---------
from towerInfo import get_src_floors

get_src_floors(src_path, out_path="data/srcdata/")

from txt2img import format_t2img
# 转换为图片的尺寸为32*32 可以考虑更大的尺寸 用于获取更丰富的特征
# 为了捕获图像中存在的连通信息
format_t2img("data/srcdata/", [32, 32], "data/traindata/", info_file="info/train_data.txt")

# --------- 2 训练生成新数据 ---------
import os
from dcgan import train_proc

train_proc("info/train_data.txt", "output/floors_img/")

from imgs2txt import batch2map

pic_path, _, pic_lst = os.walk("output/floors_img/").__next__()
pic_lst = [os.path.join(pic_path, p) for p in pic_lst]
batch2map(pic_lst, mapsize=[13, 13], n_row=5, out_pt="output/floors/")

# --------- 3 将数据写入新塔 ---------
from towerInfo import JSdata

maps = JSdata("data/floors")
data = JSdata("data/")
maps.read_from_js("MT0.js")  # 新塔要先有个样板在
data.read_from_js("data.js")  # 保证覆盖之前的data.js
_, _, flst = os.walk("output/floors/").__next__()
lst = ["sample0", "sample1", "sample2", "sample3"]
for f in flst:
    with open(os.path.join("output/floors/", f), 'r', encoding='utf-8') as f:
        val = eval(f.read().strip())
    lst.append(maps.write_template(add_floor=True, data=val, ignore=True))
    # data.data["main"]["floorIds"].append(maps.write_template(add_floor=True, data=val, ignore=True))
data.data["main"]["floorIds"] = lst
data.save_to_js()
