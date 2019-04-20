main.floors.MT36=
{
"floorId": "MT36",
"title": "第36层",
"name": "第36层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,121,  0,225,  0,  0,  0,214,  0,227,  0, 88,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1,216,  1,  1,  1,  1,  0,  1,  1,  1,  1,216,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,227,  1,  1,  1,  0,212,  0,  1,  1,  1,224,  1],
    [  1,  0, 81,  0,  0,216,  0,216,  0,  0, 81,  0,  1],
    [  1,  0,  1,  1,  1,  0,227,  0,  1,  1,  1,227,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,224,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1, 32,  0,225,  0, 21,  0,214,  0,224,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "1,1": [
        "\t[老人,man]不用找了 暗道不存在的 如果你能用好移动宝物 就可以省很多血",
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
    "11,1": {
        "floorId": "MT35",
        "loc": [
            10,
            1
        ],
        "direction": "down"
    },
    "11,11": {
        "floorId": "MT37",
        "loc": [
            11,
            10
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