main.floors.base7=
{
"floorId": "base7",
"title": "主塔-7",
"name": "-7",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 87,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  3],
    [  3,  0,232,214,  0,  0,  0, 81,  0,  0,231, 32,  3],
    [  3,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  3],
    [  3, 88,  9,130, 10,  1,  0,  1, 63,246,  0,  0,  3],
    [  3,  0,  0,  0,  0, 82,  0,  1,  1,  1,  1, 81,  3],
    [  3, 21,  0,  0, 28,  1,  0,  1,  0,  0,212,219,  3],
    [  3,  1,  1,  1,  1,  1,  0,232,  0,  0,  0,212,  3],
    [  3, 39,331, 11,121,  1,  0,  1,  1,  1,  1,  1,  3],
    [  3,  1,  1,  0,  0,  1,  0, 81,219,  1, 31,122,  3],
    [  3,  1,  1, 21,  0,  1,  0,  1,  0,  1,  0,  0,  3],
    [  3,  1,  1, 21,  0, 82,222,  1,  0, 81,231,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "11,9": [
        {
            "type": "if",
            "condition": "core.status.hero.lv>=20&&core.hasItem('proof_sage')&&core.getFlag('proof_lv',null)==1",
            "true": [
                "\t[商人,women]贤者之证？这个给你，对你有帮助的",
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                },
                "章的等级升为${core.getFlag('proof_lv',null)}"
            ],
            "false": [
                "\t[商人,women]你知道什么是防御临界吗？\n只要你的防御力大于[怪物攻击+防御临界]\n怪物就无法伤到你\n自然防御临界越低越好"
            ]
        }
    ],
    "4,8": [
        "\t[老人,man]这是随意门，送给你吧\n它不但可以把某些墙壁变成黄门\n甚至地上的熔岩也可以变成黄门！",
        {
            "type": "setValue",
            "name": "item:keydoor",
            "value": "item:keydoor+10"
        },
        {
            "type": "hide",
            "time": 500
        }
    ],
    "3,4": [
        {
            "type": "openShop",
            "id": "expShopB7F"
        }
    ]
},
"changeFloor": {
    "1,1": {
        "floorId": "base6",
        "stair": "downFloor"
    },
    "1,4": {
        "floorId": "base8",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}