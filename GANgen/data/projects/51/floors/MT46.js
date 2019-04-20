main.floors.MT46=
{
"floorId": "MT46",
"title": "第46层",
"name": "第46层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,220, 81,  0,  7,131,  8,  0, 82,  0, 88,  1],
    [  1, 31,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1, 27,  0,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,  0,219, 81,  0,  0,  0,  0,  0,207,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,225,  0,224,  0,227,  1, 31,  0, 81,204,  0,  1],
    [  1,  0,  1,  1,  1,  0,  1,  0,220,  1,  0,  0,  1],
    [  1,213,  1, 26,  1,204,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0,219,  0,  1,  0,121,  1,219,  0,  1],
    [  1,206,  1,  1,  1,  1,  1,  0,  0,  1,  0,  0,  1],
    [  1,  0,209,  0,202,  0, 82,  0,  0, 81,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "8,9": [
        "\t[老人,man]41楼是左右对称的 你应该能发现 打怪时如果轻按不和怪物重叠 还能让你少受到魔法攻击 我对你多好",
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
                            "text": "攻击+10",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "value": "status:atk+10"
                                }
                            ]
                        },
                        {
                            "text": "防御+20",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-(20+10*flag:times*(flag:times+1))"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "value": "status:def+20"
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
    "11,1": {
        "floorId": "MT45",
        "loc": [
            10,
            1
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT47",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    },
    "11,10": null
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}