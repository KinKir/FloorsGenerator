main.floors.MT40=
{
"floorId": "MT40",
"title": "第40层",
"name": "第40层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,226,  0,  0,  0,  0,  0,  1],
    [  1,  0,224,224,224,  0,  0,  0,227,227,227,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,212,212,212,  0,225,225,225,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,226,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1, 28, 21,  0,  1,216,  0,216,  1, 31,224,  0,  1],
    [  1, 32,  0,  0,  1,  0,  0,  0,  1,225,  0,  0,  1],
    [  1, 27,  0,227, 82,  0,  0,  0, 81,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "6,1": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "!flag:MT40",
                "true": [
                    {
                        "type": "battle",
                        "id": "yellowKnight"
                    },
                    {
                        "type": "hide"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT40",
                        "value": "true"
                    }
                ],
                "false": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT41",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ]
    },
    "6,7": [
        {
            "type": "hide"
        },
        "\t[yellowKnight]你居然可以杀到我面前来 看见我这个阵势 你害怕了吗 大家上",
        {
            "type": "if",
            "condition": "core.enemyExists(7,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        7,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.soldier.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "soldier"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(8,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        8,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "left",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.soldier.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "soldier"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(9,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        9,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "left",
                        "left",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.soldier.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "soldier"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(5,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        5,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.ghostSkeleton.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "ghostSkeleton"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(4,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        4,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "right",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.ghostSkeleton.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "ghostSkeleton"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(3,4)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        3,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "right",
                        "right",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.ghostSkeleton.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "ghostSkeleton"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(8,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        8,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "left",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.redKnight.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "redKnight"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(9,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        9,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "left",
                        "left",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.redKnight.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "redKnight"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(10,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        10,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "left",
                        "left",
                        "left",
                        "left",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.redKnight.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "redKnight"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(4,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        4,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "right",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.swordsman.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "swordsman"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(3,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        3,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "right",
                        "right",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.swordsman.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "swordsman"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(2,2)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        2,
                        2
                    ],
                    "time": 500,
                    "steps": [
                        "right",
                        "right",
                        "right",
                        "right",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ],
                    "immediateHide": true
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.swordsman.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "swordsman"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "core.enemyExists(6,1)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        6,
                        1
                    ],
                    "time": 500,
                    "steps": [
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
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "status:hp-Math.max(0, core.material.enemys.yellowKnight.atk-status:def)"
                },
                {
                    "type": "battle",
                    "id": "yellowKnight"
                }
            ],
            "false": []
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
        "\t[yellowKnight]算你狠 继续来抓我啊",
        {
            "type": "setBlock",
            "number": 87,
            "loc": [
                6,
                1
            ]
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
            "type": "setValue",
            "name": "flag:MT40",
            "value": "true"
        },
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 500,
            "steps": [
                "up",
                "up",
                "up",
                "up",
                "up"
            ],
            "immediateHide": false
        },
        {
            "type": "setBlock",
            "number": 21,
            "loc": [
                2,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 21,
            "loc": [
                3,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 21,
            "loc": [
                4,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 27,
            "loc": [
                8,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 27,
            "loc": [
                9,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 27,
            "loc": [
                10,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 32,
            "loc": [
                3,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 32,
            "loc": [
                4,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 32,
            "loc": [
                5,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                7,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                8,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                9,
                4
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    2,
                    2
                ],
                [
                    3,
                    2
                ],
                [
                    4,
                    2
                ],
                [
                    8,
                    2
                ],
                [
                    9,
                    2
                ],
                [
                    10,
                    2
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
                    4
                ],
                [
                    7,
                    4
                ],
                [
                    8,
                    4
                ],
                [
                    9,
                    4
                ]
            ]
        }
    ],
    "6,6": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    }
},
"changeFloor": {
    "11,11": {
        "floorId": "MT39",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}