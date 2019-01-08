import argparse
import os
import numpy as np
import math

import torchvision.transforms as transforms
from torchvision.utils import save_image

from torch.utils.data import DataLoader
from torchvision import datasets
from torch.autograd import Variable

import torch.nn as nn
import torch.nn.functional as F
import torch

os.makedirs('images', exist_ok=True)

parser = argparse.ArgumentParser()
parser.add_argument('--n_epochs', type=int, default=20, help='number of epochs of training')
parser.add_argument('--batch_size', type=int, default=64, help='size of the batches')
parser.add_argument('--lr', type=float, default=0.0002, help='adam: learning rate')
parser.add_argument('--b1', type=float, default=0.5, help='adam: decay of first order momentum of gradient')
parser.add_argument('--b2', type=float, default=0.999, help='adam: decay of first order momentum of gradient')
parser.add_argument('--n_cpu', type=int, default=8, help='number of cpu threads to use during batch generation')
parser.add_argument('--latent_dim', type=int, default=100, help='dimensionality of the latent space')
parser.add_argument('--num_classes', type=int, default=10, help='number of classes for dataset')
parser.add_argument('--img_size', type=int, default=28, help='size of each image dimension')
parser.add_argument('--channels', type=int, default=1, help='number of image channels')
parser.add_argument('--sample_interval', type=int, default=400, help='interval between image sampling')
parser.add_argument('--data_path', type=str, default='../data/mnist', help='interval between image sampling')

opt = parser.parse_args()

img_shape = (opt.channels, opt.img_size, opt.img_size)

print(opt)

cuda = True if torch.cuda.is_available() else False


def weights_init_normal(m):
    classname = m.__class__.__name__
    if classname.find('Conv') != -1:
        torch.nn.init.normal_(m.weight.data, 0.0, 0.02)
    elif classname.find('BatchNorm') != -1:
        torch.nn.init.normal_(m.weight.data, 1.0, 0.02)
        torch.nn.init.constant_(m.bias.data, 0.0)


"""
class Generator(nn.Module):
    def __init__(self):
        super(Generator, self).__init__()

        self.label_emb = nn.Embedding(opt.num_classes, opt.latent_dim)

        self.init_size = opt.img_size // 4  # Initial size before upsampling
        self.l1 = nn.Sequential(nn.Linear(opt.latent_dim, 128 * self.init_size ** 2))

        self.conv_blocks = nn.Sequential(
            nn.BatchNorm2d(128),
            nn.Upsample(scale_factor=2),
            nn.Conv2d(128, 128, 3, stride=1, padding=1),
            nn.BatchNorm2d(128, 0.8),
            nn.LeakyReLU(0.2, inplace=True),
            nn.Upsample(scale_factor=2),
            nn.Conv2d(128, 64, 3, stride=1, padding=1),
            nn.BatchNorm2d(64, 0.8),
            nn.LeakyReLU(0.2, inplace=True),
            nn.Conv2d(64, opt.channels, 3, stride=1, padding=1),
            nn.Tanh()
        )

    def forward(self, noise):
        out = self.l1(noise)
        out = out.view(out.shape[0], 128, self.init_size, self.init_size)
        img = self.conv_blocks(out)
        return img
"""


class Generator(nn.Module):
    def __init__(self):
        super(Generator, self).__init__()

        self.label_emb = nn.Embedding(opt.num_classes, opt.num_classes)

        def block(in_feat, out_feat, normalize=True):
            layers = [nn.Linear(in_feat, out_feat)]
            if normalize:
                layers.append(nn.BatchNorm1d(out_feat, 0.8))
            layers.append(nn.LeakyReLU(0.2, inplace=True))
            return layers

        self.model = nn.Sequential(
            *block(opt.latent_dim + opt.num_classes, 128, normalize=False),
            *block(128, 256),
            *block(256, 512),
            *block(512, 1024),
            nn.Linear(1024, int(np.prod(img_shape))),
            nn.Tanh()
        )

    def forward(self, noise, labels):
        # Concatenate label embedding and image to produce input
        gen_input = torch.cat((self.label_emb(labels), noise), -1)
        img = self.model(gen_input)
        img = img.view(img.size(0), *img_shape)
        return img


