main.floors.main20=
{
"floorId": "main20",
"title": "主塔20",
"name": "20",
"canFlyTo": false,
"canUseQuickShop": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  2,132,  2,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  2,  0,  2,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  2,  0,  2,  0,  0,  0,  0,  3],
    [  3,  0,  0,  3,  0,  0,  0,  0,  0,  3,  0,  0,  3],
    [  3,  0,  3,  4,  3,  0,  0,  0,  3,  4,  3,  0,  3],
    [  3,  3,  3,  3,  3,  3, 86,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0, 29,  0,  0,  0,  0,  0,  3],
    [  3,  0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  3],
    [  3,  0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  4,  4,  4,  4,  0,  4,  0,  4,  4,  4,  4,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [
    {
        "type": "hide",
        "loc": [
            [
                1,
                5
            ]
        ]
    },
    {
        "type": "hide",
        "loc": [
            [
                15,
                5
            ]
        ]
    }
],
"events": {
    "6,1": [
        "\t[勇士,hero]公主，这里很危险，快和我走吧！",
        "\t[公主,princess]................",
        "\t[勇士,hero]？？？怎么了？",
        "\t[公主,princess]嘻嘻嘻嘻嘻。。。勇者，去死吧！！！",
        {
            "type": "setBlock",
            "number": 2,
            "loc": [
                6,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": 251,
            "loc": [
                6,
                1
            ]
        }
    ]
},
"changeFloor": {
    "1,5": {
        "floorId": "main19",
        "loc": [
            1,
            5
        ]
    },
    "11,5": {
        "floorId": "main19",
        "loc": [
            11,
            5
        ]
    }
},
"afterBattle": {
    "6,1": [
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "time": 500
        },
        {
            "type": "setBlock",
            "number": 47,
            "loc": [
                6,
                3
            ]
        },
        {
            "type": "setBlock",
            "number": 21,
            "loc": [
                1,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 21,
            "loc": [
                11,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 22,
            "loc": [
                1,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 22,
            "loc": [
                11,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                10,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                9,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                8,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                2,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                3,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": 31,
            "loc": [
                4,
                1
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
                8,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                2,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                3,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 28,
            "loc": [
                4,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": 88,
            "loc": [
                1,
                5
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    5
                ]
            ],
            "time": 500
        },
        {
            "type": "setBlock",
            "number": 88,
            "loc": [
                11,
                5
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    5
                ]
            ],
            "time": 500
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"downFloor": [
    7,
    11
],
}