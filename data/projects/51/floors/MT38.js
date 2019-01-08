main.floors.MT38=
{
"floorId": "MT38",
"title": "第38层",
"name": "第38层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 83,216,  0,  0,  0,216, 81,  0, 87,  1],
    [  1,  0,  0,  1,  0,122, 21,  0,  0,  1,  0,  0,  1],
    [  1,212,  1,  1,  1,  1,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0,  0,225,225,  0,  1,  0,  1, 21,  1,  0,  1],
    [  1,  1,  0,  1,  1, 82,  1,  0,  1, 21,  1,  0,  1],
    [  1,  0,  0,  0, 82, 82,  1,212,  1, 21,  1,212,  1],
    [  1,  0, 40,  0,  1,  1,  1,224,  1,  0,227,  0,  1],
    [  1,  0,  0,  0,  1, 28, 31,  0,  1,  1,  1, 81,  1],
    [  1,  1, 85,  1,  1,  1,  1,  1,  1, 21,  0,212,  1],
    [  1,222,  0,222,  1,  0,  0,  0,  1,  0,227,  0,  1],
    [  1,  0,  0,  0, 81,224,  0,213, 81,225,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "5,2": [
        {
            "type": "choices",
            "text": "\t[商人,woman]200金币换3个黄钥匙，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=200",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-200"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "value": "item:yellowKey+3"
                                },
                                "\t[商人,woman]放圣剑房间的门坏了 你只能用其他方法进去",
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
                            "false": [
                                "\t[商人,woman]你的金钱不足！"
                            ]
                        }
                    ]
                },
                {
                    "text": "不要",
                    "action": []
                }
            ]
        }
    ],
    "2,6": [
        {
            "type": "setBlock",
            "number": 1,
            "loc": [
                2,
                5
            ]
        },
        {
            "type": "hide"
        }
    ]
},
"changeFloor": {
    "1,1": {
        "floorId": "MT37",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    },
    "11,1": {
        "floorId": "MT39",
        "loc": [
            11,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "3,10": [
        {
            "type": "setValue",
            "name": "flag:10",
            "value": "flag:10+1"
        },
        {
            "type": "if",
            "condition": "flag:10==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
                    ]
                }
            ],
            "false": []
        }
    ],
    "1,10": [
        {
            "type": "setValue",
            "name": "flag:10",
            "value": "flag:10+1"
        },
        {
            "type": "if",
            "condition": "flag:10==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
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
"item_ratio": 4,
}