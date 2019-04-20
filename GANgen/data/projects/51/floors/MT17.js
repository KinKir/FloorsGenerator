main.floors.MT17=
{
"floorId": "MT17",
"title": "第17层",
"name": "第17层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0, 87,  0,  1, 27,  0, 28,  1],
    [  1,  0, 37,  0,  1,  0,  0,  0,  1,  0, 32,  0,  1],
    [  1,  0,  0,  0,  1,214,  1,206,  1, 21,  0, 21,  1],
    [  1,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,  1],
    [  1,221,  0,221,  1, 81,  1, 82,  1,214,  0,214,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,  1],
    [  1,  1, 85,  1,  1,213,  1,203,  1,  1, 85,  1,  1],
    [  1,221,  0,221,  1,  0,  0,  0,  1,213,  0,213,  1],
    [  1,  0,  0,  0,  1,  1,218,  1,  1,  0,  0,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1, 31,  0,  0,206,  0, 88,  0,206,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "6,11": {
        "floorId": "MT16",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "6,1": {
        "floorId": "MT18",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "3,8": [
        {
            "type": "setValue",
            "name": "flag:4",
            "value": "flag:4+1"
        },
        {
            "type": "if",
            "condition": "flag:4==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "1,8": [
        {
            "type": "setValue",
            "name": "flag:4",
            "value": "flag:4+1"
        },
        {
            "type": "if",
            "condition": "flag:4==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "3,5": [
        {
            "type": "setValue",
            "name": "flag:5",
            "value": "flag:5+1"
        },
        {
            "type": "if",
            "condition": "flag:5==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        4
                    ]
                }
            ],
            "false": []
        }
    ],
    "1,5": [
        {
            "type": "setValue",
            "name": "flag:5",
            "value": "flag:5+1"
        },
        {
            "type": "if",
            "condition": "flag:5==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        4
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,8": [
        {
            "type": "setValue",
            "name": "flag:6",
            "value": "flag:6+1"
        },
        {
            "type": "if",
            "condition": "flag:6==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "9,8": [
        {
            "type": "setValue",
            "name": "flag:6",
            "value": "flag:6+1"
        },
        {
            "type": "if",
            "condition": "flag:6==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        7
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,5": [
        {
            "type": "setValue",
            "name": "flag:7",
            "value": "flag:7+1"
        },
        {
            "type": "if",
            "condition": "flag:7==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                }
            ],
            "false": []
        }
    ],
    "9,5": [
        {
            "type": "setValue",
            "name": "flag:7",
            "value": "flag:7+1"
        },
        {
            "type": "if",
            "condition": "flag:7==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
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
"item_ratio": 2,
}