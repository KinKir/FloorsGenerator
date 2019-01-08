main.floors.MT45=
{
"floorId": "MT45",
"title": "第45层",
"name": "第45层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1],
    [  1, 27, 27,  0,  1,219,  0,220,  1,122,  0,  0,  1],
    [  1, 82,  1,228,  1,  0,  0,  0,  1,  0,  0,204,  1],
    [  1, 28, 28,  0,  1,220,  0,219,  1,  1,  1, 81,  1],
    [  1, 82,  1,228,  1,  1, 81,  1,  1,121,  1,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,207,  0,  0,  0, 21,  1],
    [  1,  1, 83,  1,  1,  1,  1,  1,  1,  1,220,  0,  1],
    [  1,  0,  0,  0,  1,228,  0,  1,246,  1,  1, 81,  1],
    [  1,  0, 51,  0, 85,  0,  0, 85,  0, 81,  0,  0,  1],
    [  1,  0,  0,  0,  1,228,  0,  1,246,  1,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "9,6": [
        "\t[老人,man]44楼被藏在异空间 你只能用移动宝物才能到达",
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
    "9,3": [
        {
            "type": "choices",
            "text": "\t[商人,woman]1000金币换2000血，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=1000",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-1000"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "value": "status:hp+2000"
                                },
                                "\t[商人,woman]神圣盾能防御魔法攻击 但它被藏在异空间的楼层内",
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
    ]
},
"changeFloor": {
    "1,1": {
        "floorId": "MT43",
        "loc": [
            1,
            10
        ],
        "direction": "down"
    },
    "11,1": {
        "floorId": "MT46",
        "loc": [
            11,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "8,9": [
        {
            "type": "setValue",
            "name": "flag:12",
            "value": "flag:12+1"
        },
        {
            "type": "if",
            "condition": "flag:12==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        10
                    ]
                }
            ],
            "false": []
        }
    ],
    "8,11": [
        {
            "type": "setValue",
            "name": "flag:12",
            "value": "flag:12+1"
        },
        {
            "type": "if",
            "condition": "flag:12==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        10
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,9": [
        {
            "type": "setValue",
            "name": "flag:13",
            "value": "flag:13+1"
        },
        {
            "type": "if",
            "condition": "flag:13==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        4,
                        10
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,11": [
        {
            "type": "setValue",
            "name": "flag:13",
            "value": "flag:13+1"
        },
        {
            "type": "if",
            "condition": "flag:13==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        4,
                        10
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
"item_ratio": 5,
}