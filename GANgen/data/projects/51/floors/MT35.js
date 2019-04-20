main.floors.MT35=
{
"floorId": "MT35",
"title": "第35层",
"name": "第35层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16, 16,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1, 16, 16, 16,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 16,  1,  1,  1, 32, 32, 32,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,  0, 54,  0,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,146,147,148,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,149,150,154,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,155,265,156,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1, 16,  1, 16,  1,123,  0,  0,  1,  1,  1,  1,  1],
    [  1, 16, 16, 16,  1,  0, 88,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "5,10": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[小偷,thief]你好 暗道已挖好 你可用它绕过魔龙 我听说骑士队长实力差又爱吹牛 所以被魔法警卫们讨厌 这魔塔太危险了 我可不想再次被抓 我要离塔回去了 再见",
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            {
                "type": "move",
                "time": 500,
                "steps": [
                    "down",
                    "right"
                ],
                "immediateHide": true
            }
        ]
    }
},
"changeFloor": {
    "6,11": {
        "floorId": "MT34",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "11,1": {
        "floorId": "MT36",
        "loc": [
            11,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "6,7": [
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    5
                ],
                [
                    6,
                    5
                ],
                [
                    7,
                    5
                ],
                [
                    5,
                    6
                ],
                [
                    6,
                    6
                ],
                [
                    7,
                    6
                ],
                [
                    5,
                    7
                ],
                [
                    7,
                    7
                ]
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                2
            ]
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}