main.floors.MT6=
{
"floorId": "MT6",
"title": "第06层",
"name": "第06层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  1, 21, 21,  1,  0,217,  0, 21,201,  0,  1],
    [  1,  0,  1, 21, 21,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1,  1,202,  1,  0,  1, 31,  0,209,  0,  1],
    [  1,  0, 81, 81,  0, 81,  0,  1,122,  0,  0,205,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,202,217,  0, 21,  0,209,210,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,217,  0,  0,121,  1,  0, 81, 81,  0, 81,  0,  1],
    [  1,  0,205,  0, 28,  1,  0,  1,  1,202,  1,202,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,201,  0,  0,209,  0,  1, 31, 31,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "4,8": [
        "\t[老人,man]魔塔一共有51层 但是最高只能到50层 还有一层在哪呢",
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
    "8,4": [
        {
            "type": "choices",
            "text": "\t[商人,woman]50金币换1个蓝钥匙，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=50",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-50"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:blueKey",
                                    "value": "item:blueKey+1"
                                },
                                "\t[商人,woman]魔塔里有很多机关 注意多存档",
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
        "floorId": "MT5",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT7",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}