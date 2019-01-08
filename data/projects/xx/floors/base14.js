main.floors.base14=
{
"floorId": "base14",
"title": "主塔-14",
"name": "-14",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 58,  0,  1, 28,331,  0, 59,  1,  0,  0,  0,  3],
    [  3,  0,220,  1,  1,  1,220,  0,  1,  0,  1,  0,  3],
    [  3,  1, 86,  1,  1,  1, 86,  1,  1,219,  1,  0,  3],
    [  3,  0,225,  0,  0,  0,225,  0,  0,  0,  1,219,  3],
    [  3,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,219,  3],
    [  3, 32,  0, 31,  1, 22,  0, 21,  1,220,  1,219,  3],
    [  3,  1, 81,  1,  1,  1, 81,  1,  1,  0,  1,219,  3],
    [  3,  0,223,  0,  0,  0,230,  0,  0,219,  1,  0,  3],
    [  3,  1, 83,  1,  1,  1, 83,  1,  1,  0,  1,  0,  3],
    [  3, 28,  0,  0,  1,  0,230,  0,  1,220,  1,  0,  3],
    [  3, 29,  0,122,  1, 27,  0,121,  1, 88,  1, 87,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "7,11": [
        {
            "type": "choices",
            "text": "\t[老人,man]150 金币就可以补充一次任意门，需要吗？",
            "choices": [
                {
                    "text": "补充 ",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=150",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-150"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:keydoor",
                                    "value": "item:keydoor+1"
                                }
                            ],
                            "false": [
                                "\t[老人,man]你的金钱不足！"
                            ]
                        }
                    ]
                },
                {
                    "text": "离开",
                    "action": [
                        {
                            "type": "exit"
                        }
                    ]
                }
            ]
        },
        {
            "type": "revisit"
        }
    ],
    "3,11": [
        {
            "type": "if",
            "condition": "core.getFlag('proof_lv',null)==2&&core.hasItem('proof_brave')&&core.status.hero.lv>=40",
            "true": [
                "\t[商人,women]又是挑战者？这个给你，不过救出公主后，我要分7成报酬",
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                },
                "章的等级升为${core.getFlag('proof_lv',null)}"
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.hasItem('knife')",
                    "true": [
                        "\t[商人,women]哦哦，是神剑之证，只要你对着怪物使用，那么它就会变成最弱的绿色史莱姆，但是次数有限。请考虑清楚。"
                    ],
                    "false": [
                        "\t[商人,women]你见过那条巨龙了吗，打败他后可以拿到神剑之证。非常有用！拿到后来找我，我教你如何使用！"
                    ]
                }
            ]
        }
    ]
},
"changeFloor": {
    "11,11": {
        "floorId": "base13",
        "stair": "downFloor"
    },
    "9,11": {
        "floorId": "base15",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}