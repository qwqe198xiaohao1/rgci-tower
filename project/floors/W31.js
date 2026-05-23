main.floors.W31=
{
    "floorId": "W31",
    "title": "日",
    "name": "日",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 80016,
    "bgm": "3.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(item:I729>=25)",
            "true": [
                {
                    "type": "choices",
                    "text": "你已经达到当前世界的上界。\n请选择一项：",
                    "choices": [
                        {
                            "text": "离开世界",
                            "action": [
                                {
                                    "type": "insert",
                                    "loc": [
                                        0,
                                        0
                                    ],
                                    "floorId": "sample2"
                                }
                            ]
                        },
                        {
                            "text": "记录成绩",
                            "action": [
                                "计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命。\n若生命>9223372036854775807，则超出的部分不计入成绩。",
                                {
                                    "type": "if",
                                    "condition": "(status:hp>=9223372036854775807)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:hp",
                                            "value": "9223372036854775807"
                                        }
                                    ],
                                    "false": []
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "item:I729*1e16+item:greenKey*1e11"
                                },
                                {
                                    "type": "switch",
                                    "condition": "flag:world",
                                    "caseList": [
                                        {
                                            "case": "1",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "光暗",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "2",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "水火",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "3",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "日月",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "4",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "时空",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "5",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "生死",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "6",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "正邪",
                                                    "noexit": 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        6,
                                        3
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        }
                    ]
                }
            ],
            "false": []
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,12": {
            "floorId": "W32",
            "loc": [
                0,
                12
            ],
            "direction": "right"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
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
                        "function": "function(){\ncore.resetMap([\"W31\",\"W32\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==25)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W31",
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
                                "floorId": "W31",
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
    [  0,  0,  0,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [  0,  0,  0, 27,153,153,220,153, 30, 20, 20, 20, 20],
    [80064,80065,80066,218, 81, 21,  0, 82,  0, 20, 20, 20, 20],
    [80072,80073,80074, 29,153,  0,217,153,219, 34,  0,217,  0],
    [80080,80081,80082,153,153,153,  0,153,153,153, 81,153, 21],
    [ 28,  0,218,153,153,153,218,153,153,  0, 32,153,153],
    [153,219,  0,217, 82, 21,  0, 22, 81,218,  0,153, 27],
    [679,  0,153, 32,153,  0,  0,  0,153,  0, 21,219,  0]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,152,152,152,  0,152,152,152,152,  0,152,152,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,152,152,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,152,152,  0],
    [  0,80138,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [
    [80104,80105,80105,80105,80106,151,151,151,80104,80105,80105,80105,80106],
    [80112,80113,80113,80113,80114,151,151,151,80112,80113,80113,80113,80114],
    [80120,80121,80121,80121,80122,151,151,151,80120,80121,80121,80121,80122],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [80077,80078,80079,  0,  0, 90,  0,  0, 90,  0, 90,  0,  0],
    [80085,80086,80087,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [80093,80094,80095,  0,  0,  0,  0,  0,  0,  0,  0, 90,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "weather": [
        "sun",
        6
    ]
}