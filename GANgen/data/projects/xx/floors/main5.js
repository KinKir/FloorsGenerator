main.floors.main5=
{
"floorId": "main5",
"title": "主塔5",
"name": "5",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2, 59, 58, 31,  2, 87,  2,122,  0, 21, 22,  3],
    [  3,  2,205,206,205,  2,202,  2,  0,  0,  0,  0,  3],
    [  3,  2,  0,  0,  0,  2,203,  2,  0,  0,  0,  0,  3],
    [  3,  2,  0,203,  2,  2,202,  2,  2,  0,  0, 31,  3],
    [  3,  2,  2, 86,  2,  0,  0,  0,  2,205,  2,  2,  3],
    [  3,  0,  0,217,209,  0, 88,  0,  0,  0,203, 81,  3],
    [  3,  2,  2, 81,  2,  0,  0,  0,  2, 82,  2, 81,  3],
    [  3,  2,  2,  0,  2,  2,  0,  2,  2,206,  0,  0,  3],
    [  3,  2, 27, 23, 28,  2,  0,  2,  0,209,209,209,  3],
    [  3,  2,  2, 29,  2,  2,  0,  2,  0,  0,  0,  0,  3],
    [  3,  2,  2,  2,  2,  2,121,  2,  0,  0, 31, 21,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "6,11": [
        "\t[神秘老人,man]啊，怪物手册你已经有了啊，那我就不给你了~",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "8,1": [
        {
            "type": "choices",
            "text": "\t[宝石商人,women]我这里有两个红宝石，想要吗\n $40卖给你吧",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=40",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-40"
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.status.hero.atk += core.values.redJewel *2\n}"
                                },
                                {
                                    "type": "update"
                                },
                                {
                                    "type": "hide",
                                    "time": 500
                                },
                                {
                                    "type": "exit"
                                }
                            ],
                            "false": [
                                "\t[宝石商人,women]你的金钱不足！",
                                {
                                    "type": "revisit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "不要",
                    "action": [
                        {
                            "type": "exit"
                        }
                    ]
                }
            ]
        }
    ]
},
"changeFloor": {
    "6,1": {
        "floorId": "main6",
        "stair": "downFloor"
    },
    "6,6": {
        "floorId": "main4",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}