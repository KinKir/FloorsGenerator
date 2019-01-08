main.floors.main17=
{
"floorId": "main17",
"title": "主塔17",
"name": "17",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 88,  0, 83,  4,  4, 87,  4, 87,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  0,204,  4,  0,  4, 88,  4,  3],
    [  3,  4,  4,  4,  4,226,  4,  4,218,  4,  0,  0,  3],
    [  3, 58, 59,  4,  0,  0, 88,  4,211,  4,  0,  0,  3],
    [  3,  0,  0,  4,  0,  0,  4,  4,218,  4, 21, 23,  3],
    [  3,  0,207, 86,226,  0,  4,  4,  0,  4,211,207,  3],
    [  3, 31, 31,  4,224,226, 22,  4,  0,  4,224,226,  3],
    [  3,  4,  4,  4,  4, 81,  4,  4,  0,  4, 31, 32,  3],
    [  3,  4,219,  0,  0, 63, 31,  4,  0,  4,  0,  0,  3],
    [  3,  4,  0,  4,  4,  4,  4,  4,  0,  4,  0,  0,  3],
    [  3,  4,  0,  0,222,222, 38,  4,204,226,204,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "3,1": null,
    "4,1": [
        {
            "type": "if",
            "condition": "core.hasItem('magicKey')&&('flower'==core.plugin.getBlockId(4,1))",
            "true": [
                {
                    "type": "changeFloor",
                    "floorId": "MOTA1",
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
    "6,1": {
        "floorId": "main18",
        "loc": [
            6,
            1
        ]
    },
    "8,1": {
        "floorId": "main18",
        "loc": [
            8,
            1
        ]
    },
    "3,1": null,
    "1,1": {
        "floorId": "main16",
        "loc": [
            1,
            1
        ]
    },
    "6,4": {
        "floorId": "main16",
        "loc": [
            6,
            4
        ]
    },
    "10,2": {
        "floorId": "main16",
        "loc": [
            10,
            2
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "3,1": [
        {
            "type": "setBlock",
            "number": 168,
            "loc": [
                4,
                1
            ]
        }
    ]
},
"cannotMove": {},
"downFloor": [
    6,
    4
],
"upFloor": [
    6,
    1
],
}