class Discriminator(nn.Module):
    def __init__(self):
        super(Discriminator, self).__init__()

        self.label_embedding = nn.Embedding(opt.num_classes, opt.num_classes)

        def discriminator_block(in_filters, out_filters, bn=True):
            """Returns layers of each discriminator block"""
            block = [nn.Conv2d(in_filters, out_filters, 3, 2, 1),
                     nn.LeakyReLU(0.2, inplace=True),
                     nn.Dropout2d(0.25)]
            if bn:
                block.append(nn.BatchNorm2d(out_filters, 0.8))
            return block

        self.conv_blocks = nn.Sequential(
            *discriminator_block(opt.channels, 16, bn=False),
            *discriminator_block(16, 32),
            *discriminator_block(32, 64),
            *discriminator_block(64, 128),
        )

        # The height and width of downsampled image
        ds_size = 32 // 2 ** 4  # 原文是ds_size = opt.img_size // 2**4 这是个bug

        # Output layers
        self.adv_layer = nn.Sequential(nn.Linear(opt.num_classes + 128 * ds_size ** 2, 1),
                                       nn.Sigmoid())
        self.aux_layer = nn.Sequential(nn.Linear(opt.num_classes + 128 * ds_size ** 2, opt.num_classes + 1),
                                       nn.Softmax())  # 将类别信息融合进去
        self.clf_layer = nn.Sequential(nn.Linear(128 * ds_size ** 2, opt.num_classes + 1),
                                       nn.Softmax())

    def forward(self, img, inlabel=None):  # inlabel对普通分类器来说是None

        out = self.conv_blocks(img)
        out = out.view(out.shape[0], -1)

        if inlabel is not None:
            out = torch.cat((out, self.label_embedding(inlabel)), -1)
            validity = self.adv_layer(out)
            label = self.aux_layer(out)
        else:
            validity = 0
            label = self.clf_layer(out)

        return validity, label


# Loss functions
adversarial_loss = torch.nn.BCELoss()
auxiliary_loss = torch.nn.CrossEntropyLoss()

# Initialize generator and discriminator
generator = Generator()
discriminator = Discriminator()

if cuda:
    generator.cuda()
    discriminator.cuda()
    adversarial_loss.cuda()
    auxiliary_loss.cuda()

# Initialize weights
generator.apply(weights_init_normal)
discriminator.apply(weights_init_normal)

# Configure data loader
os.makedirs(opt.data_path, exist_ok=True)
dataloader = torch.utils.data.DataLoader(
    datasets.MNIST(opt.data_path, train=True, download=True,
                   transform=transforms.Compose([
                       transforms.Resize(opt.img_size),
                       transforms.ToTensor(),
                       transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
                   ])),
    batch_size=opt.batch_size, shuffle=True)


def cut_data(dtsets, rule=lambda x: x <= 4):
    """
    对datasets 进行裁剪
    :param dtsets: datasets
    :param rule: function 返回idx 比如标签值小于4
    :return: 裁剪后的datasets
    """
    idx = rule(dtsets.train_labels.numpy())
    print(idx[:10])
    dt_cut = dtsets.train_data.numpy()[idx]
    lb_cut = dtsets.train_labels.numpy()[idx]
    print(lb_cut)
    dtsets.train_data = torch.from_numpy(dt_cut)
    dtsets.train_labels = torch.from_numpy(lb_cut)
    return dtsets


mnist = datasets.MNIST(opt.data_path, train=True, download=True,
                       transform=transforms.Compose([
                           transforms.Resize(opt.img_size),
                           transforms.ToTensor(),
                           transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
                       ]))

dataloader_1 = torch.utils.data.DataLoader(cut_data(datasets.MNIST(opt.data_path, train=True, download=True,
                                                                   transform=transforms.Compose([
                                                                       transforms.Resize(opt.img_size),
                                                                       transforms.ToTensor(),
                                                                       transforms.Normalize((0.5, 0.5, 0.5),
                                                                                            (0.5, 0.5, 0.5))
                                                                   ]))),
                                           batch_size=opt.batch_size, shuffle=True)

dataloader_2 = torch.utils.data.DataLoader(cut_data(datasets.MNIST(opt.data_path, train=True, download=True,
                                                                   transform=transforms.Compose([
                                                                       transforms.Resize(opt.img_size),
                                                                       transforms.ToTensor(),
                                                                       transforms.Normalize((0.5, 0.5, 0.5),
                                                                                            (0.5, 0.5, 0.5))
                                                                   ])), lambda x: x >= 4),
                                           batch_size=opt.batch_size, shuffle=True)

