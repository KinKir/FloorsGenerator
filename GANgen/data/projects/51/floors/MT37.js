main.floors.MT37=
{
"floorId": "MT37",
"title": "第37层",
"name": "第37层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,  0,  0,  0,  0,  0,225,  0, 32,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1, 82,  1,  1, 31, 31,  1, 31, 31,  1,  1,227,  1],
    [  1,  0,  1, 31, 31, 21,  1, 31, 31, 31,  1,  0,  1],
    [  1,  0,  1, 21, 21, 49,  1, 23, 21, 21,  1,  0,  1],
    [  1, 31,  1,  1,  1,  1,  1,  1,  1,  1,  1,224,  1],
    [  1,  0,  1, 28, 27, 32,  1, 27, 27, 27,  1,  0,  1],
    [  1,  0,  1, 21, 21, 21,  1, 28, 28, 28,  1,  0,  1],
    [  1,225,  1,  1, 22, 22,  1, 32, 21,  1,  1,227,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1,121,  0,216,  0,  0,  0,  0,  0,212,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,11": [
        "\t[老人,man]你需要用地震卷轴取这里的所有宝物 当然你也可以不取 51层魔塔最好玩的地方就是道具至少有2-4种用法",
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
    ]
},
"changeFloor": {
    "11,11": {
        "floorId": "MT36",
        "loc": [
            11,
            10
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT38",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}