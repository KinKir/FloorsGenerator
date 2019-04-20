main.floors.base9=
{
"floorId": "base9",
"title": "主塔-9",
"name": "-9",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,121,  0,331, 27,331,  1, 88,331,  0,  1, 28,  3],
    [  3,  0,  0,  1,  1,  1,  1,230,  1,331,  1, 28,  3],
    [  3,212,  0, 82,  0,  0,  1,  0, 81,222, 82,225,  3],
    [  3, 21,222,  1,  0,  0, 81,219,  1,  0,  1,  1,  3],
    [  3,  1,  1,  1,  0,  0,  1,  0,  1,  0,  1, 23,  3],
    [  3, 31,232,232,  0,  1,  1,  0,  1,  0, 81, 82,  3],
    [  3,  1,  1,  1,  1,  1,  0,  0,  1,  1,  1, 81,  3],
    [  3,  0,212,  0,  0,219,  0, 87,  0,  0,212,  0,  3],
    [  3,  1, 81,  1,  1,  1,  0,  0,  0,  1, 81,  1,  3],
    [  3,231,  0,  0,  0,  1,  1,  0,  1,  1,212, 31,  3],
    [  3, 31,  1,  1,  0,231, 81,219, 81,212, 31, 21,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "1,1": [
        {
            "type": "choices",
            "text": "\t[老人,man]你脸色不太好啊，我以前当过医生的要不要帮你看一下？",
            "choices": [
                {
                    "text": "解毒 200 金币",
                    "action": [
                        {
                            "type": "if",
                            "condition": "flag:poison==true",
                            "true": [
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
                                            "name": "flag:poison",
                                            "value": "false"
                                        }
                                    ],
                                    "false": [
                                        "\t[老人,man]你的金钱不足！"
                                    ]
                                }
                            ],
                            "false": [
                                "\t[老人,man]你没事，只是没睡好。"
                            ]
                        }
                    ]
                },
                {
                    "text": "离开",
                    "action": [
                        {
                            "type": "exit"
                        }
                    ]
                }
            ]
        },
        {
            "type": "revisit"
        }
    ],
    "5,1": [
        {
            "type": "if",
            "condition": "core.terrainExists(5,1 ,'flower')",
            "true": [
                {
                    "type": "changeFloor",
                    "floorId": "MOTA6",
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
    "7,8": {
        "floorId": "base8",
        "stair": "downFloor"
    },
    "7,1": {
        "floorId": "base10",
        "stair": "upFloor"
    },
    "5,1": null
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "5,1": [
        {
            "type": "setBlock",
            "number": 168
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    1
                ]
            ]
        }
    ]
},
"cannotMove": {},
}