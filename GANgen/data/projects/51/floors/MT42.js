main.floors.MT42=
{
"floorId": "MT42",
"title": "第42层",
"name": "第42层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  1,  0,  0, 23,  1, 21, 22, 21,  1],
    [  1,  0,  0,204,  1,  0,  0,  0,  1, 21, 21, 21,  1],
    [  1,  1,  1, 81,  1,  0,  0,  0,  1,  1,  0,  1,  1],
    [  1,121,  0,  0,  1,  1,228,  1,  1,219,  0,220,  1],
    [  1,  0,  0,204, 81,  0,  0,  0, 81,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,271,  1,  1,  0,  0,219,  1],
    [  1,  0,  0,  0,  1,  0,246,  0,  1,  1,  0,  1,  1],
    [  1,  1,  1,207,  1,246,226,246,  1,246,  0,246,  1],
    [  1, 32, 21, 21,  1,  1,246,  1,  1,  1,  0,  1,  1],
    [  1,207,  1,  1,  1,  0,226,  0,  1, 21, 21, 21,  1],
    [  1, 21, 21, 28,  1,  0, 88,  0,  1, 21, 22, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,4": [
        "\t[老人,man]巫师会用魔法攻击路过的人 在2个魔法警卫间通过会使你的生命减少一半",
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
    "6,10": {
        "trigger": "action",
        "enable": true,
        "noPass": true,
        "displayDamage": true,
        "data": [
            "\t[yellowKnight]不好，被追上了，快跑",
            {
                "type": "move",
                "time": 500,
                "steps": [
                    "up",
                    "up"
                ],
                "immediateHide": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 1250
            },
            "\t[271]临阵脱逃者 斩 勇士都攻到这里了 你本来就应该死掉的",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        7
                    ],
                    [
                        5,
                        8
                    ],
                    [
                        7,
                        8
                    ],
                    [
                        6,
                        9
                    ]
                ],
                "time": 750
            },
            "\t[yellowKnight]饶命啊",
            {
                "type": "animate",
                "name": "a1",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            "\t[271]勇士你放心 我绝对不会像他这么蠢 我期待与你的决斗",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ],
                    [
                        6,
                        7
                    ],
                    [
                        5,
                        8
                    ],
                    [
                        7,
                        8
                    ],
                    [
                        6,
                        9
                    ]
                ],
                "time": 750
            },
            {
                "type": "update"
            }
        ]
    },
    "6,8": {
        "trigger": null,
        "enable": false,
        "noPass": true,
        "displayDamage": true,
        "data": []
    },
    "6,6": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "5,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "7,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "6,9": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    }
},
"changeFloor": {
    "6,11": {
        "floorId": "MT41",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT43",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}