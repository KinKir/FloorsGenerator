main.floors.main4=
{
"floorId": "main4",
"title": "主塔4",
"name": "4",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  2, 88,  0,  0,  0,  0,203,202,  0,  0,  2,  3],
    [  3,  2,  2,  2, 81,  2,  2,202,217,  2,  0,  2,  3],
    [  3,  2, 32,  0,209,  2,  2,122,320,  2,  0,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  3],
    [  3, 88,  0,217, 35,  2, 87,202,203,  0,217,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2,  2,  3],
    [  3,  2,  2, 22,  2,  0,  2,  2,  0,  2, 21,  2,  3],
    [  3,  2, 88,  0,  2,  0,  0,  0,  0, 82,209,  2,  3],
    [  3,  2,  2,201,202,201,  2,  2,  0,  2, 22,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "7,4": [
        {
            "type": "choices",
            "text": "\t[商人,women]$15就可以增加200生命，需要吗？",
            "choices": [
                {
                    "text": "要",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=15",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-15"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "value": "status:hp+200"
                                },
                                {
                                    "type": "hide",
                                    "time": 500
                                },
                                {
                                    "type": "exit"
                                }
                            ],
                            "false": [
                                "\t[商人,women]你的金钱不足！",
                                {
                                    "type": "revisit"
                                }
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
        }
    ]
},
"changeFloor": {
    "6,6": {
        "floorId": "main5",
        "stair": "downFloor"
    },
    "2,2": {
        "floorId": "main3",
        "loc": [
            2,
            2
        ]
    },
    "1,6": {
        "floorId": "main3",
        "loc": [
            1,
            6
        ]
    },
    "2,9": {
        "floorId": "main3",
        "loc": [
            2,
            9
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"downFloor": [
    2,
    2
],
}