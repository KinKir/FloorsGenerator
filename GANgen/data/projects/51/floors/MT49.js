main.floors.MT49=
{
"floorId": "MT49",
"title": "第49层",
"name": "第49层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1, 89,  4,  1,  1,  1,  1,  1,  1,  1,  4,  4,  4],
    [ 66,  4,  1,  1,  0,  0,  0,  0,  0,  1,  1,  4,  4],
    [  4,  1,  1,  0,  0,246,246,246,  0,  0,  1,  1,  4],
    [  1,  1,  0,  0,  0,246,271,246,  0,  0,  0,  1,  1],
    [  1,  0, 27, 27, 27,246,246,246, 28, 28, 28,  0,  1],
    [  1,  0,  1,  0,  0, 32, 32, 32,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  1, 85,  1,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,228,  0,228,  1,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  1, 85,  1,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,220,  0,220,  1,  1,  1,  1,  1],
    [  4, 88,  0, 83,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  4]
],
"firstArrive": [],
"events": {
    "5,2": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,2": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,2": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,3": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,3": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": []
    },
    "7,3": {
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
    "6,6": [
        {
            "type": "show",
            "loc": [
                [
                    5,
                    2
                ],
                [
                    6,
                    2
                ],
                [
                    7,
                    2
                ],
                [
                    5,
                    3
                ],
                [
                    6,
                    3
                ],
                [
                    7,
                    3
                ],
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
                ]
            ],
            "time": 1000
        },
        "\t[271]你终于来啦 我好想和你干一把 但是我的部下不同意",
        {
            "type": "show",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        {
            "type": "hide"
        }
    ],
    "2,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "3,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "8,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "4,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "9,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "10,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,7": {
        "trigger": null,
        "enable": true,
        "noPass": null,
        "displayDamage": false,
        "data": []
    }
},
"changeFloor": {
    "1,0": {
        "floorId": "MT24",
        "loc": [
            6,
            11
        ],
        "direction": "down"
    },
    "1,11": {
        "floorId": "MT48",
        "loc": [
            1,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "7,10": [
        {
            "type": "setValue",
            "name": "flag:14",
            "value": "flag:14+1"
        },
        {
            "type": "if",
            "condition": "flag:14==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        9
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,10": [
        {
            "type": "setValue",
            "name": "flag:14",
            "value": "flag:14+1"
        },
        {
            "type": "if",
            "condition": "flag:14==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        9
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,8": [
        {
            "type": "setValue",
            "name": "flag:15",
            "value": "flag:15+1"
        },
        {
            "type": "if",
            "condition": "flag:15==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,8": [
        {
            "type": "setValue",
            "name": "flag:15",
            "value": "flag:15+1"
        },
        {
            "type": "if",
            "condition": "flag:15==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "6,2": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50+1"
        },
        {
            "type": "if",
            "condition": "flag:MT50==4",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:fengyin",
                    "value": "true"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.events.afterLoadData();\n}"
                },
                "\t[271]完蛋了 我被封印了 功力只剩一成"
            ],
            "false": []
        }
    ],
    "7,3": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50+1"
        },
        {
            "type": "if",
            "condition": "flag:MT50==4",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:fengyin",
                    "value": "true"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.events.afterLoadData();\n}"
                },
                "\t[271]完蛋了 我被封印了 功力只剩一成"
            ],
            "false": []
        }
    ],
    "6,4": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50+1"
        },
        {
            "type": "if",
            "condition": "flag:MT50==4",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:fengyin",
                    "value": "true"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.events.afterLoadData();\n}"
                },
                "\t[271]完蛋了 我被封印了 功力只剩一成"
            ],
            "false": []
        }
    ],
    "5,3": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50+1"
        },
        {
            "type": "if",
            "condition": "flag:MT50==4",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:fengyin",
                    "value": "true"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.events.afterLoadData();\n}"
                },
                "\t[271]完蛋了 我被封印了 功力只剩一成"
            ],
            "false": []
        }
    ],
    "5,2": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50-1"
        }
    ],
    "7,2": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50-1"
        }
    ],
    "5,4": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50-1"
        }
    ],
    "7,4": [
        {
            "type": "setValue",
            "name": "flag:MT50",
            "value": "flag:MT50-1"
        }
    ],
    "6,3": [
        "\t[271]很好嘛 你通过了我的面试 你是个合格的勇士",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    3
                ],
                [
                    6,
                    3
                ],
                [
                    7,
                    3
                ],
                [
                    5,
                    4
                ],
                [
                    7,
                    4
                ],
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
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": 23,
            "loc": [
                5,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 62,
            "loc": [
                7,
                2
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    2,
                    4
                ],
                [
                    3,
                    4
                ],
                [
                    4,
                    4
                ],
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
                    8,
                    4
                ],
                [
                    9,
                    4
                ],
                [
                    10,
                    4
                ],
                [
                    5,
                    2
                ],
                [
                    7,
                    2
                ]
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                7
            ]
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}