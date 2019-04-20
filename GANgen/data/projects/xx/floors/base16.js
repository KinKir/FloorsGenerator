main.floors.base16=
{
"floorId": "base16",
"title": "主塔-16",
"name": "-16",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 63,223,223,  0,  0,  0,  0,  0,220,220,  0,  3],
    [  3,223,  1,  1,  1,  1,  1, 11,  1,  1,  1, 11,  3],
    [  3,223,  1, 21, 22, 21,  1,  0,  1, 27,  1,220,  3],
    [  3,  0,  1,255,255,255,  1,227,  1, 28,  1,220,  3],
    [  3, 87,  1, 11,  0, 11, 81,227, 81, 22,  1, 88,  3],
    [  3,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  3],
    [  3,122,220, 11,  0,  0, 28, 27,  0,  0,  0,  0,  3],
    [  3,  1,  1,219,  1,  1,  1,  0,  1, 11,  1,223,  3],
    [  3,  0,  0,219,  0, 11,  1,227,  1,  0,  1,223,  3],
    [  3,219,  1,  1,  1,220,  1,223,  1,  0,  1, 11,  3],
    [  3,  0,  0, 87,  0,  0,  1, 31,  1, 88,  1, 32,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "1,7": [
        {
            "type": "choices",
            "text": "\t[商人,women]700金币 魔法护符只要700金币",
            "choices": [
                {
                    "text": "买！",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=700",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-700"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:magic_amulet",
                                    "value": "item:magic_amulet+1"
                                }
                            ],
                            "false": [
                                "\t[商人,women]你的金钱不足！"
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
    ]
},
"changeFloor": {
    "3,11": {
        "floorId": "base15",
        "loc": [
            3,
            11
        ]
    },
    "1,5": {
        "floorId": "base15",
        "loc": [
            1,
            5
        ]
    },
    "9,11": {
        "floorId": "base17",
        "loc": [
            9,
            11
        ]
    },
    "11,5": {
        "floorId": "base17",
        "loc": [
            11,
            5
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"downFloor": [
    9,
    11
],
"upFloor": [
    3,
    11
],
}