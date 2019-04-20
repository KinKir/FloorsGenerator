main.floors.main2=
{
"floorId": "main2",
"title": "主塔2",
"name": "2",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  2, 27, 28,  0,  2,123,  2, 88,  2,  2,  2,  3],
    [  3,  2, 31, 32,  0,  2,  0,  2,  0,  0,  2,  2,  3],
    [  3,  2,  0,211,  0,207, 86,  2,  2,202,  2,  2,  3],
    [  3,  2,  2, 83,  2,  2,  2,  2,  0,  0,  0,  2,  3],
    [  3,  2,  0,226,  0, 83,  0, 22,  0,  2,  0,  2,  3],
    [  3,  2, 81,  2, 81,  2,  2,  2,201,  2,205,  2,  3],
    [  3,  2,  0,  2, 27,  0,  0,  2,201,  2,205,  2,  3],
    [  3,  2, 23,  2, 28,  0, 21,  2,  0,  2, 32,  2,  3],
    [  3,  2, 23,  2,  0, 22,122,  2, 87,  2, 87,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "6,10": [
        "\t[商人,women]你认识那个被抓住的盗贼吗？\n听说他来这里是为了找一个锄头。不知他要来干什么呢..."
    ],
    "6,2": [
        {
            "type": "if",
            "condition": "core.hasItem('pickaxe')",
            "true": [
                "\t[盗贼,thief]这不就是我的锄头？谢谢你帮我拿回来！\n我帮你把通往地下的入口挖开吧。",
                {
                    "type": "hide",
                    "time": 500
                },
                {
                    "type": "setBlock",
                    "number": 88,
                    "loc": [
                        2,
                        2
                    ],
                    "floorId": "main0"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            2
                        ]
                    ],
                    "floorId": "main0",
                    "time": 500
                },
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "value": "0"
                }
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[盗贼,thief]少年，你需要钥匙吗？\n我这里有大把的！",
                    "choices": [
                        {
                            "text": "黄钥匙（20金币）",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "status:money>=20",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money-20"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:yellowKey",
                                            "value": "item:yellowKey+1"
                                        }
                                    ],
                                    "false": [
                                        "\t[盗贼,thief]你的金钱不足！",
                                        {
                                            "type": "revisit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "蓝钥匙（80金币）",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "status:money>=80",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money-80"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:blueKey",
                                            "value": "item:blueKey+1"
                                        }
                                    ],
                                    "false": [
                                        "\t[盗贼,thief]你的金钱不足！",
                                        {
                                            "type": "revisit"
                                        }
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
            ]
        }
    ]
},
"changeFloor": {
    "10,10": {
        "floorId": "main3",
        "loc": [
            10,
            10
        ]
    },
    "8,10": {
        "floorId": "main3",
        "loc": [
            8,
            10
        ]
    },
    "8,2": {
        "floorId": "main1",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"upFloor": [
    8,
    10
],
}