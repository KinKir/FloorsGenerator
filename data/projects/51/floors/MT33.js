main.floors.MT33=
{
"floorId": "MT33",
"title": "第33层",
"name": "第33层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,214,  0,216, 81,  0,  0,  0, 88,  1],
    [  1,  0,  0,  1,  0, 31,  0,  1, 81,  1,  1,  1,  1],
    [  1, 82,  1,  1,121,  0, 21,  1,  0,  0,  0, 32,  1],
    [  1,  0, 31,  1,  1, 81,  1,  1,  1,  1, 85,  1,  1],
    [  1,216,  0,  1,  0,  0,214,  0,  1,212,  0,212,  1],
    [  1,  0,  0,  1,224,  1,  1, 81,  1,  0,  0,  0,  1],
    [  1,  0,216, 81,  0,  0,212,  0,  1,225,  0,225,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1, 85,  1,  1],
    [  1,  0,  0,214,  1,  0,225,  0,  1,  0,  0,  0,  1],
    [  1,224,  1,  0,  1, 21,  1,216,  1,  0, 39,  0,  1],
    [  1, 21,225,  0, 82,  0, 81,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "4,3": [
        "\t[老人,man]别匆忙 放慢速度 加快节奏",
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
    "8,10": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "10,4": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": []
    },
    "10,8": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": []
    },
    "10,5": [
        {
            "type": "show",
            "loc": [
                [
                    10,
                    4
                ],
                [
                    10,
                    8
                ]
            ]
        },
        {
            "type": "hide"
        }
    ],
    "9,10": [
        {
            "type": "show",
            "loc": [
                [
                    8,
                    10
                ]
            ]
        },
        {
            "type": "hide"
        }
    ]
},
"changeFloor": {
    "11,1": {
        "floorId": "MT32",
        "loc": [
            10,
            1
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT34",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "9,5": [
        {
            "type": "setValue",
            "name": "flag:MT33d",
            "value": "flag:MT33d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT33d==4",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        8
                    ]
                }
            ],
            "false": []
        }
    ],
    "9,7": [
        {
            "type": "setValue",
            "name": "flag:MT33d",
            "value": "flag:MT33d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT33d==4",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        8
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,5": [
        {
            "type": "setValue",
            "name": "flag:MT33d",
            "value": "flag:MT33d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT33d==4",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        8
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,7": [
        {
            "type": "setValue",
            "name": "flag:MT33d",
            "value": "flag:MT33d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT33d==4",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        8
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