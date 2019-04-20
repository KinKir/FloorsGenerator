main.floors.base17=
{
"floorId": "base17",
"title": "主塔-17",
"name": "-17",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,236,  0,227,  0, 11, 28,227, 28,227,  0,  3],
    [  3, 11,  1,  1,  1,  1,  1,  1,  0,  1,  1, 81,  3],
    [  3,  0,  1,236, 11, 31,  1,  1, 81,  1, 31, 11,  3],
    [  3,227, 81,  0,  1, 31,121,  1, 81,  1, 31,255,  3],
    [  3,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1, 87,  3],
    [  3, 21, 32,  0,255,  0,  0, 63,227, 11,  1,  1,  3],
    [  3, 81,  1, 11,  1,  1, 82,  1,  1,  0, 82,220,  3],
    [  3, 81,  1, 21,  1, 21, 23, 21,  1,219,  1, 27,  3],
    [  3,223,  1, 21,  1, 32, 88, 32,  1,  0,  1,331,  3],
    [  3,223,  1,  0,  1,  1,  1,  1,  1,  0,  1,331,  3],
    [  3,122,  1,  0, 11,227,227,  0,  0, 87,  1, 41,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "1,11": [
        "\t[商人,women]我听说10F有一条秘密通道..\n但不太肯定.....\n因为那里有很多怪物，你可以试试问问我哥哥，他在地下18F",
        {
            "type": "setValue",
            "name": "flag:npcb17times",
            "value": "flag:npcb17times+1"
        }
    ],
    "6,4": [
        "\t[老人,man]你的回避力直接影响到贤者之证的发挥功效"
    ],
    "11,11": [
        {
            "type": "if",
            "condition": "core.terrainExists(11,11,'flower')",
            "true": [
                {
                    "type": "changeFloor",
                    "floorId": "MOTA7",
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
    "9,11": {
        "floorId": "base16",
        "loc": [
            9,
            11
        ]
    },
    "11,5": {
        "floorId": "base16",
        "loc": [
            11,
            5
        ]
    },
    "6,9": {
        "floorId": "base18",
        "loc": [
            6,
            9
        ]
    },
    "11,11": null
},
"afterBattle": {},
"afterGetItem": {
    "11,11": [
        {
            "type": "setBlock",
            "number": 168,
            "loc": [
                11,
                11
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    11
                ]
            ],
            "time": 500
        }
    ]
},
"afterOpenDoor": {},
"cannotMove": {},
"upFloor": [
    9,
    11
],
}