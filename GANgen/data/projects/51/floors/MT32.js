main.floors.MT32=
{
"floorId": "MT32",
"title": "第32层",
"name": "第32层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 28,  0, 82,  0,  0,  0,  0,  0,  0,226, 87,  1],
    [  1,  0, 27,  1,  1,  1,  0,  1,  1,  1,  0,  0,  1],
    [  1, 81,  1,  1,  0, 81,  0, 81,  0,  1,  1,  1,  1],
    [  1,225,  0,216,  0,  1,  0,  1,212,  1, 21, 32,  1],
    [  1,  0, 21,  0,216,  1,  0,  1,  0, 81,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1, 21, 21, 21, 21,  1,  0,  1,227,  1, 21, 22,  1],
    [  1,  0,  0,  0, 22,  1,  0,  1,  0, 81,  0, 21,  1],
    [  1,  1, 85,  1,  1,  1,226,  1,  1,  1,  1,  1,  1],
    [  1,222,  0,222,  0,  0,  0,  0,  0,  7,131,  8,  1],
    [  1,  0,  0,  0,  0, 88,  0,  1,212,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "10,1": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    },
    "6,9": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    },
    "6,10": [
        {
            "type": "show",
            "loc": [
                [
                    10,
                    1
                ]
            ],
            "time": 500
        },
        "\t[yellowKnight]你打败了前2个区域的头目 这表明你是个勇士 但现在游戏结束了 我将在这里亲手杀死你",
        {
            "type": "move",
            "loc": [
                10,
                1
            ],
            "time": 200,
            "steps": [
                "left",
                "left",
                "left",
                "left",
                "down",
                "down",
                "down",
                "down",
                "down",
                "down",
                "down",
                "down",
                "down"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "status:hp-Math.max(0, core.material.enemys.yellowKnight.atk-status:def)"
        },
        {
            "type": "battle",
            "id": "yellowKnight"
        },
        "\t[yellowKnight]你以为你已非常强大了吗 嘿嘿错了 只是我今天状态不佳而有 我走了 有本事到40楼与我再打一次",
        {
            "type": "move",
            "loc": [
                6,
                9
            ],
            "time": 200,
            "steps": [
                "up",
                "up",
                "up",
                "up",
                "up",
                "up",
                "up",
                "up",
                "right",
                "right",
                "right",
                "right",
                "right"
            ],
            "immediateHide": false
        },
        {
            "type": "hide"
        }
    ],
    "10,10": [
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
                            "text": "攻击+8",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "value": "status:atk+8"
                                }
                            ]
                        },
                        {
                            "text": "防御+16",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "value": "status:def+16"
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
    "5,11": {
        "floorId": "MT31",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "11,1": {
        "floorId": "MT33",
        "loc": [
            10,
            1
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "1,10": [
        {
            "type": "setValue",
            "name": "flag:16",
            "value": "flag:16+1"
        },
        {
            "type": "if",
            "condition": "flag:16==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
                    ]
                }
            ],
            "false": []
        }
    ],
    "3,10": [
        {
            "type": "setValue",
            "name": "flag:16",
            "value": "flag:16+1"
        },
        {
            "type": "if",
            "condition": "flag:16==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
                    ]
                }
            ],
            "false": []
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}