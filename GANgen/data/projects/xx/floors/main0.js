main.floors.main0=
{
"floorId": "main0",
"title": "主塔0",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  2,  2,123,  0,  2, 87,  2,  0,122,  2,  2,  3],
    [  3,  2,  0,  0,  0,  2,201,  2,  0,  0,  0,  2,  3],
    [  3,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  3],
    [  3,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  3],
    [  3,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  3],
    [  3,  2,  2,  2,  2,  2, 86,  2,  2,  2,  2,  2,  3],
    [  3,  2,  5,  2,  5,  2,  0,  2,  5,  2,  5,  2,  3],
    [  3,  5,  5,  5,  5,  2,  0,  2,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  2,  0,  2,  5,  5,  5,  5,  3],
    [  3,  5,  5,  5,  5,  2,  0,  2,  5,  5,  5,  5,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "6,10": [
        "\t[勇士,hero]就是这里了，要上了。",
        {
            "type": "hide"
        }
    ],
    "9,2": [
        {
            "type": "if",
            "condition": "core.status.hero.lv>=20&&core.hasItem('proof_brave')&&core.getFlag('proof_lv')==1",
            "true": [
                {
                    "type": "choices",
                    "text": "500块换增幅器",
                    "choices": [
                        {
                            "text": "是",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "status:money>=500",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "value": "status:money-500"
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                                        },
                                        {
                                            "type": "update"
                                        },
                                        "章的等级升为${core.getFlag('proof_lv')}"
                                    ],
                                    "false": [
                                        "金币不足。"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "否",
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
                "\t[奸商,woman]又一个挑战者？希望你能够活着回去，嘻嘻嘻嘻..........."
            ]
        }
    ],
    "9,3": null,
    "3,2": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "openShop",
                "id": "keyShop"
            }
        ]
    },
    "2,2": [
        {
            "type": "if",
            "condition": "core.terrainExists(2,2, 'downFloor')",
            "true": [
                {
                    "type": "changeFloor",
                    "floorId": "base1",
                    "loc": [
                        2,
                        2
                    ],
                    "time": 500
                }
            ],
            "false": []
        }
    ],
    "6,5": null,
    "7,6": null
},
"changeFloor": {
    "6,2": {
        "floorId": "main1",
        "stair": "downFloor"
    },
    "2,2": null
},
"afterBattle": {},
"afterGetItem": {
    "3,5": null
},
"afterOpenDoor": {
    "7,6": null
},
"cannotMove": {},
"downFloor": null,
"upFloor": null,
}