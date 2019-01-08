main.floors.main8=
{
"floorId": "main8",
"title": "主塔8",
"name": "8",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,215,  0,  0,  2,216,206,  0,  2,213, 21,  3],
    [  3,  2,221,  2,  0, 81,  0,  2,  0,  0,  0,  2,  3],
    [  3,  0,203,  2,  2,  2,  0,  2,  2,  2,  0,213,  3],
    [  3,  0,  2,  2, 27,  2,  0,  2, 28,  2,  2,210,  3],
    [  3,  0,  0,  2, 27,  2,211,  2, 28,  2,  0,  0,  3],
    [  3, 88,  0,  2, 21, 82,225, 82, 21,  2,  0, 87,  3],
    [  3,  2,  0,  2, 32,  2,211,  2, 31,  2,  2,  2,  3],
    [  3,  0,  0,  2, 32,  2,  0,  2, 31,  2,121, 32,  3],
    [  3,206,206,  2,  2,  2, 81,  2,  2,  2, 27, 28,  3],
    [  3,  0,  0,  0,216,  0,  0,  0,217,  0,253,253,  3],
    [  3,  0,  0,  0,216,  0,  0,  0,217,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "10,8": [
        "\t[老人,man]你真了不起竟然能来到这层。那么这个给你吧！",
        {
            "type": "setValue",
            "name": "item:fly",
            "value": "item:fly+1"
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    8
                ]
            ],
            "floorId": "main8",
            "time": 500
        }
    ]
},
"changeFloor": {
    "11,6": {
        "floorId": "main9",
        "stair": "downFloor"
    },
    "1,6": {
        "floorId": "main7",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}