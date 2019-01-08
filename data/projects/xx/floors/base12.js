main.floors.base12=
{
"floorId": "base12",
"title": "主塔-12",
"name": "-12",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,219, 23,  1, 28,  1,  1, 27, 63, 28,  1, 88,  3],
    [  3, 81,  1,  1,331,  1,  1,  0,  0,  0,  1,  0,  3],
    [  3,  0,  0,  0,231, 21,  1,  1, 85,  1,  1,  0,  3],
    [  3,  1,  0,  1,  1,  1,  1,220,  0,220,  1,219,  3],
    [  3,  0,  0,  0,230, 21,  1,  0,  0,  0,  0,  0,  3],
    [  3,  1, 82,  1, 81,  1,  1,  1,  1,  1,  1,231,  3],
    [  3,  1,231,  1,231,  1,  1, 31, 21,  1,  1,  0,  3],
    [  3,  1, 81,  1, 81,  1,  1,225,212, 81, 81,  0,  3],
    [  3,  0,222,  0,222, 31,  1, 31, 21,  1,  1,  0,  3],
    [  3,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,212,  3],
    [  3, 88,  0,219,  0, 87,  1, 87,  0,  0,212,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "8,3": [
        {
            "type": "if",
            "condition": "flag:doorB12==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        8,
                        3
                    ]
                }
            ],
            "false": []
        }
    ]
},
"changeFloor": {
    "5,11": {
        "floorId": "base11",
        "loc": [
            5,
            11
        ]
    },
    "7,11": {
        "floorId": "base11",
        "loc": [
            7,
            11
        ]
    },
    "1,11": {
        "floorId": "base13",
        "loc": [
            1,
            11
        ]
    },
    "11,1": {
        "floorId": "base13",
        "loc": [
            11,
            1
        ]
    }
},
"afterBattle": {
    "7,4": [
        {
            "type": "setValue",
            "name": "flag:doorB12",
            "value": "flag:doorB12+1"
        }
    ],
    "9,4": [
        {
            "type": "setValue",
            "name": "flag:doorB12",
            "value": "flag:doorB12+1"
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"downFloor": [
    11,
    1
],
"upFloor": [
    7,
    11
],
}