main.floors.MT3=
{
"floorId": "MT3",
"title": "第03层",
"name": "第03层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [
    [
        10,
        6,
        "anqiang"
    ]
],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21, 28,  1, 21, 32, 21,  1,  0,  1,  0, 31,  1],
    [  1,  0, 31,  1, 32, 21, 32,  1,  0, 81,205,  0,  1],
    [  1,217,  0,  1, 21, 22, 21,  1,  0,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  0,  1,  1,  0,  1,  0,121,  1],
    [  1,  0,  0,205,  0,  0,  0,201,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,209,  0,  1,  1,273,  1,  1,  0,  1,  0, 31,  1],
    [  1,  0, 21,  1,  0,246,  0,  1,  0, 81,217, 21,  1],
    [  1, 31, 27,  1,246,  0,246,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,246,  1,  1,202,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0, 81,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "11,4": [
        "\t[老人,man]我可以给你怪物手册 你可以用快捷键x去使用它 它能预测出当前楼层各类怪物对你的伤害",
        {
            "type": "setValue",
            "name": "item:book",
            "value": "item:book+1"
        },
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
    "5,7": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    },
    "5,8": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    },
    "4,9": {
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
        "displayDamage": false,
        "data": []
    },
    "5,10": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": []
    },
    "5,9": [
        {
            "type": "show",
            "loc": [
                [
                    5,
                    7
                ]
            ],
            "time": 1500
        },
        "\t[272]欢迎来到魔塔 你是第100位挑战者 你若能打败我所有的手下 我就与你一对一的决斗 现在你必须接受我的安排",
        {
            "type": "show",
            "loc": [
                [
                    5,
                    8
                ],
                [
                    4,
                    9
                ],
                [
                    6,
                    9
                ],
                [
                    5,
                    10
                ]
            ],
            "time": 1000
        },
        "\t[hero]什么？",
        {
            "type": "animate",
            "name": "a1",
            "loc": "hero"
        },
        {
            "type": "setFg",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 1000
        },
        {
            "type": "hide"
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    7
                ],
                [
                    5,
                    8
                ],
                [
                    4,
                    9
                ],
                [
                    6,
                    9
                ],
                [
                    5,
                    10
                ]
            ]
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "400"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "10"
        },
        {
            "type": "changeFloor",
            "floorId": "MT2",
            "loc": [
                3,
                8
            ]
        },
        {
            "type": "trigger",
            "loc": [
                3,
                7
            ]
        }
    ]
},
"changeFloor": {
    "1,11": {
        "floorId": "MT2",
        "loc": [
            1,
            10
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT4",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}