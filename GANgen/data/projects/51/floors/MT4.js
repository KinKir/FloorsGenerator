main.floors.MT4=
{
"floorId": "MT4",
"title": "第04层",
"name": "第04层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 22,  0,  1,  7,131,  8,  1,  0,121,  0,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1, 21,  0, 32,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,210,  0,  1],
    [  1,  1, 81,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,  0,217,  0, 81,  0,202,  0,  0,209,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,202,  0,201,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,  0,  1,  0,205,  0,  1,  0,217,  0,  1,  0,  1],
    [  1,  0,  1,201,  0, 21,  1, 27,  0, 31,  1,  0,  1],
    [  1, 87,  1, 21,201, 21,  1,  0,201,  0,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "10,1": [
        "\t[老人,man]你是否发现每次对话之后你都有一种神秘的能力",
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
    "6,1": [
        {
            "type": "if",
            "condition": "status:money<20+10*flag:times*(flag:times+1)",
            "true": [
                "\t[贪婪之神,blueShop]下一次商店价格：${20+10*flag:times*(flag:times+1)}金币"
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[贪婪之神,blueShop]给我${20+10*flag:times*(flag:times+1)}金币就可以...",
                    "choices": [
                        {
                            "text": "生命+${100+100*flag:times}",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "value": "status:hp+100+100*flag:times"
                                }
                            ]
                        },
                        {
                            "text": "攻击+2",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "value": "status:atk+2"
                                }
                            ]
                        },
                        {
                            "text": "防御+4",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "value": "status:def+4"
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
                    "type": "setValue",
                    "name": "flag:times",
                    "value": "flag:times+1"
                },
                {
                    "type": "revisit"
                }
            ]
        }
    ]
},
"changeFloor": {
    "1,11": {
        "floorId": "MT5",
        "loc": [
            2,
            11
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT3",
        "loc": [
            10,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}