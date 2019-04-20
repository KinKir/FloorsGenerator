# 爬取 flowfreesolutions.com 的mania样例

import requests
import random


header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 UBrowser/6.1.2107.204 Safari/537.36'}

def save_image(html,name):
    f = open('crawl_data/%s.png'%name,'wb')
    f.write(html.content)
    f.close()
    
def touch_image(name):
    try:
        f = open('crawl_data/%s.png'%name,'r')
        if f:
            return True
    except:
        pass
    return False

def get_html(size, id):
    url = 'https://flowfreesolutions.com/solution-pictures/flow/%dmania/flow-%dmania-%d.png' % (size,size,id)
    print(url)
    html = requests.get(url,headers = header)
    return html

   
for size in range(6,14,1):
    print('size', size)
    for id in range(1,151):   # random.sample(list(range(1,151)), 50):
        print('id',id)
        fname = str(size)+str(id)
        if touch_image(fname):  # 已有的无需再爬
            continue
        html = get_html(size, id)
        save_image(html, fname)
        

