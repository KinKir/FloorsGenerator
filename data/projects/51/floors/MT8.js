main.floors.MT8=
{
"floorId": "MT8",
"title": "第08层",
"name": "第08层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 81, 81,  0, 87,  0,  1, 21,  0, 21,  1],
    [  1,  0,  0,  1,  1,  0,  0,201,  1,  0, 23,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1, 32,  0, 31,  1],
    [  1,  0,  1, 21, 21, 21,  0,  0,  1,  1, 85,  1,  1],
    [  1, 31,  1,  1,  1,  1,  1,217,  1,221,  0,221,  1],
    [  1,  0,202,201,202,  0,  1,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1, 81,  1,205,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,205,  0,209,  0,217,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,201,  0,  1, 27, 21,  1, 21, 31,  1,  0,209,  1],
    [  1,  0,205, 82, 21, 28,  1, 22,  0, 81,210,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "1,1": {
        "floorId": "MT7",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    },
    "6,1": {
        "floorId": "MT9",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {
    "9,5": [
        {
            "type": "setValue",
            "name": "flag:1",
            "value": "flag:1+1"
        },
        {
            "type": "if",
            "condition": "flag:1==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                }
            ],
            "false": []
        }
    ],
    "11,5": [
        {
            "type": "setValue",
            "name": "flag:1",
            "value": "flag:1+1"
        },
        {
            "type": "if",
            "condition": "flag:1==2",
            "true": [
                {
                    "type": "openDoor",
                    "loc": [
                        10,
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
}