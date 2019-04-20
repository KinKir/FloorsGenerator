def isWall(it):
    return 0 < it < 10


from PIL import Image
import numpy as np


def convert_img(arr):
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            if isWall(arr[i][j]):
                arr[i][j] = 255
            else:
                arr[i][j] = 0
    return Image.fromarray(arr)


def read_arr_file(fname):
    with open(fname) as f:
        ret = np.array(eval(f.read().strip())).astype(np.uint8)
    return ret


def format_t2img(input_dir, size, output_dir="img/", info_file="info/img_info.txt"):
    import os
    all_log = ""
    for path, _, flst in os.walk(input_dir):
        for f in flst:
            arr = read_arr_file(os.path.join(path, f))
            name = str(f.split('.')[0]) + ".bmp"
            print("save ", name)
            fpath = os.path.join(output_dir, name)
            all_log += fpath + " 1\n"
            convert_img(arr).convert('L').resize(size).save(fpath)
    with open(info_file, 'w') as f:
        f.write(all_log)

if __name__ == '__main__':
    format_t2img("data/", [32, 32])
