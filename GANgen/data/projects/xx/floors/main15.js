main.floors.main15=
{
"floorId": "main15",
"title": "主塔15",
"name": "15",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 32,  4, 22,  4,  4, 87,  4,  4,122, 23, 27,  3],
    [  3, 28,  4, 21,  4,300,301,302,  4,  0,  0,  0,  3],
    [  3,  0,  4, 21,  4,303,304,305,  4,226,211,226,  3],
    [  3,213,  4,  0,  4,306,258,307,  4,  4, 81,  4,  3],
    [  3,  0, 82,  0,  4,  4,  0,  4,  4,204,207,  4,  3],
    [  3,  0,  4,  0,  0,  4, 83,  4,  0,  0,204,  4,  3],
    [  3,211,  4,  0,  0,  4,218,  4,  0,  0,  0,  4,  3],
    [  3,  0,  4,204,  0,  0,  0, 81,  0,  0,  0,  4,  3],
    [  3,213,  4,207,204,  4,  0,  4,  0,  0,  0,  4,  3],
    [  3,  0,  4, 21,  4,  4,  0,  4,  0,  0,  4,  4,  3],
    [  3, 31,  4,  4,  4,  4, 88,  4,  0, 27, 87,  4,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "9,1": [
        {
            "type": "if",
            "condition": "core.getFlag('proof_lv',null)==2&&core.status.hero.lv>=40",
            "true": [
                "\t[商人,women]好久没人拿到贤者之证了，这个就当是奖励吧给你吧",
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                },
                "章的等级升为${core.getFlag('proof_lv',null)}"
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[商人,women]少年，你有多余的钥匙吗？\n我这里有大量收购哦！",
                    "choices": [
                        {
                            "text": "黄钥匙 10 金币",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "item:yellowKey>=1",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "item:yellowKey",
                                            "value": "item:yellowKey-1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money+10"
                                        }
                                    ],
                                    "false": [
                                        "\t[商人,women]少年，你没有这个钥匙了！"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "蓝钥匙 40 金币",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "item:blueKey>=1",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "item:blueKey",
                                            "value": "item:blueKey-1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money+40"
                                        }
                                    ],
                                    "false": [
                                        "\t[商人,women]少年，你没有这个钥匙了！"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "红钥匙 500 金币",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "item:redKey>=1",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "item:redKey",
                                            "value": "item:redKey-1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money+500"
                                        }
                                    ],
                                    "false": [
                                        "\t[商人,women]少年，你没有这个钥匙了！"
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
    "10,11": {
        "floorId": "main16",
        "loc": [
            10,
            11
        ]
    },
    "6,1": {
        "floorId": "main16",
        "loc": [
            6,
            1
        ]
    },
    "6,11": {
        "floorId": "main14",
        "stair": "upFloor"
    }
},
"afterBattle": {
    "6,4": [
        {
            "type": "function",
            "function": "function(){\nvar x=core.status.event.data.x,y=core.status.event.data.y;if(core.isset(x)&&core.isset(y)){core.insertAction([{type:'hide',loc:[[x-1,y-2],[x,y-2],[x+1,y-2],[x-1,y-1],[x,y-1],[x+1,y-1],[x-1,y],[x+1,y]]}]);}\n}"
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"upFloor": [
    10,
    11
],
}