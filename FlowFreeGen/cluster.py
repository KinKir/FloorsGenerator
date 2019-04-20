
from sklearn.externals import joblib
    
import numpy as np
import cv2
train_path = 'train'
train_shape = (24,24)

    
def foreachFile(dir,callback):
    import os
    for path, _, files in os.walk(dir):
        for f in files:
            callback(os.path.join(path,f),f)
            
def load_data(path,shape,flag=2):
    ret = {}
    arr = []
    ct = 0
    def wrap(fpath,fname):
        nonlocal ct
        img = cv2.imread(fpath,flag)
        #_,img = cv2.threshold(img,127,255,cv2.THRESH_BINARY) 
        img = cv2.resize(img,shape)
        """
        for i in range(img.shape[0]):
            for j in range(img.shape[1]):
                if img[i][j][0] < 20 and  img[i][j][1] < 20 and  img[i][j][2] < 20:
                    img[i][j] = 0
                else:
                    img[i][j] = 255
        """
        ret[ct] = img
        arr.append(img.flatten())
        ct += 1
    foreachFile(path,wrap)
    arr = np.array(arr);
    return ret,arr
    
    
def save_model(clf):
    joblib.dump(clf,'model.h5')

def train_model_km(data):
    from sklearn.cluster import KMeans
    km = KMeans(7)
    km.fit(data)
    y = km.predict(data)
    # 验证分类效果
    return km
def train_SVM():
    from sklearn.svm import SVC
    _,data0 = load_data('train_data/0',train_shape)
    _,data1 = load_data('train_data/1',train_shape)
    data = np.concatenate([data0,data1])
    print(data0.shape,data1.shape,data.shape)
    label = np.concatenate([np.zeros(len(data0), dtype=np.int),np.ones(len(data1),dtype=np.int)])
    
    clf = SVC()
    clf.fit(data,label)
    return clf
    
    
def load_model(name=None):
    name = name or 'model.h5'
    try:
        ret = joblib.load(name)
    except:
        ret = None
    return ret

    
def main():
    clf = load_model()
    img, data = load_data(train_path,train_shape)
    if clf is None:
        clf = train_SVM()
    print(data.shape)
    y = clf.predict(data)
    save_model(clf)
    for i in range(len(y)):
        cv2.imwrite('result/'+str(y[i])+'/'+str(i)+'.jpg',img[i])
        
main()