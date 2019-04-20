main.floors.MT15=
{
"floorId": "MT15",
"title": "第15层",
"name": "第15层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 28,214,  0, 81,  0, 87,  0,  1,123,  0,  0,  1],
    [  1,213,  0,  0,  1,  0,  0,  0,  1,  0,  0,203,  1],
    [  1,  0,  0,203,  1,  1, 85,  1,  1,  1,  1, 81,  1],
    [  1, 81,  1,  1,  1,  0, 47,  0,  1,206,  0,  0,  1],
    [  1,  0,  1, 21,  1,138,139,140,  1,  0,206,  0,  1],
    [  1,  0,  1, 22,  1,141,142,143,  1, 81,  1,218,  1],
    [  1,203,  1, 21,  1,144,266,145,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  0,  0,  0,  1,  0,  1, 32,  1],
    [  1,  0, 81,  0,  1,  1,  0,  1,  1, 81,  1,  1,  1],
    [  1,206,  1,206,  1,  0,  0,  0,  1,  0,205,  0,  1],
    [  1,  0,218,  0,  1,  0, 88,  0, 81,205,  0,122,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "9,1": [
        "\t[小偷,thief]阿哈 你还好吗 这大章鱼挡住了我前进的道路 现在暗道终于完工了 你现在最好也躲开它 我要走了 再见",
        {
            "type": "openDoor",
            "loc": [
                8,
                1
            ]
        },
        {
            "type": "move",
            "time": 500,
            "steps": [
                "left",
                "left",
                "left"
            ],
            "immediateHide": false
        }
    ],
    "11,11": [
        {
            "type": "choices",
            "text": "\t[商人,woman]200金币换1个蓝钥匙，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=200",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-200"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:blueKey",
                                    "value": "item:blueKey+1"
                                },
                                "\t[商人,woman]十字架对兽人和吸血鬼是神器 他被藏在16-20层的墙内",
                                {
                                    "type": "hide",
                                    "time": 750
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:time",
                                    "value": "new Date().getTime()"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:steps",
                                    "value": "core.status.hero.steps"
                                }
                            ],
                            "false": [
                                "\t[商人,woman]你的金钱不足！"
                            ]
                        }
                    ]
                },
                {
                    "text": "不要",
                    "action": []
                }
            ]
        }
    ]
},
"changeFloor": {
    "6,11": {
        "floorId": "MT14",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "6,1": {
        "floorId": "MT16",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "6,7": [
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    5
                ],
                [
                    6,
                    5
                ],
                [
                    7,
                    5
                ],
                [
                    5,
                    6
                ],
                [
                    6,
                    6
                ],
                [
                    7,
                    6
                ],
                [
                    5,
                    7
                ],
                [
                    7,
                    7
                ]
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                3
            ]
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 2,
"bgm": null,
}