main.floors.W61=
{
    "floorId": "W61",
    "title": "生",
    "name": "生",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "m3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": 901,
    "bgm": "2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,9": {
            "floorId": "W62",
            "loc": [
                0,
                9
            ]
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
                        "function": "function(){\ncore.resetMap([\"W61\",\"W62\"])\n}"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "W61",
                        "loc": [
                            6,
                            5
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
    [912,912,912,912,912,912,912,912,912,912,912,912,912],
    [912,912,912,  0, 27,912,912,912,912,912,241,  0, 30],
    [912,912,912,241,912,912,912,912,912,912, 82,912, 81],
    [912,912, 47,  0,912,912,244,912,912,912, 21, 82,243],
    [912,241,  0, 29,912,  0, 27,  0,912, 81,241,912, 34],
    [912, 82,912,242, 81, 21,  0, 28,242,  0,912,912,912],
    [912, 27,243, 33,912,  0, 21,  0,912,241,  0, 27,912],
    [912,912,  0,912,912,912, 81,912,243,  0, 28,  0,912],
    [912,912, 29,912, 33,912, 34,912, 81,912, 82,912,912],
    [912,912,241,912, 82,  0, 82,  0, 21, 81,  0, 28,672],
    [912,243,  0, 81,  0, 28,912,242,912,912,242,  0,912],
    [912, 30,912,912, 22,912,912, 28,912,912, 27,912,912],
    [912,912,912,912,912,912,912,912,912,912,912,912,912]
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