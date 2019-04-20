#!/usr/bin/python
# coding:utf-8
import tkinter as tk
from tkinter import *
from towerInfo import Cgui
from tkinter import ttk

itfc = Cgui()
itfc.read_files()

window = tk.Tk()
window.title('my window')
window.geometry('500x600')

tree = ttk.Treeview(window)
listb = tk.Listbox(window)
text1 = tk.Text(window, width=30, height=4)
text2 = tk.Text(window, width=100, height=20)

for s in itfc.show_flst():
    listb.insert(listb.size(), s)


def save2one():
    ret = itfc.modify_attr(cur_MT, cur_Attr, text2.get("0.0", "end"))
    text1.insert(tk.INSERT, ret + "\n")


# [{"type": "setValue", "name": "flag:tpow", "value": "flag:tpow+1"}]

def save2all():
    ret = itfc.modify_attr(cur_MT, cur_Attr, text2.get("0.0", "end"), all=True)
    text1.insert(tk.INSERT, ret + "\n")


def write2file():
    text1.insert(tk.INSERT, "写入中...\n")
    ret = itfc.save_all()
    text1.insert(tk.INSERT, ret + "\n")


# text1.insert(tk.INSERT, "在这里输入要替换的属性内容")

cur_MT = ""
cur_Attr = ""


def click(event):
    text1.delete('1.0', 'end')


def tree_flush(dct):
    text2.delete('1.0', 'end')
    for it in tree.get_children():
        tree.delete(it)
    ct = 0
    for it in dct:
        tree.insert('', ct, it, text=it)
        ct += 1


def choose(event):
    global cur_MT
    idx = listb.curselection()[0]
    cur_MT = listb.get(idx)
    f = itfc.show_one_file(cur_MT)
    tree_flush(f)


def choose_attr(event):
    global cur_Attr
    cur_Attr = tree.item(tree.focus())["text"]
    print("当前属性：", cur_Attr)

    import json
    text2.delete('1.0', 'end')
    text2.insert(tk.INSERT, json.dumps(itfc.get_attr(cur_MT, cur_Attr), ensure_ascii=False))

    print(tree.focus(), tree.item(tree.focus()))


b1 = tk.Button(window, text="修改属性到当前层", width=15, height=2, command=save2one)
b2 = tk.Button(window, text="修改属性到所有层", width=15, height=2, command=save2all)
b3 = tk.Button(window, text="写入文件", width=15, height=2, command=write2file)

listb.bind('<Double-Button-1>', choose)
tree.bind('<Double-Button-1>', choose_attr)
text1.bind('<Button-1>', click)

listb.pack(side=LEFT, fill=Y)
text1.pack(side=BOTTOM, fill=Y)
tree.pack(side=LEFT, fill=Y)
text2.pack(side=TOP,fill=X)
b1.pack()
b2.pack()
b3.pack()

window.mainloop()
