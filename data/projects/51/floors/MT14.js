main.floors.MT14=
{
"floorId": "MT14",
"title": "第14层",
"name": "第14层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,214,  0,214,  1, 28, 21, 31,  1, 21, 21, 21,  1],
    [  1,  0,214,  0,  1,203,  1,214,  1,  0,  0, 21,  1],
    [  1,  1,  0,  0,  1,  0,  1,  0,  1,  1, 81,  1,  1],
    [  1,  1, 82,  1,  1, 82,  1, 81,  1,  0,214,  0,  1],
    [  1, 31,  0,  0,206,  0,215,  0,206,  0,  0,  0,  1],
    [  1,  0,203,  0,  1,  1, 81,  1,  1, 31,  0,213,  1],
    [  1, 81,  1, 81,  1,  0,  0,  0,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0,213,  0, 81,  0,203,  0,203,  0,  1],
    [  1,218,  1,218,  1,  1, 16,  1,  1, 81,  1,  1,  1],
    [  1,  0,  1,  0,  1, 31,  0,  0,  1,  0,  0,  0,  1],
    [  1, 22,  1,  0, 81,  0, 87,  0,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "11,11": {
        "floorId": "MT13",
        "loc": [
            10,
            11
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT15",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "1,1": [
        {
            "type": "setValue",
            "name": "flag:MT14d",
            "value": "flag:MT14d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT14d==3",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        1,
                        3
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        1,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "2,2": [
        {
            "type": "setValue",
            "name": "flag:MT14d",
            "value": "flag:MT14d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT14d==3",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        1,
                        3
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        1,
                        3
                    ]
                }
            ],
            "false": []
        }
    ],
    "3,1": [
        {
            "type": "setValue",
            "name": "flag:MT14d",
            "value": "flag:MT14d+1"
        },
        {
            "type": "if",
            "condition": "flag:MT14d==3",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        1,
                        3
                    ]
                },
                {
                    "type": "setBlock",
                    "number": 23,
                    "loc": [
                        1,
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
"item_ratio": 2,
"bgm": null,
}