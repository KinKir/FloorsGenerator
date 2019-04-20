main.floors.MT43=
{
"floorId": "MT43",
"title": "第43层",
"name": "第43层",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 81,  0,204,  0, 81, 81,246,  1,246,  1],
    [  1,  0,  0,  1,  1,  1,  0,  1,  1,  0,  1,  0,  1],
    [  1,  0,  0, 81,  0,  1,228,  1,  0,  0,  1,  0,  1],
    [  1, 82,  1,  1,220,  1,  0,228,  0, 42,  1,  0,  1],
    [  1,  0,204,  0,  0,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1, 81,  1,  1, 32,  0, 81,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,204,  0,  0,  1,219,  0, 31,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  0, 21,  0,  1],
    [  1,  0,207,  1, 32,  0,228,  0,  1,  1,  1, 81,  1],
    [  1,  0,  0,  1, 32,  1,  1,  0, 81,  0,207,  0,  1],
    [  1, 87,  0,  1, 32,  0, 82,  0,  1,  0,  0, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
"firstArrive": [],
"events": {
    "9,1": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.status.hero.loc.direction=='right'",
                "true": [
                    {
                        "type": "move",
                        "time": 500,
                        "steps": [
                            "right",
                            "right"
                        ],
                        "immediateHide": true
                    },
                    {
                        "type": "setBlock",
                        "number": 1,
                        "loc": [
                            7,
                            1
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                1
                            ],
                            [
                                10,
                                1
                            ],
                            [
                                11,
                                1
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "battle",
                        "id": "whiteKing"
                    },
                    {
                        "type": "hide"
                    }
                ]
            }
        ]
    },
    "11,1": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    },
    "10,1": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": true,
        "data": []
    }
},
"changeFloor": {
    "1,1": {
        "floorId": "MT42",
        "loc": [
            1,
            2
        ],
        "direction": "down"
    },
    "1,11": {
        "floorId": "MT45",
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
"item_ratio": 5,
}