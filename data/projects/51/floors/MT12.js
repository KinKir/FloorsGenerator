main.floors.MT12=
{
"floorId": "MT12",
"title": "第12层",
"name": "第12层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,122, 16,  0,  1, 21, 27, 21,  1,  0, 16, 16,  1],
    [  1,  1,  1,206,  1,  0,  1,  0,  1,  0,  1,  1,  1],
    [  1,  0,  0,  0,  1,218,  0,218,  1,  0,213,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1,  1,  1,  0,  1],
    [  1,  0,218,  0, 81,  0,213,  0,  1, 31,  0,206,  1],
    [  1,  1,  1,  1,  1,  0,  0,218, 81,  0, 28,  0,  1],
    [  1, 21, 21,  0,  1,  0, 32,  0,  1, 21,  0,203,  1],
    [  1, 21, 22,  0,  1,  1,  1,  1,  1, 82,  1, 81,  1],
    [  1,  0,  0,213,  1,  7,131,  8,  1,203,  0,213,  1],
    [  1,  1,  1, 81,  1, 31,  0, 31,  1,  1,  0,  1,  1],
    [  1, 87,  0,  0,205,  0,  0,  0,205,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,1": [
        {
            "type": "choices",
            "text": "\t[商人,woman]800金币换1个红钥匙，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=800",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-800"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:redKey",
                                    "value": "item:redKey+1"
                                },
                                "\t[商人,woman]本魔塔有很多暗墙 比如5 9 14 16 18层 你都找到了吗",
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
    ],
    "11,1": {
        "trigger": "action",
        "enable": true,
        "noPass": true,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "!flag:MT12s",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            1
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": 122,
                        "loc": [
                            11,
                            1
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                11,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT12s",
                        "value": "true"
                    }
                ],
                "false": []
            },
            {
                "type": "choices",
                "text": "\t[商人,woman]1000金币一个黄钥匙，要吗？",
                "choices": [
                    {
                        "text": "要",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=1000",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "value": "item:yellowKey+1"
                                    }
                                ],
                                "false": [
                                    "\t[商人,woman]你的金币不足！"
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
    "6,9": [
        {
            "type": "if",
            "condition": "status:money<20+10*flag:times*(flag:times+1)",
            "true": [
                "\t[贪婪之神,blueShop]下一次商店价格：${20+10*flag:times*(flag:times+1)}金币"
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[贪婪之神,blueShop]给我${20+10*flag:times*(flag:times+1)}金币就可以...",
                    "choices": [
                        {
                            "text": "生命+${100+100*flag:times}",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "value": "status:hp+100+100*flag:times"
                                }
                            ]
                        },
                        {
                            "text": "攻击+4",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "value": "status:atk+4"
                                }
                            ]
                        },
                        {
                            "text": "防御+8",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "value": "status:def+8"
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "action": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:times",
                    "value": "flag:times+1"
                },
                {
                    "type": "revisit"
                }
            ]
        }
    ]
},
"changeFloor": {
    "11,11": {
        "floorId": "MT11",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    },
    "1,11": {
        "floorId": "MT13",
        "loc": [
            2,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 2,
}