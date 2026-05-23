main.floors.I41=
{
    "floorId": "I41",
    "title": "【∞】几何",
    "name": "【∞】几何",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 901,
    "bgm": "2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_I41_1_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_I41_11_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,2": [
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
                        "function": "function(){\ncore.resetMap([\"I31\",\"I32\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==40)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
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
        ],
        "4,11": [
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
                        "function": "function(){\ncore.resetMap([\"I31\",\"I32\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==40)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
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
        ],
        "8,11": [
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
                        "function": "function(){\ncore.resetMap([\"I31\",\"I32\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==40)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "I31",
                                "loc": [
                                    6,
                                    12
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
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_I41_3_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_I41_1_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_I41_1_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_I41_11_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_I41_11_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_I41_3_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_I41_3_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,9": {
            "0": {
                "condition": "flag:door_I41_1_9==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_I41_1_9",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "11,9": {
            "0": {
                "condition": "flag:door_I41_11_9==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_I41_11_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "3,1": {
            "0": {
                "condition": "flag:door901_I41_3_1==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_I41_3_1",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "9,1": {
            "0": {
                "condition": "flag:door901_I41_3_1==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_I41_3_1",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
    [173,572,584, 85,173,173,173,173,173, 85,585,572,173],
    [173,173,173,333,584,173,336,173,585,333,173,173,173],
    [173,173,  0,576,173,  0,  0,  0,173,577,  0,173,173],
    [173,576,326,  0,173,326,  0,326,173,  0,326,577,173],
    [173,173,  0,326,173,  0,333,  0,173,326,  0,173,173],
    [ 30,331,  0,  0, 59,173,  0,173, 59,  0,  0,332, 30],
    [173,  0,572,  0,  0,  0,  0,  0,  0,  0,572,  0,173],
    [173,  0,  0,331,  0,331,173,332,  0,332,  0,  0,173],
    [173, 85,173,  0,334,  0,173,  0,335,  0,173, 85,173],
    [173,334,173,173,  0,173,173,173,  0,173,173,335,173],
    [173,579,173,173,337,173,173,173,338,173,173,579,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}