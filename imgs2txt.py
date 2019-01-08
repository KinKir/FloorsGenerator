from PIL import Image
import numpy as np


def read_fmt_image(fname):
    img = Image.open(fname)
    return img.convert("L")


def cut_images(img, size):
    w = size[0]
    h = size[1]
    ret = []
    for i in range(0, img.size[0], w):
        for j in range(0, img.size[1], h):
            region = [i, j, i + w, j + h]
            ret.append(img.crop(region))
    return ret


def block_mesh_proc(arr):
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            if arr[i][j] > 125:
                arr[i][j] = 1
            else:
                arr[i][j] = 0
    return arr


out_path = "output/"


def write2txt(img, name, proc):
    dt = proc(np.array(img))
    name = name.replace("/", "_")
    name = name.replace("\\", "_")
    print("write to ", name)
    with open(out_path + name, "w") as f:
        f.write(str(dt.tolist()))


def batch2map(pics, mapsize=[13, 13], n_row=5, out_pt=None):
    if out_pt is not None:
        global out_path
        out_path = out_pt
    for f in pics:
        img = read_fmt_image(f).resize([mapsize[0] * n_row, mapsize[1] * n_row])
        imgs = cut_images(img, mapsize)
        for i in range(len(imgs)):
            name = str(f.split('.')[0]) + "%d.txt" % i
            write2txt(imgs[i], name, block_mesh_proc)


if __name__ == '__main__':
    batch2map(["images/0.png"])
