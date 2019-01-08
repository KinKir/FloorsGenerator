main.floors.MOTA8=
{
"floorId": "MOTA8",
"title": "主塔",
"name": "0",
"canFlyTo": false,
"canUseQuickShop": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  3,  0,  3,  3,132,  3,  3,  0,  3,  0,  4],
    [  4,  3,  0,  3,  0,  3, 83,  3,  0,  3,  0,  3,  4],
    [  4,  0,  3,  0,  3,  3, 83,  3,  3,  0,  3,  0,  4],
    [  4,  3,  0,  3,  0,  3, 83,  3,  0,  3,  0,  3,  4],
    [  4,  0,  3,  0,  3,  3,  0,  3,  3,  0,  3,  0,  4],
    [  4,  3,  0,  3,  0,  3,  0,  3,  0,  3,  0,  3,  4],
    [  4,  0,  3,  0,  3,  3,204,  3,  3,  0,  3,  0,  4],
    [  4,  3,  0,  3,  0,  3,203,  3,  0,  3,  0,  3,  4],
    [  4,  0,  3,  0,  3,  3,202,  3,  3,  0,  3,  0,  4],
    [  4,  3,  0,  3,  0,  3,201,  3,  0,  3,  0,  3,  4],
    [  4,  0,  3,  0,  3,  4,  0,  4,  3,  0,  3,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
"firstArrive": [],
"events": {
    "6,1": [
        "\t[公主,princess]太好了...\n终于有人来到了....\n这个星期过的很幸苦呢....",
        "\t[勇士,hero]不用怕，我是来救你的",
        "公主晕过去了",
        "\t[勇士,hero]看来一切都结束了......\n公主的身体似乎很虚弱\n还是先逃出去再说吧",
        {
            "type": "if",
            "condition": "core.getFlag('proof')=='proof_brave'",
            "true": [
                {
                    "type": "win",
                    "reason": "勇者之证"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.getFlag('proof')=='proof_sage'",
                    "true": [
                        {
                            "type": "win",
                            "reason": "贤者之证"
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "core.getFlag('proof')=='proof_tyrant'",
                            "true": [
                                {
                                    "type": "win",
                                    "reason": "霸者之证"
                                }
                            ],
                            "false": [
                                {
                                    "type": "win",
                                    "reason": "无章通关"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}