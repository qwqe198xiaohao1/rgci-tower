main.floors.W11=
{
    "floorId": "W11",
    "title": "光",
    "name": "光",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 902,
    "firstArrive": [
        "击败怪物，可以获得反物质。\n当你击败所有BOSS，将重置地图并获得一次维度提升。\n维度提升后，你的反物质数量将翻倍。",
        "在反物质潮汐 \\i[starPortal] 中，\n能够使用反物质来交换你需要的资源。\n现在，请寻找一处反物质潮汐，\n接受进一步的指引。",
        "当你撑不下去的时候，\n就使用背包中的【离开世界】，\n重返反物质宇宙以获取足够的补给吧。"
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(item:I729>=15)",
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
        "6,10": {
            "floorId": "W12",
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
                        "function": "function(){\ncore.resetMap([\"W11\",\"W12\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==15)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W11",
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
                                "floorId": "W11",
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
                    },
                    {
                        "type": "if",
                        "condition": "(flag:jiaocheng==0)",
                        "true": [
                            "维度提升之后，你拥有的反物质数量翻倍！\n并且你的宝石、血瓶效力提升40%！",
                            "接下来，怪物会变得更强大，\n如果感到难以支撑，可以打开背包，选择【离开世界】。",
                            "初次维度提升奖励：\n1攻击、1防御。",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jiaocheng",
                                "value": "1"
                            }
                        ],
                        "false": []
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
    [903,903,903,900,900,900,900,900,900,900,903,903,903],
    [903,903,900,900,900,900,900,900,900,900,900,903,903],
    [903,900,900,900,900,900,  0,900,900,900,900,900,903],
    [900,900,900, 28,  0,201,  0,201,  0, 27,900,900,900],
    [900,900,900,  0, 31,901,203,901, 31,  0,900,900,900],
    [900,900,900,202,901, 31,  0, 31,901,203,900,900,900],
    [900,900,900,  0,202,  0,204,  0,202,  0,900,900,900],
    [900,900,900,201,901, 31,  0, 31,901,201,900,900,900],
    [900,900,900,  0, 29,901,203,901, 29,  0,900,900,900],
    [900,900,900, 27,  0,203,  0,202,  0, 28,900,900,900],
    [903,900,900,900,900,900,904,900,900,900,900,900,903],
    [903,903,900,900,900,900,900,900,900,900,900,903,903],
    [903,903,903,900,900,900,900,900,900,900,903,903,903]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "1.mp3"
}