# Optimizers
optimizer_G = torch.optim.Adam(generator.parameters(), lr=opt.lr, betas=(opt.b1, opt.b2))
optimizer_D = torch.optim.Adam(discriminator.parameters(), lr=opt.lr, betas=(opt.b1, opt.b2))

FloatTensor = torch.cuda.FloatTensor if cuda else torch.FloatTensor
LongTensor = torch.cuda.LongTensor if cuda else torch.LongTensor

# ----------
#  Training
# ----------
batches_done = 0

prod_data = None
prod_labels = None


def sample_image(n_row, batches_done):
    """Saves a grid of generated digits ranging from 0 to n_classes"""
    # Sample noise
    z = Variable(FloatTensor(np.random.normal(0, 1, (n_row ** 2, opt.latent_dim))))
    # Get labels ranging from 0 to n_classes for n rows
    labels = np.array([num for _ in range(n_row) for num in range(n_row)])
    labels = Variable(LongTensor(labels))
    gen_imgs = generator(z, labels)
    save_image(gen_imgs.data, 'images/%d.png' % batches_done, nrow=n_row, normalize=True)


def accu_fake_data(dtsets):
    dn = dtsets.train_data.numpy()
    print(dn.shape, prod_data.shape)
    dt_cut = np.concatenate([prod_data, dn], axis=0)
    lb_cut = np.concatenate([dtsets.train_labels.numpy(), prod_labels], axis=0)

    dtsets.train_data = torch.from_numpy(dt_cut)
    dtsets.train_labels = torch.from_numpy(lb_cut)

    return dtsets


def gen_fake_data(dstlabel, n_row=10):
    global prod_data, prod_labels
    z = Variable(FloatTensor(np.random.normal(0, 1, (n_row ** 2, opt.latent_dim))))
    prod_labels = np.array([num for _ in range(n_row) for num in dstlabel])
    # labels = Variable(LongTensor(labels))
    prod_data = np.reshape(gen_imgs.data.cpu().numpy(),
                           [-1, opt.img_size, opt.img_size])


