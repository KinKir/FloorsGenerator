main.floors.MT44=
{
"floorId": "MT44",
"title": "第44层",
"name": "第44层",
"canFlyTo": false,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 31,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1, 31, 44, 31,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 31,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1, 85,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,223,  0,223,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "1,1": {
        "floorId": "MT45",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "7,9": [
        {
            "type": "setValue",
            "name": "flag:11",
            "value": "flag:11+1"
        },
        {
            "type": "if",
            "condition": "flag:11==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        8
                    ]
                }
            ],
            "false": []
        }
    ],
    "5,9": [
        {
            "type": "setValue",
            "name": "flag:11",
            "value": "flag:11+1"
        },
        {
            "type": "if",
            "condition": "flag:11==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        8
                    ]
                }
            ],
            "false": []
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}