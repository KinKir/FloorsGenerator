main.floors.MT34=
{
"floorId": "MT34",
"title": "第34层",
"name": "第34层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 31,  1,  0, 21,  0,  1, 21, 21, 28,  1],
    [  1,  0,  0,  0, 81,216,  0,227, 81,  0, 21, 31,  1],
    [  1,  0,216,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 81,  1,  1,201,  1,224,  1,203,  1,225,  1],
    [  1, 21,  0, 21,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 21,  0, 21,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  1, 81,  1,  1,212,  1,202,  1,227,  1,205,  1],
    [  1,  0,  0,212,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,224,  1,  0, 81,  0,  0,  0, 81,225,  0, 31,  1],
    [  1, 32,225,  0,  1,  0, 87,  0,  1,  0, 21, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "3,5": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "1,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "3,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    }
},
"changeFloor": {
    "1,1": {
        "floorId": "MT33",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT35",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "5,4": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,8": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,4": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "7,8": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "9,4": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "9,8": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,4": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,8": [
        {
            "type": "setValue",
            "name": "flag:MT34",
            "value": "flag:MT34+1"
        },
        {
            "type": "if",
            "condition": "flag:MT34==8",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            5
                        ],
                        [
                            3,
                            5
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            3,
                            7
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        2,
                        6
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