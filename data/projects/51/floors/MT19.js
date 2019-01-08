main.floors.MT19=
{
"floorId": "MT19",
"title": "第19层",
"name": "第19层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1, 31,  0,218,  0, 22,  1, 21, 27,  1],
    [  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,206,  0,  1],
    [  1, 81,  1,  1,214,  1, 16,  1,214,  1, 81,  1,  1],
    [  1,205,  0,  1,  0,  0, 16,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  1, 21,  0,  1,  0, 21,  1,203,203,  1],
    [  1, 81,  1,  1,  0,215,  0,215,  0,  1,  0,  0,  1],
    [  1,206,  0,  1,  1,  1, 82,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,203,  0,  0,  0,  0,214,  0,  0,213,  1],
    [  1, 81,  1,  1,  1,  1,214,  1,  1, 31, 21,  0,  1],
    [  1,  0,  1,  0, 81, 21,  0, 21,  1,  1,  1,206,  1],
    [  1,203,  0,206,  1,  0, 87,  0, 81,  0,205,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "1,1": {
        "floorId": "MT18",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    },
    "6,11": {
        "floorId": "MT20",
        "loc": [
            6,
            10
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {
    "6,3": [
        {
            "type": "setBlock",
            "number": 55
        }
    ]
},
"cannotMove": {},
"item_ratio": 2,
}