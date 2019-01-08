main.floors.MT7=
{
"floorId": "MT7",
"title": "第07层",
"name": "第07层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  1, 27,  1,  0,122,  0,  1, 21,  1,201,  1],
    [  1,  0,  1, 31,  1,  0,  0,  0,  1, 21,  1,202,  1],
    [  1,  0,  1,205,  1,202,  1,210,  1, 31,  1,201,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1, 81,  1, 81,  1, 82,  1, 81,  1,209,  1, 81,  1],
    [  1,  0,210,  0,217,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1, 81,  1, 81,  1,210,  1, 81,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,205,  1,202,  1, 32,  1,  0,  1],
    [  1,201,  1,201,  1, 21,  1,217,  1, 21,  1,  0,  1],
    [  1,  0,202,  0,  1, 21,  1, 32,  1, 21,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "6,1": [
        {
            "type": "choices",
            "text": "\t[商人,woman]50金币换5个黄钥匙，要吗？",
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
                                    "name": "item:yellowKey",
                                    "value": "item:yellowKey+5"
                                },
                                "\t[商人,woman]你攻击比敌人防御高时就能打他 你防御比敌人攻击高或一样时就能无伤",
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
    "11,11": {
        "floorId": "MT6",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT8",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}