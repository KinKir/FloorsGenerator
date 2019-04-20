main.floors.MT18=
{
"floorId": "MT18",
"title": "第18层",
"name": "第18层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0, 82,  0, 88,  0, 81,218,  0, 21,  1],
    [  1,  0,  0,121,  1,  0,  0,  0,  1,  0,203, 21,  1],
    [  1, 81,  1,  1,  1,  1, 16,  1,  1,  0,  0, 22,  1],
    [  1,  0, 31,  0, 81,214,  0,214, 81,213,  0, 21,  1],
    [  1,215,  0,215,  1,  0,  0,  0,  1,  0,206, 21,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1,  1,  1,  1],
    [  1,  0,213,  0,  0,  0,  0,  0,  0,  0,215,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,218,  0,  1,206,206,  1,203,203,  1,  0,218,  1],
    [  1,  0, 21,  1,206,206,  1,203,203,  1, 21,  0,  1],
    [  1, 31, 27,  1,  0, 21,  1, 21,  0,  1, 28, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "3,2": [
        "\t[老人,man]在这区域不多次提升攻击力 就不能打败石头人 切记前人教训",
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
    "6,1": {
        "floorId": "MT17",
        "loc": [
            6,
            2
        ],
        "direction": "down"
    },
    "1,1": {
        "floorId": "MT19",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 2,
}