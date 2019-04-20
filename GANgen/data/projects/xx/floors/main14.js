main.floors.main14=
{
"floorId": "main14",
"title": "主塔14",
"name": "14",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,121,  0,  2, 21, 31,  2,  0, 81,  0,  0,  3],
    [  3,253,  2,  0,  2,  0,  2,  2,216,  2,211,213,  3],
    [  3,  0,  2,  0,  2,  0,  0,  2,216,  2, 21,320,  3],
    [  3,253,  2,211,  2,  0,226, 81,  0,  2,  2,  2,  3],
    [  3,  0,  0,  0,  2,  0,  0,  2,213, 82,213,  2,  3],
    [  3,  2,  2, 82,  2,204,  0,  2,  0,  2, 31,  2,  3],
    [  3,  2, 88,221, 81,  0,  2,  2, 81,  2,204,  2,  3],
    [  3,  2,  2, 82,  2,204,  0, 81,215,  2,  0,  2,  3],
    [  3, 28,213,  0,  2,  2,  2,  2,  2,  2,  0,  2,  3],
    [  3,  2,226,  2,  2,  2,  0,226,210,  0,  0,  2,  3],
    [  3,  2, 27,  2,  2,  2, 87,  2,211,  0,  0,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "2,1": [
        {
            "type": "if",
            "condition": "flag:npc13_times==0",
            "true": [
                "\t[老人,man]啊~！你的剑，你的盾，都是古董呢！！",
                "\t[勇士,hero]咦？你懂得鉴定吗？",
                "\t[老人,man]鉴定这么简单的事情怎么难得到我？",
                "\t[勇士,hero]那我有东西请你鉴定一下，请你等一下。",
                "\t[老人,man]随时恭候。",
                {
                    "type": "setValue",
                    "name": "flag:npc13_times",
                    "value": "flag:npc13_times+1"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.hasItem('proof_brave') && !core.hasFlag('proof')",
                    "true": [
                        "\t[勇士,hero]老伯，您看看这个。",
                        "\t[老人,man]嗯.....\n这红宝石.......这形状.....\n错不了了！是勇者之证！",
                        "\t[勇士,hero]勇.....勇者之证？？",
                        "\t[老人,man]没错，有了这个，再配合增幅器，你的攻击次数就会上升。对于战斗十分有利啊",
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.useProof('proof_brave')\n}"
                        },
                        {
                            "type": "exit"
                        }
                    ],
                    "false": []
                },
                {
                    "type": "if",
                    "condition": "core.hasItem('proof_tyrant') && !core.hasFlag('proof')",
                    "true": [
                        "\t[勇士,hero]老伯，您看看这个。",
                        "\t[老人,man]哦！是黑珍珠！不用看了！是霸者之证！",
                        "\t[勇士,hero]霸者之证？？那是什么？",
                        "\t[老人,man]你知道的真少啊~只要拥有它，你就可以在对手攻击时反弹对手的攻击，使对手也受伤",
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.useProof('proof_tyrant')\n}"
                        },
                        {
                            "type": "exit"
                        }
                    ],
                    "false": []
                },
                {
                    "type": "if",
                    "condition": "core.hasItem('proof_sage') && !core.hasFlag('proof')",
                    "true": [
                        "\t[勇士,hero]老伯，您看看这个。",
                        "\t[老人,man]哦！是一颗珍贵的钻石！还有.....!!!错不了了！是贤者之证！",
                        "\t[勇士,hero]贤者之证？",
                        "\t[老人,man]对！有了它，就可以将对手的攻击转化为你的生命。\n有了增幅器后，一定条件下，战斗后还会回复你的生命",
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.useProof('proof_sage')\n}"
                        },
                        {
                            "type": "exit"
                        }
                    ],
                    "false": []
                },
                "\t[老人,man]请出示要鉴定的东西吧"
            ]
        }
    ]
},
"changeFloor": {
    "6,11": {
        "floorId": "main15",
        "stair": "downFloor"
    },
    "2,7": {
        "floorId": "main13",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}