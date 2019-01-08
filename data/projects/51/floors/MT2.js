main.floors.MT2=
{
"floorId": "MT2",
"title": "第02层",
"name": "第02层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 82,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  0,222,  0,222,  0,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1, 21, 21,  1,  0,  0,  0,  1,  0,121,  1],
    [  1,  0,  1, 21,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1,123,  0,  1,  0,  0,  0,  1,  0,122,  1],
    [  1,123,  1,  0,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1, 32, 32,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 87,  1, 32,  0, 86,  0,  0,  0, 86,  0,123,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "11,4": [
        "\t[老人,man]谢谢你救了我 这里1000金币请收下吧",
        {
            "type": "setValue",
            "name": "status:money",
            "value": "status:money+1000"
        },
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
    "11,7": [
        {
            "type": "choices",
            "text": "\t[商人,woman]谢谢你救了我 我可以帮你提升3%的攻击和防御",
            "choices": [
                {
                    "text": "现在就要",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "status:atk",
                            "value": "Math.round(status:atk*1.03)"
                        },
                        {
                            "type": "setValue",
                            "name": "status:def",
                            "value": "Math.round(status:def*1.03)"
                        },
                        {
                            "type": "hide",
                            "time": 500
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
                    ]
                },
                {
                    "text": "暂时不用",
                    "action": []
                }
            ]
        }
    ],
    "11,11": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[小偷,thief]你终于来了 我以为再也出不去了呢 35层有个魔龙挡路 我帮你挖一条暗道吧",
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        10
                    ]
                ],
                "floorId": "MT35"
            },
            {
                "type": "hide",
                "time": 750
            }
        ]
    },
    "3,7": [
        "\t[小偷,thief]喂 醒醒",
        {
            "type": "setFg",
            "time": 1000
        },
        "\t[小偷,thief]你清醒了吗 你到监狱时还处在昏迷中 魔法警卫把你扔到我这个房间 但你很幸运 我刚完成逃跑的暗道你就醒了 我们一起越狱吧",
        {
            "type": "openDoor",
            "loc": [
                2,
                7
            ]
        },
        {
            "type": "move",
            "time": 500,
            "steps": [
                "left",
                "left",
                "down"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    8
                ]
            ]
        }
    ],
    "1,8": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[小偷,thief]我们终于逃出来了 你的剑盾被警卫拿走了 你必须先找到武器 我知道铁剑在5楼 铁盾在9楼 你最好先取到他们 我现在有事要做没法帮你 再见",
            {
                "type": "move",
                "time": 500,
                "steps": [
                    "down",
                    "down",
                    "down"
                ],
                "immediateHide": false
            }
        ]
    }
},
"changeFloor": {
    "1,1": {
        "floorId": "MT1",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    },
    "1,11": {
        "floorId": "MT3",
        "loc": [
            2,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "6,2": [
        {
            "type": "setValue",
            "name": "flag:0",
            "value": "flag:0+1"
        },
        {
            "type": "if",
            "condition": "flag:0==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        5
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        11
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        5
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        11
                    ]
                }
            ],
            "false": []
        }
    ],
    "8,2": [
        {
            "type": "setValue",
            "name": "flag:0",
            "value": "flag:0+1"
        },
        {
            "type": "if",
            "condition": "flag:0==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        5
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        11
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        5
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        11
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
}