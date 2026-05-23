main.floors.W42=
{
    "floorId": "W42",
    "title": "空",
    "name": "空",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "m1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": 901,
    "bgm": "3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,6": {
            "floorId": "W41",
            "loc": [
                6,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:w11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:w11==2)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:I729",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:w11",
                        "value": "0"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.resetMap([\"W41\",\"W42\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==30)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W41",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "W41",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "up",
                                "time": 500
                            },
                            {
                                "type": "animate",
                                "name": "magic",
                                "loc": "hero"
                            },
                            {
                                "type": "if",
                                "condition": "(status:money>=922337203685477)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "*=",
                                        "value": "(2+flag:fwz+flag:fwz2)*0.64"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "*=",
                                        "value": "2+flag:fwz+flag:fwz2"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,232, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 33,230,  0,  0,  0,229, 29, 17, 17, 17],
    [ 17, 17, 28,231,  0, 27,  0, 28,  0,231, 28, 17, 17],
    [ 17, 17, 17,  0,  0,  0,905,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 27,231,  0, 33,  0, 29,  0,231, 27, 17, 17],
    [ 17, 17, 17, 34,229,  0,  0,  0,230, 27, 17, 17, 17],
    [ 17, 17, 17, 17, 32,229,  0,230, 29, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 29, 17, 28, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,141,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,141,141,141,141,141,141,141,  0,  0,  0],
    [  0,  0,141,141,141,141,141,141,141,141,141,  0,  0],
    [  0,  0,  0,141,141,141,141,141,141,141,  0,  0,  0],
    [  0,  0,141,141,141,141,141,141,141,141,141,  0,  0],
    [  0,  0,  0,141,141,141,141,141,141,141,  0,  0,  0],
    [  0,  0,  0,  0,141,141,141,141,141,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,141,  0,141,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}