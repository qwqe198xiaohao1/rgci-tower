main.floors.W12=
{
    "floorId": "W12",
    "title": "暗",
    "name": "暗",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 901,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            {
                "type": "if",
                "condition": "(flag:chaoxi1==0)",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true,
                        "time": 0
                    },
                    "反物质潮汐已收入背包。\n此后，你可以按V键（PC端），\n或按下边栏第五个键（移动端）打开反物质潮汐。",
                    "你可以使用反物质潮汐，将自己的反物质，\n转化为各种所需的资源。\n相信在换取资源后，你将拥有击败两个BOSS的能力。",
                    "击败BOSS后，将进入下一个维度，\n地图重置，所有怪物能力重置。\n接下来，请击败BOSS，并完成一次【维度提升】！",
                    {
                        "type": "setValue",
                        "name": "flag:sh1",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh2",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh3",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh4",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh5",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh6",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh7",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sh8",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:chaoxi1",
                        "value": "1"
                    },
                    {
                        "type": "openShop",
                        "id": "S"
                    }
                ],
                "false": [
                    "反物质潮汐已收入背包。\n此后，你可以按V键（PC端），\n或按下边栏第五个键（移动端）打开反物质潮汐。"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,10": {
            "floorId": "W11",
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
    [903,900,900,900,900,900, 90,900,900,900,900,900,903],
    [900,900,900, 31,  0,205,  0,206,  0, 27,900,900,900],
    [900,900,900,206,902,  0, 31,  0,902,207,900,900,900],
    [900,900,900, 32,  0,902,  0,902,  0, 29,900,900,900],
    [900,900,900,  0,205,  0,208,  0,207,  0,900,900,900],
    [900,900,900, 29,  0,902,  0,902,  0, 32,900,900,900],
    [900,900,900,205,902,  0, 31,  0,902,206,900,900,900],
    [900,900,900, 28,  0,207,  0,205,  0, 31,900,900,900],
    [903,900,900,900,900,900,905,900,900,900,900,900,903],
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