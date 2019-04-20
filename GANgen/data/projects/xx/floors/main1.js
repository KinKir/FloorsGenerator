main.floors.main1=
{
"floorId": "main1",
"title": "主塔1",
"name": "1",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  2,121,201,  0,  0, 88,  2, 87,  0,  2,  2,  3],
    [  3,  2,  2,202,  2,  2,  2,  2,  2,205,  2,  2,  3],
    [  3,  2,  0,  0,  0,  0,  0,  2,201,202,201,  2,  3],
    [  3,  2,205,  2,  2,  2,  0,205,  0,  0,  0,  2,  3],
    [  3,  2,  0,  0,  0,  0,  0,  2,  2,  0,  2,  2,  3],
    [  3,  2,  2, 82,  2,  2,  0, 81,  0,  0,  0,  2,  3],
    [  3,  2,201,  0,201,  2,  0,  2,  2,  2, 81,  2,  3],
    [  3,  2, 31,213, 31,  2,  0,  2,122,  0,209,  2,  3],
    [  3,  2, 27, 21, 28,  2,201,  2, 23, 21, 21,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "2,2": [
        {
            "type": "if",
            "condition": "core.status.hero.lv>=20&&core.hasItem('proof_tyrant')&&core.getFlag('proof_lv',null)==1",
            "true": [
                "\t[老人,man]霸者之证？这个给你吧，作为交换，你一定要救出公主啊",
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                },
                "章的等级升为${core.getFlag('proof_lv',null)}"
            ],
            "false": [
                "\t[老人,man]听说这座塔不止20层...但是最高只能去到第20层..真叫人头疼..."
            ]
        }
    ],
    "8,9": [
        "\t[商人,women]你知道什么是章吗？在这里有数个不同的章，只要拿到就可以得到一些有利于战斗的能力",
        "\t[商人,women]但是章要被鉴定才能使用，你必须找一个懂鉴定的人！"
    ]
},
"changeFloor": {
    "6,2": {
        "floorId": "main0",
        "stair": "upFloor"
    },
    "8,2": {
        "floorId": "main2",
        "stair": "downFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}