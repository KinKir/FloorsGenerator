main.floors.base2=
{
"floorId": "base2",
"title": "主塔-2",
"name": "-2",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  3],
    [  3,  0,  0,  0,  1,  0, 81,  0,  1,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  3],
    [  3,  1,  1,  1, 81,  0,124,  0, 81,  1,  1,  1,  3],
    [  3,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  1,  0, 81,  0,  1,  0,  0,  0,  3],
    [  3,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0, 87,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [
    {
        "type": "hide",
        "loc": [
            [
                1,
                1
            ]
        ]
    }
],
"events": {
    "6,6": [
        {
            "type": "if",
            "condition": "flag:npcb2times==0",
            "true": [
                "\t[小妖精,fairy]勇者哟~你是来拯救公主的吧？\n但是这层之后的怪物会变得更强。\n以你现在的实力\n是绝对...绝对..绝对赢不了的！\n",
                "\t[勇者,hero]是么？\n那么该怎么办呢？",
                "\t[小妖精,fairy]嗯~~~~~~我想想~~~呐~~\n我还是建议你先去17F的密室取宝物\n这个你拿去吧\n拿到宝物后，你就会实力大增\n到时再来找我吧~~",
                {
                    "type": "setValue",
                    "name": "item:magicKey",
                    "value": "item:magicKey+1"
                },
                {
                    "type": "setValue",
                    "name": "flag:npcb2times",
                    "value": "flag:npcb2times+1"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.hasItem('proof_brave')||core.hasItem('proof_tyrant')||core.hasItem('proof_sage')",
                    "true": [
                        "\t[勇者,hero]我拿到了，\n力量真的增加了不少！\n谢谢你！",
                        "\t[小妖精,fairy]这种事还是等你救出公主再说吧\n加油吧，我看好你哟",
                        {
                            "type": "setBlock",
                            "number": 88,
                            "loc": [
                                1,
                                1
                            ]
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    1,
                                    1
                                ]
                            ],
                            "time": 500
                        }
                    ],
                    "false": [
                        "\t[小妖精,fairy]快去17F的密室取宝物啦！！\n救不了公主我可饶不了你！！！！"
                    ]
                }
            ]
        }
    ]
},
"changeFloor": {
    "1,1": {
        "floorId": "base3",
        "stair": "upFloor"
    },
    "11,11": {
        "floorId": "base1",
        "stair": "downFloor"
    }
},
"afterBattle": {},
"afterGetItem": {
    "6,6": null
},
"afterOpenDoor": {},
"cannotMove": {},
}