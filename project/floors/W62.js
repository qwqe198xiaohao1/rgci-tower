main.floors.W62=
{
    "floorId": "W62",
    "title": "死",
    "name": "死",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "m4.jpg",
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
        "0,9": {
            "floorId": "W61",
            "loc": [
                12,
                9
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,1": [
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
    [911,911,911,911,911,911,911,911,911,911,911,911,911],
    [911, 21, 21, 21,911,911,248,911,911,911,911,911,911],
    [911,911,911, 82,911, 32,  0, 34,911,911, 30,911, 33],
    [911, 34,911, 28,911,  0, 28,  0, 81, 81,247,911, 82],
    [911,  0, 81,  0, 81, 34,  0, 29,911,911, 29, 81, 30],
    [911,911,911, 81,911,911,911,246,911,911,245,911,  0],
    [911, 21,911,247,  0, 82,246,  0, 21,247,  0,911,246],
    [911,  0,246,  0, 28,911,  0, 27,  0,911,245,  0, 33],
    [911,245,911,911,247,911,911,911, 81,911,911,247,911],
    [675,  0, 82,  0, 27,911, 28,911,  0, 27,911, 27,  0],
    [ 82, 29,911, 81,  0,246,  0,245, 34,  0, 82,  0, 33],
    [ 33,911,911, 34,911,911, 33,911,911,911,911, 29,911],
    [911,911,911,911,911,911,911,911,911,911,911,911,911]
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