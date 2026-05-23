main.floors.I22=
{
    "floorId": "I22",
    "title": "【∞】空",
    "name": "【∞】空",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "m5.jpg",
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
            "floorId": "I21",
            "loc": [
                6,
                6
            ],
            "direction": "down"
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
                        "function": "function(){\ncore.resetMap([\"I21\",\"I22\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==30)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "I21",
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
                                "floorId": "I21",
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
                                "loc": "hero",
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:halfinf)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "*=",
                                        "value": "(2+flag:fwz+flag:fwz2)*flag:halfib"
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
    [ 17, 17, 17, 17, 17, 17,270, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 27,266,  0,  0,  0,265, 28, 17, 17, 17],
    [ 17, 17,577,267,  0,578,  0, 33,  0,267, 28, 17, 17],
    [ 17, 17, 17,  0,  0,  0,905,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 59,267,  0, 59,  0,578,  0,267,576, 17, 17],
    [ 17, 17, 17, 58,265,  0,  0,  0,266, 27, 17, 17, 17],
    [ 17, 17, 17, 17, 28,265,  0,266,578, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 27, 17,577, 17, 17, 17, 17, 17],
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
    [  0,  0,  0,  0,  0,  0,173,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,173,173,173,173,173,173,173,  0,  0,  0],
    [  0,  0,173,173,173,173,173,173,173,173,173,  0,  0],
    [  0,  0,  0,173,173,173,173,173,173,173,  0,  0,  0],
    [  0,  0,173,173,173,173,173,173,173,173,173,  0,  0],
    [  0,  0,  0,173,173,173,173,173,173,173,  0,  0,  0],
    [  0,  0,  0,  0,173,173,173,173,173,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,173,  0,173,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}