main.floors.MT48=
{
"floorId": "MT48",
"title": "第48层",
"name": "第48层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4],
    [  1,  0, 32,  0,  1,  0,  0, 31, 31, 31,  0,  0,  1],
    [  1,  0,  0,121,  1, 82,  1,  1,  1,  1,  1, 82,  1],
    [  1,  0,220,  0,  1,  0,  1,246,  1,246,  1,  0,  1],
    [  1,  1, 82,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,204,  0,  0,  1,246,  1,246,  1,  0,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,207,  1,  0,219,  0,  1,  0,  0,  0,219,  0,  1],
    [  1,  0,  1, 27,  0, 31,  1,  1, 85,  1,  1,  0,  1],
    [  1,219,  1,  1, 81,  1,  1,  0,  0,  0,  1,  0,  1],
    [  1,  0,  1,  0,228,  0,  1,  0, 41,  0,  1,  0,  1],
    [  1, 87,  1, 28,  0, 32,  1,  0,  0,  0,  1, 88,  1],
    [  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4]
],
"firstArrive": [],
"events": {
    "3,2": [
        "\t[老人,man]像骰子上5的形状是一种封印魔法 你最好记住 它在你与49楼假魔王战斗时有用 什么 别做白日梦了 这房间没有魔法警卫",
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
        "floorId": "MT47",
        "loc": [
            2,
            1
        ],
        "direction": "down"
    },
    "1,11": {
        "floorId": "MT49",
        "loc": [
            2,
            11
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 5,
}