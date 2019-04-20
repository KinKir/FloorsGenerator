from PIL import Image

from torch.utils.data import Dataset
import numpy as np
from PIL import Image


def read_floor_data(fname):
    with open(fname,encoding='utf-8') as f:
        s = f.read()
        lst = eval(s)
    return np.array(lst)


class MyDataset(Dataset):  # 创建自己的类：MyDataset,这个类是继承的torch.utils.data.Dataset
    def __init__(self, datatxt, transform=None, target_transform=None):  # 初始化一些需要传入的参数
        fh = open(datatxt, 'r', encoding='utf-8')  # 按照传入的路径和txt文本参数，打开这个文本，并读取内容
        imgs = []
        for line in fh.readlines():
            words = line.split(' ')
            imgs.append((words[0], int(words[1])))
        self.imgs = imgs
        self.transform = transform
        self.target_transform = target_transform

    def __getitem__(self, index):
        fn, label = self.imgs[index]  # fn是图片path #fn和label分别获得imgs[index]也即是刚才每行中word[0]和word[1]的信息
        # img = Image.open(root + fn).convert('RGB')  # 按照path读入图片from PIL import Image # 按照路径读取图片
        img = Image.open(fn)#read_floor_data(fn)
        if self.transform is not None:
            img = self.transform(img)  # 是否进行transform
        return img, label  # return很关键，return回哪些内容，那么我们在训练时循环读取每个batch时，就能获得哪些内容

    def __len__(self):  # 这个函数也必须要写，它返回的是数据集的长度，也就是多少张图片，要和loader的长度作区分
        return len(self.imgs)


# 制作目录
if __name__ == '__main__':
    import os
    path = "img/"
    s = ""
    for _,_,flst in os.walk(path):
        for f in flst:
            s += path+f + " 1\n"
    with open("data_info.txt",'w') as f:
        f.write(s)
