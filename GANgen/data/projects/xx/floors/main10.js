main.floors.main10=
{
"floorId": "main10",
"title": "主塔10",
"name": "10",
"canFlyTo": true,
"canUseQuickShop": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,330,330,  2,  2, 87,  2,  2,  2,  2,  2, 87,  3],
    [  3,  2,330,  2,  2,226,  2,  2,  0, 21, 22, 23,  3],
    [  3,  2,330,  2,  2,203,  2,  2,  0,  2,  2,  2,  3],
    [  3,  2,330,  2,  2,253,  2,  2, 58,210, 59,  0,  3],
    [  3,  2,330,  2,  2,216,  2,  2,  2,  2,  2, 31,  3],
    [  3,  2,330,  2,210,213,  2,  2, 28,213, 31,  0,  3],
    [  3,  2,  0,  2, 81,  2,  2,  2,  0,  2,  2,  2,  3],
    [  3,221,221,  2, 29, 21,  2,  2, 27,  2, 88,221,  3],
    [  3,221,  2,  2,  2,206,  2,  2,  0,  2,  2,226,  3],
    [  3,215,215,  0,206,206,  2,  2,  0, 86, 58, 59,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "1,1": [
        {
            "type": "if",
            "condition": "core.terrainExists(1,1,'flower')",
            "true": [
                {
                    "type": "changeFloor",
                    "floorId": "MOTA10",
                    "loc": [
                        6,
                        11
                    ]
                }
            ],
            "false": []
        }
    ]
},
"changeFloor": {
    "5,1": {
        "floorId": "main11",
        "loc": [
            5,
            1
        ]
    },
    "11,1": {
        "floorId": "main11",
        "loc": [
            11,
            1
        ]
    },
    "10,8": {
        "floorId": "main9",
        "loc": [
            10,
            8
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "1,1": [
        {
            "type": "setBlock",
            "number": 168,
            "loc": [
                1,
                1
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    1
                ]
            ],
            "time": 500
        }
    ]
},
"cannotMove": {},
"downFloor": [
    2,
    7
],
"upFloor": [
    5,
    1
],
}