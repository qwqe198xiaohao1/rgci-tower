main.floors.I11=
{
    "floorId": "I11",
    "title": "【∞】光",
    "name": "【∞】光",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 902,
    "bgm": "1.mp3",
    "firstArrive": [
        "\b[down,6,2]……\n\n……",
        "\b[down,6,2]这还是原来的怪物吗？"
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(core.itemCount('I729')>=20)",
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
                                "计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命。\n若生命>9223372036854775807，则超出的部分不计入成绩。",
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
        "6,10": {
            "floorId": "I12",
            "loc": [
                6,
                10
            ],
            "direction": "up"
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
                        "function": "function(){\ncore.resetMap([\"I11\",\"I12\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==20)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "I11",
                                "loc": [
                                    6,
                                    2
                                ],
                                "direction": "down",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "I11",
                                "loc": [
                                    6,
                                    2
                                ],
                                "direction": "down",
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
    [940,940,940,900,900,900,900,900,900,900,903,903,903],
    [940,940,900,900,900,900,900,900,900,900,900,903,903],
    [940,900,  0,175,900,900,  0,900,900,175,  0,900,903],
    [900,900,175,  0, 31,249,  0,249, 31,  0,175,900,900],
    [900,900,900, 29,175,  0,250,  0,175, 32,900,900,900],
    [900,900,900,251,  0,175, 28,175,  0,250,900,900,900],
    [900,900,900, 31,251, 27,252, 32,251, 31,900,900,900],
    [900,900,900,249,  0,175, 31,175,  0,249,900,900,900],
    [900,900,900, 28,175,  0,250,  0,175, 29,900,900,900],
    [900,900,175,  0, 31,250, 27,251, 31,  0,175,900,900],
    [903,900,  0,175,900,900,904,900,900,175,  0,900,940],
    [903,903,900,900,900,900,900,900,900,900,900,940,940],
    [903,903,903,900,900,900,900,900,900,900,940,940,940]
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