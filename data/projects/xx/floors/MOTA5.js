main.floors.MOTA5=
{
"floorId": "MOTA5",
"title": "主塔",
"name": "0",
"canFlyTo": false,
"canUseQuickShop": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,323,  3,  3,  3,  3,322,  3,  3,  3,  3,321,  3],
    [  3,  0,  3,  3,  3,  3,  0,  3,  3,  3,  3,  0,  3],
    [  3,  0,  3,  3,  3,  3,  0,  3,  3,  3,  3,  0,  3],
    [  3,  0,  3,  3,  3,  3,  0,  3,  3,  3,  3,  0,  3],
    [  3, 83,  3,  3,  3,  3, 83,  3,  3,  3,  3, 83,  3],
    [  3,  0,  3,  3,  3,  3, 82,  3,  3,  3,  3,  0,  3],
    [  3,  0,  0,  0,  0, 82, 81, 82,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3, 81,  3,  3,  3,  3,  3,  3],
    [  3,  3,  3,  3,  3,  3, 81,  3,  3,  3,  3,  3,  3],
    [  3,  3,  3,  3,  3,  0,124,  0,  3,  3,  3,  3,  3],
    [  3,121,  0,  0,  0,  0, 88,  0,  0,  0,  0, 23,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [
    {
        "type": "hide",
        "loc": [
            [
                6,
                10
            ]
        ]
    }
],
"events": {
    "1,11": [
        "\t[老人,man]这里是魔塔，除了前5层相连外，其余层都要通过不同的传送点传送。"
    ],
    "6,10": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": [
            "\t[勇者,hore]仙子？？",
            "\t[小妖精,fairy]要使用章，必须要有强大的精神力。所以，你必须打败自己来释放精神力！\n上吧！！",
            {
                "type": "setBlock",
                "number": 241
            }
        ]
    }
},
"changeFloor": {
    "6,11": {
        "floorId": "MOTA4",
        "stair": "upFloor",
        "time": 500
    }
},
"afterBattle": {},
"afterGetItem": {
    "7,7": null,
    "1,1": [
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 500
        }
    ],
    "5,7": null,
    "11,1": [
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                5,
                7
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 500
        }
    ],
    "6,1": [
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                5,
                7
            ]
        },
        {
            "type": "setBlock",
            "number": 3,
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 500
        }
    ]
},
"afterOpenDoor": {},
"cannotMove": {},
}