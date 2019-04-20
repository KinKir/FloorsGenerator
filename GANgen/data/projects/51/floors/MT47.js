main.floors.MT47=
{
"floorId": "MT47",
"title": "第47层",
"name": "第47层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 82,  0,  0,  0, 81,  0,  0,  0, 21,  1],
    [  1,  0,  0,  1,  0,122,  0,  1,275,  1,  1, 28,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  0,204,  0, 21,  1],
    [  1,  0,  1,  0, 81,275,  0,  1, 81,  1,  1,  1,  1],
    [  1,  0,  1,207,  1,  0,219,  1,  0,219,  0,  0,  1],
    [  1,  0, 81,  0,  1,  0,  0,  1, 21,  0,  0,207,  1],
    [  1,  0,  1,  0,  1, 22, 21,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0, 82, 27, 28,  1,  0,  0,  0,  0,  1],
    [  1,275,  1,  1,  1,  1,  1,  1,204,  1,  1,  1,  1],
    [  1,  0,  0,  1, 31,  0, 27,  1,  0,  1,  0,  0,  1],
    [  1,  0,  0, 81,  0,219,  0, 81,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "5,2": [
        {
            "type": "choices",
            "text": "\t[商人,woman]4000金币一个地震卷轴，要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=4000",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-4000"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:earthquake",
                                    "value": "item:earthquake+1"
                                },
                                "\t[商人,woman]如果要打败魔龙你需要 圣剑 圣盾 屠龙匕 或更高等级的装备",
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
        "floorId": "MT46",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT48",
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
"item_ratio": 5,
}