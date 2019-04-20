main.floors.main12=
{
"floorId": "main12",
"title": "主塔12",
"name": "12",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,213,226,213,  0,  0,  0,  0,204,  2,  3],
    [  3,  0,  2,  2,  2,  2,  2,  2,  2,  2,213,226,  3],
    [  3,  0,  2, 27, 31,204, 63,  2, 21, 21,  2, 82,  3],
    [  3, 28,  2,  0,  0,  0,204,  2,216,216,  0,213,  3],
    [  3,  2,  2,  2,  2,  2, 86,  2,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,215,215,  0,  0,  0,  0,210,  3],
    [  3,213,  2, 81,  2,  2,  2,  2,  2,  2,  2, 83,  3],
    [  3,  0,  2,  0,221,207, 26,  2, 36, 85,207,207,  3],
    [  3,  0,  2,  2,  2,  2,  2,  2,  2,  2,207,207,  3],
    [  3,  0,  2,253,206,  0, 88,  0, 87,  2, 22, 23,  3],
    [  3,  0,  0,253,  2,  0,  0,  0,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "9,8": [
        {
            "type": "if",
            "condition": "flag:door==4",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        8
                    ]
                }
            ],
            "false": []
        }
    ]
},
"changeFloor": {
    "8,10": {
        "floorId": "main13",
        "stair": "downFloor"
    },
    "6,10": {
        "floorId": "main11",
        "stair": "upFloor"
    }
},
"afterBattle": {
    "10,8": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ],
    "11,8": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ],
    "10,9": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ],
    "11,9": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}