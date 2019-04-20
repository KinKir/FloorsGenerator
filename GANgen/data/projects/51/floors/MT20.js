main.floors.MT20=
{
"floorId": "MT20",
"title": "第20层",
"name": "第20层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 28, 27,  1,  0, 21, 21, 21,  0,  1, 31, 32,  1],
    [  1, 21,  0,  1, 27,206,206,206, 28,  1,  0, 21,  1],
    [  1,  1, 82,  1, 27,206,208,206, 28,  1, 82,  1,  1],
    [  1,205,  0,  1, 27,206,206,206, 28,  1,  0,205,  1],
    [  1,  0,205,  1,  0, 32,  0, 32,  0,  1,205,  0,  1],
    [  1, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 81,  1],
    [  1,  0,215,  0,  1,  0,  0,  0,  1,  0,215,  0,  1],
    [  1, 31,  0,  0,218,  0, 88,  0,218,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "6,8": [
        {
            "type": "if",
            "condition": "!flag:MT20",
            "true": [
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
                            7,
                            6
                        ],
                        [
                            5,
                            7
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            7
                        ]
                    ],
                    "time": 1500
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ],
                    "time": 1500
                },
                {
                    "type": "setBlock",
                    "number": 85,
                    "loc": [
                        6,
                        9
                    ]
                },
                "\t[vampire]很好 你打败了骷髅族 但别想象藐视骷髅人那样藐视我 我对于你就像是神一样 是不可战胜的 来吧",
                {
                    "type": "hide"
                }
            ],
            "false": [
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp+400"
                },
                {
                    "type": "hide"
                }
            ]
        }
    ],
    "6,6": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": []
    },
    "6,1": null,
    "5,5": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,5": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,5": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,6": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,6": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,7": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,7": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,7": {
        "trigger": "action",
        "enable": true,
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
    },
    "6,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "4,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "4,6": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "4,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "8,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "8,6": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "8,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    }
},
"changeFloor": {
    "6,11": {
        "floorId": "MT19",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "6,1": {
        "floorId": "MT21",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "6,6": [
        "\t[vampire]上帝啊 我做梦也没想到我会被别人打败 毫无疑问你是比我强 但以你现在的状态对于大法师来说又太弱了 你仅仅取得了一个暂时的胜利",
        {
            "type": "setValue",
            "name": "flag:MT20",
            "value": "true"
        },
        {
            "type": "setBlock",
            "number": 32,
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    4
                ],
                [
                    6,
                    4
                ],
                [
                    7,
                    4
                ],
                [
                    4,
                    5
                ],
                [
                    4,
                    6
                ],
                [
                    4,
                    7
                ],
                [
                    8,
                    5
                ],
                [
                    8,
                    6
                ],
                [
                    8,
                    7
                ],
                [
                    5,
                    8
                ],
                [
                    6,
                    8
                ],
                [
                    7,
                    8
                ]
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                3
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                9
            ]
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 2,
}