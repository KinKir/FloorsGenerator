main.floors.MT16=
{
"floorId": "MT16",
"title": "第16层",
"name": "第16层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21,206,  0,  1,  0, 88,  0,  1,  0,  0,206,  1],
    [  1, 21,218,  0, 81,  0,  0,  0, 81,203,  0,  0,  1],
    [  1, 21,206,  0,  1,213,  0, 21,  1,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1, 27, 21,  0,  1, 31,  0,  0,  1,  0,213,  0,  1],
    [  1, 31,  0,215, 81,  0,214,  0,  1,  0,  0,  0,  1],
    [  1, 28, 21,  0,  1,  0,  0, 21,  1,206,  0, 22,  1],
    [  1,  1, 16,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  0,203,  0,  1,206,  0,206,  1,  0,218,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,  0, 81,  0,  1,  1,  1],
    [  1,121,  0,  0,  1,  0, 87,  0,  1,216, 16, 16,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,11": [
        "\t[老人,man]整个魔塔有2把藏在墙里的红钥匙",
        {
            "type": "hide",
            "time": 750
        },
        {
            "type": "setValue",
            "name": "flag:time",
            "value": "new Date().getTime()"
        },
        {
            "type": "setValue",
            "name": "flag:steps",
            "value": "core.status.hero.steps"
        }
    ],
    "11,11": null
},
"changeFloor": {
    "6,1": {
        "floorId": "MT15",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT17",
        "loc": [
            5,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "11,11": [
        {
            "type": "setBlock",
            "number": 56
        }
    ]
},
"cannotMove": {},
"item_ratio": 2,
}