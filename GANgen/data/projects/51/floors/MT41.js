main.floors.MT41=
{
"floorId": "MT41",
"title": "第41层",
"name": "第41层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  1,  0, 22,  1, 88,  1, 22,  0,  1, 31,  1],
    [  1, 81,220,  0,  0,  1,  0,  1,  0,  0,  1, 81,  1],
    [  1, 81,  1,  0,  1,  1,  0,  1,  1,  0,  1, 81,  1],
    [  1, 81,  1, 81,  1,246,  0,246,  1, 81,  1, 81,  1],
    [  1,  0,  0,219,  1,  1, 52,  1,  1,219,  0,  0,  1],
    [  1,207,  0,  0,  0, 82,  1, 82,  0,  0,  0,207,  1],
    [  1,  0,207,  0,204,  1, 81,  1,204,  0,207,  0,  1],
    [  1, 81,  1,  1, 81,  1, 81,  1, 81,  1,  1, 81,  1],
    [  1, 81,  1, 31,  0,  1, 81,  1,  0, 31,  1, 81,  1],
    [  1, 81,  1, 21, 21,  1,  0,  1, 21, 21,  1, 81,  1],
    [  1, 32,  1, 21, 27,  1, 87,  1, 28, 21,  1, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "10,2": {
        "trigger": "action",
        "enable": true,
        "noPass": true,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "flag:MT41",
                "true": [
                    {
                        "type": "if",
                        "condition": "!flag:MT41_2",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    10,
                                    2
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": 220,
                                "loc": [
                                    10,
                                    2
                                ]
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        10,
                                        2
                                    ]
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT41_2",
                                "value": "true"
                            }
                        ],
                        "false": [
                            {
                                "type": "battle",
                                "id": "redWizard"
                            },
                            {
                                "type": "hide"
                            },
                            {
                                "type": "setBlock",
                                "number": 1,
                                "loc": [
                                    5,
                                    6
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": 1,
                                "loc": [
                                    7,
                                    6
                                ]
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ],
                                    [
                                        6,
                                        6
                                    ],
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
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ],
                                    [
                                        7,
                                        7
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "6,6": {
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
    }
},
"changeFloor": {
    "6,1": {
        "floorId": "MT40",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT42",
        "loc": [
            5,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "2,2": [
        {
            "type": "setValue",
            "name": "flag:MT41",
            "value": "true"
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}