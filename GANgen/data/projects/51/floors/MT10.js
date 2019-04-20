main.floors.MT10=
{
"floorId": "MT10",
"title": "第10层",
"name": "第10层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,211,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209,209,209,  1,  1, 85,  1,  1,209,209,209,  1],
    [  1, 32,210, 32, 85,209,211,209, 85, 21,210, 21,  1],
    [  1,  1,  1,  1,  1,209,  0,209,  1,  1,  1,  1,  1],
    [  1,209, 28,209,  1,  1,210,  1,  1,209, 27,209,  1],
    [  1,  0,210,  0,  1,  1, 85,  1,  1,  0,210,  0,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1,  1, 83,  1,  1, 81,  1, 81,  1],
    [  1,123,  1,  0,  1,  0,123,  0,  1,  0,  1,  0,  1],
    [  1, 88,  1,  0,217,  0, 87,  0,217,  0,  1, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "6,7": {
        "enable": false,
        "data": []
    },
    "6,3": {
        "enable": false,
        "data": []
    },
    "6,5": [
        {
            "type": "show",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        "\t[skeletonCaptain]哈哈哈 你是如此的幸运能安全到达这里 但现在好运离你而去了 你中埋伏了 弟兄们给我上",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    6
                ],
                [
                    7,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 500,
            "steps": [
                "up",
                "up",
                "up"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    1
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    4
                ],
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                2,
                4
            ],
            "time": 100,
            "steps": [
                "right",
                "right",
                "right",
                "down",
                "down",
                "right"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                4
            ],
            "time": 100,
            "steps": [
                "left",
                "left",
                "left",
                "left"
            ],
            "immediateHide": true
        },
        {
            "type": "setBlock",
            "number": 210,
            "loc": [
                6,
                4
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    4
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                3,
                3
            ],
            "time": 100,
            "steps": [
                "down",
                "right",
                "right",
                "down",
                "down"
            ],
            "immediateHide": true
        },
        {
            "type": "setBlock",
            "number": 209,
            "loc": [
                5,
                6
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                2,
                3
            ],
            "time": 100,
            "steps": [
                "right",
                "down",
                "right",
                "right",
                "down"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    5
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                1,
                3
            ],
            "time": 100,
            "steps": [
                "right",
                "right",
                "down",
                "right",
                "right"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    4
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                3
            ],
            "time": 100,
            "steps": [
                "down",
                "left",
                "left",
                "down",
                "down"
            ],
            "immediateHide": true
        },
        {
            "type": "setBlock",
            "number": 209,
            "loc": [
                7,
                6
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                3
            ],
            "time": 100,
            "steps": [
                "left",
                "down",
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
                    7,
                    5
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                3
            ],
            "time": 100,
            "steps": [
                "left",
                "left",
                "down",
                "left",
                "left"
            ],
            "immediateHide": true
        },
        {
            "type": "show",
            "loc": [
                [
                    7,
                    4
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    4
                ],
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "hide"
        }
    ],
    "6,6": {
        "enable": false,
        "data": []
    },
    "5,5": {
        "enable": false,
        "data": []
    },
    "5,4": {
        "enable": false,
        "data": []
    },
    "7,4": {
        "enable": false,
        "data": []
    },
    "7,5": {
        "enable": false,
        "data": []
    },
    "6,1": {
        "trigger": "action",
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[skeletonCaptain]你怎能杀出重围 我是绝不会让你通过的 来吧 我要与你决斗",
            {
                "type": "battle",
                "id": "skeletonCaptain"
            },
            {
                "type": "hide"
            },
            {
                "type": "setBlock",
                "number": 27,
                "loc": [
                    1,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 27,
                "loc": [
                    2,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 27,
                "loc": [
                    3,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 28,
                "loc": [
                    9,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 28,
                "loc": [
                    10,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 28,
                "loc": [
                    11,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": 32,
                "loc": [
                    2,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": 21,
                "loc": [
                    10,
                    4
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        3,
                        3
                    ],
                    [
                        1,
                        4
                    ],
                    [
                        2,
                        4
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        10,
                        3
                    ],
                    [
                        11,
                        3
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
                        11,
                        4
                    ]
                ]
            },
            "\t[skeletonCaptain]不 这是不可能的 你怎会打败我 你别太得意 后面还有许多强大的对手和机关存在 你稍有疏忽就必死无疑",
            {
                "type": "openDoor",
                "loc": [
                    4,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        8
                    ],
                    [
                        6,
                        11
                    ]
                ]
            }
        ]
    },
    "8,4": {
        "enable": true,
        "data": []
    },
    "4,4": {
        "enable": true,
        "data": []
    },
    "1,10": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,11": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "1,4": {
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
    "9,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "11,4": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        10
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    1,
                    10
                ],
                "time": 500,
                "steps": [
                    "up",
                    "up",
                    "right",
                    "right",
                    "down",
                    "down",
                    "down",
                    "right",
                    "right",
                    "up",
                    "right"
                ],
                "immediateHide": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            {
                "type": "hide"
            }
        ]
    },
    "6,10": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[小偷,thief]你总算是帮我解决了这麻烦的骷髅队长 我终于可以继续上去装逼了 我听说银盾在11楼 银剑在17楼 这消息不知道对你是否有用 下次见",
            {
                "type": "move",
                "time": 500,
                "steps": [
                    "down"
                ],
                "immediateHide": false
            }
        ]
    }
},
"changeFloor": {
    "1,11": {
        "floorId": "MT9",
        "loc": [
            1,
            10
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT11",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "6,6": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "6,4": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,4": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,5": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,6": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,6": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,5": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,4": [
        {
            "type": "setValue",
            "name": "flag:MT10d",
            "value": "flag:MT10d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT10d==8",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
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