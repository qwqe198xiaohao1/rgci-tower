main.floors.Infinity=
{
    "floorId": "Infinity",
    "title": "大坍缩",
    "name": "大坍缩",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [
        {
            "name": "inf.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": 892,
    "bgm": "bgm.mp3",
    "firstArrive": [
        "请按下确认水晶，启动【大坍缩】！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            {
                "type": "animate",
                "name": "fwzyz"
            },
            {
                "type": "animate",
                "name": "fwzyz"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 3000,
                "moveMode": "easeOut",
                "keep": true
            },
            {
                "type": "if",
                "condition": "(flag:inft==0)",
                "true": [
                    {
                        "type": "choices",
                        "text": "计分方式：\r[yellow]永恒之匙数量*1e4+星系数量\r\n在计分之后，请选择继续游戏，\n抵达【无限疆域】！",
                        "choices": [
                            {
                                "text": "记录成绩",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "value": "item:greenKey*1e4+item:I848"
                                    },
                                    {
                                        "type": "win",
                                        "reason": "反物质宇宙 - 无限",
                                        "noexit": 1
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
                            },
                            {
                                "text": "继续游戏",
                                "action": [
                                    {
                                        "type": "insert",
                                        "name": "反物质潮汐2"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "insert",
                        "name": "反物质潮汐2"
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "animate",
                "name": "fwzyz"
            },
            {
                "type": "animate",
                "name": "fwzyz"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 3000,
                "moveMode": "easeOut",
                "keep": true
            },
            {
                "type": "if",
                "condition": "(flag:inft==0)",
                "true": [
                    {
                        "type": "choices",
                        "text": "计分方式：\r[yellow]永恒之匙数量*1e4+星系数量\r\n在计分之后，请选择继续游戏，\n抵达【无限疆域】！",
                        "choices": [
                            {
                                "text": "记录成绩",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "value": "item:greenKey*1e4+item:I848"
                                    },
                                    {
                                        "type": "win",
                                        "reason": "反物质宇宙 - 无限",
                                        "noexit": 1
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
                            },
                            {
                                "text": "继续游戏",
                                "action": [
                                    {
                                        "type": "insert",
                                        "name": "反物质潮汐2"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "insert",
                        "name": "反物质潮汐2"
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,102,  0,  0,  0,  0,  0,  0]
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