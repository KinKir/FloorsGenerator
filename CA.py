import numpy as np
from torch.nn import Conv2d

#  以卷积方式作用于一个array 产生新array ？ 按CA的规则思路

Batch_num = 10


# 描述一个规则的类
class Rule:
    def __init__(self):
        pass


class Field:
    def __init__(self, size):  # size必须是奇数[1,1],[3,3],[5,5]！—— 用以代表其中心的下一个点
        self.size = size
        self.rule = {}  # key - new_world
        self.f1 = Conv2d(Batch_num, 1, size, 1, size[0] // 2)  # 同型映射 将每个感受野转换为一个key值 用以寻找规则

    def rule_key(self, f1_out):
        # 规则如何映射到key 是判断的关键 可以在此加训练?
        pass

    def work(self, arr):
        kout = self.f1(arr)
