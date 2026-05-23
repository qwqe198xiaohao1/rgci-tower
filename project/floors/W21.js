main.floors.W21=
{
    "floorId": "W21",
    "title": "水",
    "name": "水",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 60000,
    "bgm": "1.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(item:I729>=20)",
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
        "12,8": {
            "floorId": "W22",
            "loc": [
                0,
                8
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,5": [
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
                        "function": "function(){\ncore.resetMap([\"W21\",\"W22\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==20)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W21",
                                "loc": [
                                    5,
                                    1
                                ],
                                "direction": "down",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "W21",
                                "loc": [
                                    5,
                                    1
                                ],
                                "direction": "down",
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
    [171,171,171,171,171,171,171,171,171,171,62752,62753,62754],
    [171,171,171,171,171,  0,171,171,171,171,62760,62761,62762],
    [171,171,171,209, 27,  0, 28,211,171,171,62768,62769,62770],
    [171,171,  0, 31,140,140,140,  0,171,171,171,171,171],
    [171, 27,209,  0,210,  0,210, 28,  0,171,171,171,171],
    [171,171,  0, 28,  0,140, 29,140,211,  0,212,171,171],
    [171,171,140,140,209,140,140,140,140, 29,140, 31,171],
    [171,171,62923,62924,  0,140,140,  0,210,  0, 32,211,171],
    [171,171,62931,62932, 28,140,  0, 27,140,140,140,  0,680],
    [171,171,171,171,  0,210, 29,  0,140,140,  0, 27,171],
    [171,171,171,171,171,171,211,140,140,140,209,140,171],
    [62829,62830,171,171,171,171,  0, 28,171,171, 32,171,171],
    [62837,62838,171,171,171,171,171,171,171,171,171,171,171]
],
    "bgmap": [

],
    "fgmap": [
    [  0,70135,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,62898,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,62898,62899,62900,62901,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,62906,62907,62908,62909,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,62914,62915,62916,62917,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [70135,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}