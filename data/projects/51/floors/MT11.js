main.floors.MT11=
{
"floorId": "MT11",
"title": "第11层",
"name": "第11层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1, 27,  0, 81,  0,  1, 31, 21,  1],
    [  1,  0, 38,  0,  1,  0,205,  1,213,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1,  1,  0, 81,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0,206,  1,  1,  1,  1,203,  1],
    [  1,218,  0,218,  1,213,  0, 81,218,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  0, 31,  1,  0,  1],
    [  1, 32,  0,  0,206,  0,  0, 81,203,  0,  1,  0,  1],
    [  1,  1, 82,  1,  1,  1,  1,  1,  1,  1,  1,206,  1],
    [  1,  0,206,  0,203, 81,  0,  0,  0,  0,205,  0,  1],
    [  1, 21,  0,  0,  0,  1,  0,  1,  1, 81,  1,  0,  1],
    [  1, 21, 21, 21, 21,  1, 88,  1, 32,206,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "6,11": {
        "floorId": "MT10",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT12",
        "loc": [
            10,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "1,5": [
        {
            "type": "setValue",
            "name": "flag:2",
            "value": "flag:2+1"
        },
        {
            "type": "if",
            "condition": "flag:2==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        4
                    ]
                }
            ],
            "false": []
        }
    ],
    "3,5": [
        {
            "type": "setValue",
            "name": "flag:2",
            "value": "flag:2+1"
        },
        {
            "type": "if",
            "condition": "flag:2==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        4
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
"item_ratio": 2,
}