var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"割草事件": [
			{
				"type": "if",
				"condition": "(flag:gcjgdj===10)",
				"_collapsed": true,
				"true": [
					{
						"type": "sleep",
						"time": 50,
						"noSkip": true
					},
					{
						"type": "setBlock",
						"number": "greenSlime",
						"loc": [
							[
								6,
								5
							]
						]
					}
				],
				"false": [
					{
						"type": "if",
						"condition": "(flag:gcjgdj===9)",
						"true": [
							{
								"type": "sleep",
								"time": 75,
								"noSkip": true
							},
							{
								"type": "setBlock",
								"number": "greenSlime",
								"loc": [
									[
										6,
										5
									]
								]
							}
						],
						"false": [
							{
								"type": "if",
								"condition": "(flag:gcjgdj===8)",
								"true": [
									{
										"type": "sleep",
										"time": 100,
										"noSkip": true
									},
									{
										"type": "setBlock",
										"number": "greenSlime",
										"loc": [
											[
												6,
												5
											]
										]
									}
								],
								"false": [
									{
										"type": "if",
										"condition": "(flag:gcjgdj===7)",
										"true": [
											{
												"type": "sleep",
												"time": 125,
												"noSkip": true
											},
											{
												"type": "setBlock",
												"number": "greenSlime",
												"loc": [
													[
														6,
														5
													]
												]
											}
										],
										"false": [
											{
												"type": "if",
												"condition": "(flag:gcjgdj===6)",
												"true": [
													{
														"type": "sleep",
														"time": 150,
														"noSkip": true
													},
													{
														"type": "setBlock",
														"number": "greenSlime",
														"loc": [
															[
																6,
																5
															]
														]
													}
												],
												"false": [
													{
														"type": "if",
														"condition": "(flag:gcjgdj===5)",
														"true": [
															{
																"type": "sleep",
																"time": 175,
																"noSkip": true
															},
															{
																"type": "setBlock",
																"number": "greenSlime",
																"loc": [
																	[
																		6,
																		5
																	]
																]
															}
														],
														"false": [
															{
																"type": "if",
																"condition": "(flag:gcjgdj===4)",
																"true": [
																	{
																		"type": "sleep",
																		"time": 200,
																		"noSkip": true
																	},
																	{
																		"type": "setBlock",
																		"number": "greenSlime",
																		"loc": [
																			[
																				6,
																				5
																			]
																		]
																	}
																],
																"false": [
																	{
																		"type": "if",
																		"condition": "(flag:gcjgdj===3)",
																		"true": [
																			{
																				"type": "sleep",
																				"time": 400,
																				"noSkip": true
																			},
																			{
																				"type": "setBlock",
																				"number": "greenSlime",
																				"loc": [
																					[
																						6,
																						5
																					]
																				]
																			}
																		],
																		"false": [
																			{
																				"type": "if",
																				"condition": "(flag:gcjgdj===2)",
																				"true": [
																					{
																						"type": "sleep",
																						"time": 600,
																						"noSkip": true
																					},
																					{
																						"type": "setBlock",
																						"number": "greenSlime",
																						"loc": [
																							[
																								6,
																								5
																							]
																						]
																					}
																				],
																				"false": [
																					{
																						"type": "if",
																						"condition": "(flag:gcjgdj===1)",
																						"true": [
																							{
																								"type": "sleep",
																								"time": 800,
																								"noSkip": true
																							},
																							{
																								"type": "setBlock",
																								"number": "greenSlime",
																								"loc": [
																									[
																										6,
																										5
																									]
																								]
																							}
																						],
																						"false": [
																							{
																								"type": "sleep",
																								"time": 1000,
																								"noSkip": true
																							},
																							{
																								"type": "setBlock",
																								"number": "greenSlime",
																								"loc": [
																									[
																										6,
																										5
																									]
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "while",
				"condition": "(status:exp<=0)",
				"_collapsed": true,
				"data": [
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "status:exp",
						"operator": "+=",
						"value": "(Math.floor(((Math.pow(10,(Math.pow(status:hp,flag:lvzs))))/5)))"
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:jd>=2)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:jcjy",
						"operator": "-=",
						"value": "flag:zjczy"
					},
					{
						"type": "while",
						"condition": "(flag:jcjy<=0)",
						"data": [
							{
								"type": "setValue",
								"name": "flag:jc",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:jcjy",
								"operator": "+=",
								"value": "(Math.floor(((Math.pow(10,(Math.pow(flag:jc,flag:jczs)))))))"
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:jd>=1)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:bj",
						"value": "core.rand(100)"
					},
					{
						"type": "if",
						"condition": "(flag:bj<=1)",
						"true": [
							{
								"type": "setValue",
								"name": "status:mana",
								"operator": "+=",
								"value": "(Math.max(flag:zbjzy,1))"
							}
						]
					}
				]
			}
		],
		"声望重置": [
			{
				"type": "if",
				"condition": "(flag:blgcjg===0)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:gcjg",
						"value": "1000"
					},
					{
						"type": "setValue",
						"name": "flag:gcjgdj",
						"value": "0"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:gu1c",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:gu2c",
				"value": "5"
			},
			{
				"type": "setValue",
				"name": "flag:gu3c",
				"value": "5"
			},
			{
				"type": "setValue",
				"name": "flag:gu4c",
				"value": "100"
			},
			{
				"type": "setValue",
				"name": "flag:gczy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:gjyzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:gcfw",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:exp",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "status:money",
				"value": "0"
			}
		],
		"水晶重置": [
			{
				"type": "setValue",
				"name": "status:def",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:pu1c",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pu2c",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pu3c",
				"value": "3"
			},
			{
				"type": "setValue",
				"name": "flag:pu4c",
				"value": "100"
			},
			{
				"type": "setValue",
				"name": "flag:pu5c",
				"value": "1000"
			},
			{
				"type": "setValue",
				"name": "flag:gu5c",
				"value": "1e+10"
			},
			{
				"type": "setValue",
				"name": "flag:pczy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pjyzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:ppzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pbjzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pjczy",
				"value": "1"
			},
			{
				"type": "insert",
				"name": "声望重置"
			}
		]
	}
}