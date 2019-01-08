main.floors.base20=
{
"floorId": "base20",
"title": "主塔-20",
"name": "-20",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 28,331,  1,  0,  1,  1,  1, 87,  1,  1, 28,  3],
    [  3,  1, 27,  1,227,  1,  0,227,255,227,  0,331,  3],
    [  3,  1,236, 82,255,  1,  0,255,227,255,  0,  1,  3],
    [  3,  1, 28,  1,227,  1,  0,  0,  0,  0,  0,  1,  3],
    [  3,  1,  1,  1,  0,  1,  1,  1, 81,  1,  1,  1,  3],
    [  3, 21, 21,255,227,  0,  0,  0,227,255, 21, 21,  3],
    [  3,  1,  1,  1, 81,  1,  1,  1,  0,  1,  1,  1,  3],
    [  3,  1, 23,234,236,234, 23,  1,254,  1, 32,  1,  3],
    [  3,  1, 23,234,236,234, 23,  1,235, 82, 48,  1,  3],
    [  3,331, 23,234,236,234, 23,  1,254,  1, 32,331,  3],
    [  3, 27,  1,  1, 88,  1,  1,  1,  0,  1,  1, 28,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "8,1": {
        "floorId": "base19",
        "stair": "downFloor"
    },
    "4,11": {
        "floorId": "base21",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}