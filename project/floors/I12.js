main.floors.I12=
{
    "floorId": "I12",
    "title": "【∞】暗",
    "name": "【∞】暗",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 901,
    "bgm": "1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,10": {
            "floorId": "I11",
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
    [903,903,903,900,900,900,900,900,900,900,941,941,941],
    [903,903,900,900,900,900,900,900,900,900,900,941,941],
    [903,900,176,  0,900,900, 30,900,900,  0,176,900,941],
    [900,900,  0,176, 31,253,  0,254, 27,176,  0,900,900],
    [900,900,900,254,  0,176,253,176,  0,255,900,900,900],
    [900,900,900, 32,176, 32,  0, 31,176, 29,900,900,900],
    [900,900,900,  0,253,  0,256,  0,255,  0,900,900,900],
    [900,900,900, 29,176, 31,  0, 32,176, 32,900,900,900],
    [900,900,900,253,  0,176,255,176,  0,254,900,900,900],
    [900,900,  0,176, 28,255,  0,253, 31,176,  0,900,900],
    [941,900,176,  0,900,900,905,900,900,  0,176,900,903],
    [941,941,900,900,900,900,900,900,900,900,900,903,903],
    [941,941,941,900,900,900,900,900,900,900,903,903,903]
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