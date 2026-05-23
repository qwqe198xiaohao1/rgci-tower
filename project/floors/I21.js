main.floors.I21=
{
    "floorId": "I21",
    "title": "【∞】时",
    "name": "【∞】时",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "i2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": 901,
    "bgm": "3.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(core.itemCount('I729')>=30)",
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
                                        1,
                                        0
                                    ],
                                    "floorId": "sample2"
                                }
                            ]
                        },
                        {
                            "text": "记录成绩",
                            "action": [
                                "计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命/1e3。\n若生命>9223372036854775807，则超出的部分不计入成绩。",
                                {
                                    "type": "if",
                                    "condition": "(core.getStatus('hp')>=9223372036854775807)",
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
                                    "operator": "/=",
                                    "value": "1000"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "core.itemCount('I729')*1e16+core.itemCount('greenKey')*1e11"
                                },
                                {
                                    "type": "switch",
                                    "condition": "core.getFlag('world', 0)",
                                    "caseList": [
                                        {
                                            "case": "1",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "【∞】光暗",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "2",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "【∞】时空",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "3",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "【∞】正邪",
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
        "6,6": {
            "floorId": "I22",
            "loc": [
                6,
                6
            ],
            "direction": "down"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
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
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
    [173,173,173, 59,173,173,173,173,173, 27,173,173,173],
    [173,173, 59,  0,259,173,173,173,258,  0,578,173,173],
    [173,173,173,258,  0,  0,260,  0,  0,258,173,173,173],
    [173,173,173,  0,  0, 27,  0,  0, 59,  0,173,173,173],
    [173,577,259,  0,  0,  0,904,  0,  0,  0,257,576,173],
    [173,173,173,  0, 59,  0,  0,577,  0,  0,173,173,173],
    [173,173,173,259,  0,  0,  0,  0,  0,257,173,173,173],
    [173,173, 28,  0,257,173,173,173,257,  0,578,173,173],
    [173,173,173, 28,173,173,173,173,173, 33,173,173,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,809,  0,  0,  0,  0,  0,809,  0,  0,  0],
    [  0,  0,809,809,809,  0,  0,  0,809,809,809,  0,  0],
    [  0,  0,  0,809,809,809,809,809,809,809,  0,  0,  0],
    [  0,  0,  0,809,809,809,809,809,809,809,  0,  0,  0],
    [  0,809,809,809,809,809,809,809,809,809,809,809,  0],
    [  0,  0,  0,809,809,809,809,809,809,809,  0,  0,  0],
    [  0,  0,  0,809,809,809,809,809,809,809,  0,  0,  0],
    [  0,  0,809,809,809,  0,  0,  0,809,809,809,  0,  0],
    [  0,  0,  0,809,  0,  0,  0,  0,  0,809,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}