for epoch in range(opt.n_epochs):
    if prod_data is not None:
        dataloader_1 = torch.utils.data.DataLoader(
            accu_fake_data(cut_data(datasets.MNIST(opt.data_path, train=True, download=True,
                                                   transform=transforms.Compose([
                                                       transforms.Resize(opt.img_size),
                                                       transforms.ToTensor(),
                                                       transforms.Normalize((0.5, 0.5, 0.5),
                                                                            (0.5, 0.5, 0.5))
                                                   ])))),
            batch_size=opt.batch_size, shuffle=True)
    rd1 = enumerate(dataloader_1)
    rd2 = enumerate(dataloader_2)
    batches_done += 1
    try:
        while True:
            i1, (imgs1, labels1) = rd1.__next__()
            i2, (imgs2, labels2) = rd2.__next__()

            lgt2 = np.array(labels2.numpy())

            batch_size = imgs1.shape[0]

            valid = Variable(FloatTensor(batch_size, 1).fill_(1.0), requires_grad=False)
            fake = Variable(FloatTensor(batch_size, 1).fill_(0.0), requires_grad=False)
            fake_aux_gt = Variable(LongTensor(batch_size).fill_(opt.num_classes), requires_grad=False)

            real_imgs1 = Variable(imgs1.type(FloatTensor))
            labels1 = Variable(labels1.type(LongTensor))
            real_imgs2 = Variable(imgs2.type(FloatTensor))
            labels2 = Variable(labels2.type(LongTensor))

            optimizer_G.zero_grad()
            z = Variable(FloatTensor(np.random.normal(0, 1, (batch_size, opt.latent_dim))))
            gen_labels = Variable(LongTensor(np.random.randint(5, opt.num_classes, batch_size)))
            gen_imgs = generator(z, gen_labels)
            # Loss measures generator's ability to fool the discriminator
            validity, _ = discriminator(gen_imgs, gen_labels)
            g_loss = adversarial_loss(validity, valid)
            g_loss.backward()
            optimizer_G.step()
            # 攻击者的G会以未持有的数据为目标标签

            optimizer_D.zero_grad()
            # 模拟攻击者 使用0~4的数据
            real_pred1, real_aux1 = discriminator(real_imgs1, labels1)
            d_loss1 = adversarial_loss(real_pred1, valid) + auxiliary_loss(real_aux1, labels1)
            # d_loss1 /= 2
            fake_pred1, fake_aux1 = discriminator(gen_imgs.detach(), gen_labels)
            d_fake_loss = (adversarial_loss(fake_pred1, fake) + auxiliary_loss(fake_aux1, gen_labels)) / 2
            d_loss1 = (d_fake_loss + d_loss1) / 2

            d_loss1.backward()
            optimizer_D.step()

            # 模拟真实的分类训练者
            _, real_aux2 = discriminator(real_imgs2)

            lrt2 = np.copy(real_aux2.data.cpu().numpy())

            d_loss2 = auxiliary_loss(real_aux2, labels2)

            d_loss2.backward()
            optimizer_D.step()

            pred = np.concatenate([real_aux1.data.cpu().numpy(), fake_aux1.data.cpu().numpy()], axis=0)
            gt = np.concatenate([labels1.data.cpu().numpy(), fake_aux_gt.data.cpu().numpy()], axis=0)
            d_acc = np.mean(np.argmax(pred, axis=1) == gt)
            c_acc = np.mean(np.argmax(lrt2, axis=1) == lgt2)
            print(
                "[Epoch %d/%d] [Batch %d/%d] [D loss1: %f, D loss 2: %f, D'sacc: %d%% C's acc: %d%% ] [G loss: %f]" % (
                    epoch, opt.n_epochs, i1, len(dataloader),
                    d_loss1.item(), d_loss2.item(), 100 * d_acc, 100 * c_acc,
                    g_loss.item()))

    except StopIteration:
        pass

    # save_image(gen_imgs.data[:25], 'images/%d.png' % batches_done, nrow=5, normalize=True)
    sample_image(n_row=10, batches_done=batches_done)
    gen_fake_data(dstlabel=[4, 5, 6])
    continue

    for i, (imgs, labels) in enumerate(dataloader):

        batch_size = imgs.shape[0]

        # Adversarial ground truths
        valid = Variable(FloatTensor(batch_size, 1).fill_(1.0), requires_grad=False)
        fake = Variable(FloatTensor(batch_size, 1).fill_(0.0), requires_grad=False)
        fake_aux_gt = Variable(LongTensor(batch_size).fill_(opt.num_classes), requires_grad=False)

        # Configure input
        real_imgs = Variable(imgs.type(FloatTensor))
        labels = Variable(labels.type(LongTensor))

        # -----------------
        #  Train Generator
        # -----------------

        optimizer_G.zero_grad()

        # Sample noise and labels as generator input
        z = Variable(FloatTensor(np.random.normal(0, 1, (batch_size, opt.latent_dim))))

        # Generate a batch of images
        gen_imgs = generator(z)

        # Loss measures generator's ability to fool the discriminator
        validity, _ = discriminator(gen_imgs)
        g_loss = adversarial_loss(validity, valid)

        g_loss.backward()
        optimizer_G.step()

        # ---------------------
        #  Train Discriminator
        # ---------------------

        optimizer_D.zero_grad()

        # Loss for real images
        real_pred, real_aux = discriminator(real_imgs)
        d_real_loss = (adversarial_loss(real_pred, valid) + auxiliary_loss(real_aux, labels)) / 2

        # Loss for fake images
        fake_pred, fake_aux = discriminator(gen_imgs.detach())
        d_fake_loss = (adversarial_loss(fake_pred, fake) + auxiliary_loss(fake_aux, fake_aux_gt)) / 2

        # Total discriminator loss
        d_loss = (d_real_loss + d_fake_loss) / 2

        # Calculate discriminator accuracy
        pred = np.concatenate([real_aux.data.cpu().numpy(), fake_aux.data.cpu().numpy()], axis=0)
        gt = np.concatenate([labels.data.cpu().numpy(), fake_aux_gt.data.cpu().numpy()], axis=0)
        d_acc = np.mean(np.argmax(pred, axis=1) == gt)

        d_loss.backward()
        optimizer_D.step()

        print("[Epoch %d/%d] [Batch %d/%d] [D loss: %f, acc: %d%%] [G loss: %f]" % (
            epoch, opt.n_epochs, i, len(dataloader),
            d_loss.item(), 100 * d_acc,
            g_loss.item()))

        batches_done = epoch * len(dataloader) + i
        if batches_done % opt.sample_interval == 0:
            save_image(gen_imgs.data[:25], 'images/%d.png' % batches_done, nrow=5, normalize=True)
