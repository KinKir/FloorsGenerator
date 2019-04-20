main.floors.base10=
{
"floorId": "base10",
"title": "主塔-10",
"name": "-10",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,232, 11,232,232, 88,  1, 87,  0,  0,231,231,  3],
    [  3, 11,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  3],
    [  3,  0,  1, 22, 23,  1, 62,  1, 31, 31,  1,  0,  3],
    [  3,  0,  1, 21, 21,  1, 83,  1, 31, 31,  1,219,  3],
    [  3,222,  1,  0,225, 82,230, 82,225,  0,  1, 11,  3],
    [  3,222,  1, 81,  1,  1,  0,  1,  1, 81,  1,  0,  3],
    [  3,  0,  1, 27,  1,308,309,310,  1, 28,  1,  0,  3],
    [  3,  0,  1, 27,  1,311,312,313,  1, 28,  1,  0,  3],
    [  3,  0,  1, 27,  1,314,257,315,  1, 28,  1,  0,  3],
    [  3, 11,  1,  1,  1,  1, 83,  1,  1,  1,  1,  0,  3],
    [  3,212,212,  0,  0,231,  0,  0,  0,  0, 11,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {},
"changeFloor": {
    "7,1": {
        "floorId": "base9",
        "stair": "downFloor"
    },
    "5,1": {
        "floorId": "base11",
        "stair": "upFloor"
    }
},
"afterBattle": {
    "6,9": [
        {
            "type": "function",
            "function": "function(){\nvar x=core.status.event.data.x,y=core.status.event.data.y;if(core.isset(x)&&core.isset(y)){core.insertAction([{type:'hide',loc:[[x-1,y-2],[x,y-2],[x+1,y-2],[x-1,y-1],[x,y-1],[x+1,y-1],[x-1,y],[x+1,y]]}]);}\n}"
        }
    ]
},
"afterGetItem": {
    "6,3": [
        {
            "type": "function",
            "function": "function(){\ncore.setItem('knife',5);\n}"
        }
    ]
},
"afterOpenDoor": {},
"cannotMove": {},
}