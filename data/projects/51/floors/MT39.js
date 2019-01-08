main.floors.MT39=
{
"floorId": "MT39",
"title": "第39层",
"name": "第39层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0, 88,  1],
    [  1,  0, 81,  0, 81,  0, 81,  0,  1,122,  0,  0,  1],
    [  1,  0,  0,  0, 50,  0,  0,  0,  1,  0,  0, 21,  1],
    [  1,  0, 81,  0, 81, 50, 81,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,225,  1],
    [  1,  0, 81,  0, 81,  0, 81,  0,  1,216,  1, 27,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,212,  1],
    [  1,  1, 82,  1,  1,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,212,  1,224, 28,227,  1,  0,227,  0,  1],
    [  1,  1,212,  0, 81,  0,  1,  0, 81,  0,  0,  0,  1],
    [  1,121,  0, 21,  1,  0,216,  0,  1, 31,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "9,2": [
        {
            "type": "choices",
            "text": "\t[商人,woman]2000金币换3个蓝钥匙，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=2000",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-2000"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:blueKey",
                                    "value": "item:blueKey+3"
                                },
                                "\t[商人,woman]你居然买了我的钥匙 那我就告诉你一个秘密 神圣剑有3种方法都可以得到 不同的方法路线也会不同",
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
    "1,11": [
        "\t[老人,man]谜题 在3点 拥有传送功能的密宝 就会出现",
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
    "4,3": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    }
},
"changeFloor": {
    "11,1": {
        "floorId": "MT38",
        "loc": [
            10,
            1
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT40",
        "loc": [
            10,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "2,2": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "2,4": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "2,6": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "4,6": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "6,6": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "4,4": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "6,2": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39-1"
        }
    ],
    "4,2": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39+1"
        },
        {
            "type": "if",
            "condition": "flag:MT39==2",
            "true": [
                {
                    "type": "setBlock",
                    "number": 50,
                    "loc": [
                        4,
                        4
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            5,
                            4
                        ]
                    ]
                }
            ],
            "false": []
        }
    ],
    "6,4": [
        {
            "type": "setValue",
            "name": "flag:MT39",
            "value": "flag:MT39+1"
        },
        {
            "type": "if",
            "condition": "flag:MT39==2",
            "true": [
                {
                    "type": "setBlock",
                    "number": 50,
                    "loc": [
                        4,
                        4
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            5,
                            4
                        ]
                    ]
                }
            ],
            "false": []
        }
    ]
},
"cannotMove": {},
"item_ratio": 4,
}