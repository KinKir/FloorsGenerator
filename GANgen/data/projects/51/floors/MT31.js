main.floors.MT31=
{
"floorId": "MT31",
"title": "第31层",
"name": "第31层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0, 21, 21,  1, 88,  1,  0,  0, 31,121,  1],
    [  1,224,  0, 21, 21,  1,  0,  1,225,  0,  0,  0,  1],
    [  1,  0,225,  1,  1,  1,  0,  1, 81,  1,212,212,  1],
    [  1,  0,  0, 81, 22,  1,  0,  1, 27,  1,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,212,  0,  0,  0,  0,  0,  0,  0,212,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,  1, 28,  1,214,  1, 32, 81,  0,  0,  1],
    [  1,212,212,  1, 81,  1,214,  1,  1,  1,216,  0,  1],
    [  1,  0,  0,  0,227,  1,  0,  1, 21, 21,  0,216,  1],
    [  1,122, 31,  0,  0,  1, 87,  1, 21, 21,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "11,1": [
        "\t[老人,man]双手剑士的攻击力太高了 你最好到能对他一击必杀时再与他战斗 如果你开40层红门进去 骑士队长和他的手下就会先攻你",
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
    "1,11": [
        {
            "type": "choices",
            "text": "\t[商人,woman]1000金币换1蓝4黄，要吗？",
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
                                    "name": "item:blueKey",
                                    "value": "item:blueKey+1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "value": "item:yellowKey+4"
                                },
                                "\t[商人,woman]你居然买了我的钥匙 那我就告诉你一个秘密 魔塔里有个幸运金币 拥有它在打败敌人后能获得2倍的金币",
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
    ],
    "6,1": null
},
"changeFloor": {
    "6,1": {
        "floorId": "MT30",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT32",
        "loc": [
            6,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}