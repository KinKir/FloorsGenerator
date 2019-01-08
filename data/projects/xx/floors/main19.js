main.floors.main19=
{
"floorId": "main19",
"title": "主塔19",
"name": "19",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 88,  0,  0,  0,121,  4,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  4,  0,  0,  4,  0,  4, 88,  4,  0,  3],
    [  3,  0,  4,  4,  4,  0,  4,  0,  0,  4,  0,  0,  3],
    [  3,  0,  0,  4,  0,  0,  4,  0,  4,  0,  4,  0,  3],
    [  3,  0,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  3],
    [  3,  4, 82,  4,  4,  0,  4,  0,  4,  4, 82,  4,  3],
    [  3,218,211,218,  4,  0,  4,  0,  4,207,226,207,  3],
    [  3, 27,218, 27,  4,224,  4,224,  4, 28,207, 28,  3],
    [  3, 32, 48, 32,  4, 87,  4, 87,  4, 31, 23, 31,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "5,1": [
        {
            "type": "if",
            "condition": "core.getFlag('proof_lv',null)==2&&core.hasItem('proof_tyrant')&&core.status.hero.lv>=40",
            "true": [
                {
                    "type": "choices",
                    "text": "100经验换增幅器，怎样？",
                    "choices": [
                        {
                            "text": "好",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "status:experience>=100",
                                    "true": [
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.status.hero.experience-=100;\n}"
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                                        },
                                        {
                                            "type": "update"
                                        },
                                        "章的等级升为${core.getFlag('proof_lv',null)}"
                                    ],
                                    "false": [
                                        "经验不足。"
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
                }
            ],
            "false": [
                "\t[老人,man]公主就在上一层，听说有恶魔守着，你实力不够的话最好别上去"
            ]
        }
    ]
},
"changeFloor": {
    "7,11": {
        "floorId": "main20",
        "loc": [
            7,
            11
        ]
    },
    "5,11": {
        "floorId": "main20",
        "loc": [
            5,
            11
        ]
    },
    "9,3": {
        "floorId": "main18",
        "loc": [
            9,
            3
        ]
    },
    "1,1": {
        "floorId": "main18",
        "loc": [
            1,
            1
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"downFloor": [
    9,
    3
],
}