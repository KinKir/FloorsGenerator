main.floors.MT1=
{
"floorId": "MT1",
"title": "第01层",
"name": "第01层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,201,202,201,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1, 31,  0,  0, 81,  0,  1, 27, 21,  0,  1,  0,  1],
    [  1,  0,209,  0,  1,  0,  1, 28, 31,  0,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1,  1,  1, 81,  1,  0,  1],
    [  1, 21,  0,  0,  1,  0, 81,205,217,205,  1,  0,  1],
    [  1,  0,210,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1, 31,  0, 21,  1, 21,  0,168,  1,  0,205,  0,  1],
    [  1, 31, 46, 21,  1,  0,  0,168,  1,201, 32,201,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [
    {
        "type": "if",
        "condition": "!core.musicStatus.bgmStatus",
        "true": [
            "\t[系统提示]你当前音乐处于关闭状态，本塔开音乐游戏效果更佳"
        ],
        "false": []
    }
],
"events": {
    "5,11": null,
    "7,11": [
        {
            "type": "choices",
            "text": "背景音乐选择（注意菜单里的系统设置也要打开）",
            "choices": [
                {
                    "text": "精灵石 精灵石传说",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "chuanshuo.mp3"
                        }
                    ]
                },
                {
                    "text": "精灵石 ed【神曲】",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "ed.mp3"
                        }
                    ]
                },
                {
                    "text": "精灵石 幸福之花",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "hua.mp3"
                        }
                    ]
                },
                {
                    "text": "精灵石 迷宫",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "migong.mp3"
                        }
                    ]
                },
                {
                    "text": "离开",
                    "action": []
                }
            ]
        }
    ],
    "7,10": [
        {
            "type": "choices",
            "text": "背景音乐选择（注意菜单里的系统设置也要打开）",
            "choices": [
                {
                    "text": "精灵石 3个小萝莉在一起",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "xiaoluoli.mp3"
                        }
                    ]
                },
                {
                    "text": "精灵石 晚上家里和镇子",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "wan.mp3"
                        }
                    ]
                },
                {
                    "text": "精灵石 黄昏的镇子",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "huang.mp3"
                        }
                    ]
                },
                {
                    "text": "仙境传说-守候永恒的爱",
                    "action": [
                        {
                            "type": "playBgm",
                            "name": "xian.mp3"
                        }
                    ]
                },
                {
                    "text": "离开",
                    "action": []
                }
            ]
        }
    ],
    "5,10": null,
    "6,8": null,
    "5,8": null
},
"changeFloor": {
    "1,1": {
        "floorId": "MT2",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}