module.exports.TeamScores = {
  "277": [
    {
      teamId: "277",
      chalId: 100,
      divId: "28",
      timestamp: 1522428038,
      abort: false,
      saved: true,
      scores: {
        "1": 30
      }
    },
    {
      teamId: "277",
      chalId: 101,
      divId: "28",
      timestamp: 1522428047,
      abort: false,
      saved: true,
      scores: {
        "1": 0,
        "2": 15,
        "3": 0,
        "4": 0
      }
    },
    {
      teamId: "277",
      chalId: 109,
      divId: "28",
      timestamp: 1522428052,
      abort: true,
      saved: true,
      elementCount: 2
    },
    {
      teamId: "277",
      chalId: 132,
      divId: "28",
      timestamp: 1522428057,
      abort: true,
      saved: true,
      elementCount: 6
    }
  ],
  "325": [
    {
      teamId: "325",
      chalId: 103,
      divId: "28",
      timestamp: 1522429020,
      abort: false,
      saved: true,
      scores: {
        "1": 25,
        "2": 20,
        "3": 0
      }
    },
    {
      teamId: "325",
      chalId: 107,
      divId: "28",
      timestamp: 1522432427,
      abort: false,
      saved: true,
      scores: {
        "1": 0,
        "2": 20,
        "3": 0
      }
    }
  ],
  "367": [
    {
      teamId: "367",
      chalId: 109,
      divId: "28",
      timestamp: 1522428998,
      abort: false,
      saved: true,
      scores: {
        "1": 20,
        "2": 0
      }
    },
    {
      teamId: "367",
      chalId: 103,
      divId: "28",
      timestamp: 1522429003,
      abort: false,
      saved: true,
      scores: {
        "1": 25,
        "2": 0,
        "3": 0
      }
    },
    {
      teamId: "367",
      chalId: 107,
      divId: "28",
      timestamp: 1522429009,
      abort: true,
      saved: true,
      elementCount: 3
    }
  ]
};

module.exports.ChallengeData = [
  {
    display_order: 1,
    id: 100,
    display_name: "Pythagorean's Coordinates",
    rules:
      "<strong>Set-Up</strong>\r\n<ul><li>1 Bot is placed at point M in the Evacuation Zone facing south</li></ul>\r\n<strong>Objective</strong>\r\n<ul><li>Students determine the location of the supplies</li><li>Students move the Bot to the correct location (solution given below)</li></ul>",
    points: 30,
    randoms: [],
    score_elements: [
      {
        id: 357,
        name: "1",
        display_text:
          "<h4>Bot stops within one block width of </br>the correct point.</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 30,
        min_entry: 0,
        max_entry: 30,
        type: "noyes",
        challenge_id: 100,
        score_map: []
      }
    ],
    random_lists: [
      {
        id: 9,
        name: "Random Numbers",
        format:
          '<b>a:</b> {d1}</br>\r\n<b>c:</b> {d2}\r\n</br>\r\n<p style=\r\n"color:red"><b>Solution:</b></br> {d3}</p>',
        popup_format: "<b>a:</b> {d1}</br>\r\n<b>c:</b> {d2}",
        d1_format: "%d",
        d2_format: "%d",
        d3_format: "%s",
        d4_format: "",
        d5_format: "",
        display_order: 1,
        challenge_id: 100,
        elements: [
          {
            id: 183,
            random_list_id: 9,
            d1: "15",
            d2: "18",
            d3: "Point R",
            d4: "",
            d5: ""
          },
          {
            id: 184,
            random_list_id: 9,
            d1: "5",
            d2: "16",
            d3: "Point Q",
            d4: "",
            d5: ""
          },
          {
            id: 185,
            random_list_id: 9,
            d1: "-5",
            d2: "11",
            d3: "Point N",
            d4: "",
            d5: ""
          },
          {
            id: 186,
            random_list_id: 9,
            d1: "-35",
            d2: "37",
            d3: "House W",
            d4: "",
            d5: ""
          },
          {
            id: 187,
            random_list_id: 9,
            d1: "-1",
            d2: "27",
            d3: "House Z",
            d4: "",
            d5: ""
          }
        ]
      }
    ]
  },
  {
    display_order: 2,
    id: 101,
    display_name: "Message for the Pentagon",
    rules:
      "<b>Set-Up</b><ul><li>Student places Spy Bot at point M (65, 34)</li><li>Student places Handler Bot at the intersection of G and 2nd Street.</li><li>Place a block on the intersection of H street and 2nd Street.</li></ul>\r\n<b>Objective</b><ul><li>Spy Bot moves towards Handler bot staying on roads.</li><li>Spy Bot taps Handler Bot gently.</li><li>Handler Bot goes to the Pentagon (Point L).</li></ul>",
    points: 35,
    randoms: [],
    score_elements: [
      {
        id: 358,
        name: "1",
        display_text: "<h4>Spy Bot touches Handler Bot then </br>stops</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 20,
        type: "noyes",
        challenge_id: 101,
        score_map: []
      },
      {
        id: 359,
        name: "2",
        display_text:
          "<h4>Handler Bot ends at the Pentagon </br>(Point L)</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 15,
        min_entry: 0,
        max_entry: 15,
        type: "noyes",
        challenge_id: 101,
        score_map: []
      },
      {
        id: 360,
        name: "3",
        display_text:
          '<h4 style="color:red"><strong>Penalty:</strong> Spy or Handler Bot touches </br>the block</h4>',
        element_number: 3,
        base_value: 0,
        multiplier: -15,
        min_entry: 0,
        max_entry: -15,
        type: "noyes",
        challenge_id: 101,
        score_map: []
      },
      {
        id: 361,
        name: "4",
        display_text:
          '<h4 style="color:red"><b>Penalty:</b> Either Bot does not stay on </br>a road at all times</h4>',
        element_number: 4,
        base_value: 0,
        multiplier: -25,
        min_entry: 0,
        max_entry: -25,
        type: "noyes",
        challenge_id: 101,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 3,
    id: 102,
    display_name: "Roundabout",
    rules:
      "<b>Set-Up</b><ul><li>Student places a Bot at the north end of E Street.</li></ul>\r\n<b>Objective</b><ul><li>Bot moves counterclockwise around the roundabout until 1st Street</li><li>Bot moves on 1st Street then stops at the south side of House W.</li><li>Bot stays on the road</li></ul>",
    points: 40,
    randoms: [],
    score_elements: [
      {
        id: 362,
        name: "1",
        display_text: "<h4>Bot reaches 1st Street</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 30,
        min_entry: 0,
        max_entry: 30,
        type: "noyes",
        challenge_id: 102,
        score_map: []
      },
      {
        id: 363,
        name: "2",
        display_text: "<h4>Bot stops at the south side of </br>House W.</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 10,
        min_entry: 0,
        max_entry: 10,
        type: "noyes",
        challenge_id: 102,
        score_map: []
      },
      {
        id: 364,
        name: "3",
        display_text:
          '<h4 style = "color:red"><b>Penalty:</b> Bot does not stay </br>on the roads.</h4>',
        element_number: 3,
        base_value: 0,
        multiplier: -30,
        min_entry: 0,
        max_entry: -30,
        type: "noyes",
        challenge_id: 102,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 4,
    id: 103,
    display_name: "Emergency Intercept",
    rules:
      "<b>Set-Up</b><ul><li>Student places Car Bot at Corner A</li><li>Student places Intercept Bot at House W</li><li>Student places a wooden block on the Blue Dot at (36,2)</li></ul>\r\n<b>Objective</b><ul><li>Car Bot moves directly east</li><li>Intercept Bot drives in front of Car Bot before Car Bot reaches the wooden block</li><li>Both Bots stop within one second of Intercept Bot driving in front of Car Bot</li><li>Bots must be no more than a block width apart when they stop.</li></ul>",
    points: 45,
    randoms: [],
    score_elements: [
      {
        id: 365,
        name: "1",
        display_text:
          "<h4>Both Bots stop within 1 second of </br>Intercept Bot driving in front of Car </br>Bot</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 25,
        min_entry: 0,
        max_entry: 25,
        type: "noyes",
        challenge_id: 103,
        score_map: []
      },
      {
        id: 366,
        name: "2",
        display_text:
          "<h4>Car Bot and Intercept Bot stop no </br>more than a block width apart</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 20,
        type: "noyes",
        challenge_id: 103,
        score_map: []
      },
      {
        id: 367,
        name: "3",
        display_text:
          '<h4 style = "color:red"><b>Penalty:</b> Either Bot touches the </br>wooden block</h4>',
        element_number: 3,
        base_value: 0,
        multiplier: -45,
        min_entry: 0,
        max_entry: -45,
        type: "noyes",
        challenge_id: 103,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 5,
    id: 104,
    display_name: "Search Party",
    rules:
      "<b>Set-Up</b><ul><li>Search Bot is placed at the northern end of F Street facing south</li><li>A student will give you Injured Bot. Place Injured Bot on F street at the y position generated by score board.  </li></ul>\r\n<b>Objective</b><ul><li>Search Bot moves south staying on the road until it touches Injured Bot</li><li>Search Bot stops immediately after touching Injured Bot</li></ul>\r\n\r\n",
    points: 50,
    randoms: [
      {
        id: 20,
        name: "Y Position on F Street",
        type: "single",
        format: "Y Position: %d",
        min1: 19,
        max1: 31,
        min2: 0,
        max2: 0,
        may_not_match: 0,
        display_order: 1,
        challenge_id: 104,
        created_at: "2017-05-19 14:30:32",
        updated_at: "2017-05-19 14:35:53"
      }
    ],
    score_elements: [
      {
        id: 368,
        name: "1",
        display_text: "<h4>Search Bot touches Injured Bot</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 15,
        min_entry: 0,
        max_entry: 15,
        type: "noyes",
        challenge_id: 104,
        score_map: []
      },
      {
        id: 369,
        name: "2",
        display_text:
          "<h4>Search Bot stops immediately </br>after touching Injured Bot</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 35,
        min_entry: 0,
        max_entry: 35,
        type: "noyes",
        challenge_id: 104,
        score_map: []
      },
      {
        id: 370,
        name: "3",
        display_text:
          '<h4 style="color:red"><b>Penalty:</b> Search Bot does not stay </br>on the road</h4>',
        element_number: 3,
        base_value: 0,
        multiplier: -30,
        min_entry: 0,
        max_entry: -30,
        type: "noyes",
        challenge_id: 104,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 6,
    id: 105,
    display_name: "Ambulance Selector",
    rules:
      "<b>Set-Up</b>\r\n<ul><li>A Bot is placed on House W</li></ul>\r\n<b>Objective</b><ul><li>Give students the 8 generated numbers</li><li>They navigate the Bot to the coordinate pair closest to the Bot (you will be given the solution location)</li>\r\n</ul>",
    points: 60,
    randoms: [],
    score_elements: [
      {
        id: 371,
        name: "1",
        display_text: "<h4>Bot starts moving</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 10,
        min_entry: 0,
        max_entry: 10,
        type: "noyes",
        challenge_id: 105,
        score_map: []
      },
      {
        id: 372,
        name: "2",
        display_text: "<h4>Bot stops at the correct coordinate </br>pair</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 50,
        min_entry: 0,
        max_entry: 50,
        type: "noyes",
        challenge_id: 105,
        score_map: []
      }
    ],
    random_lists: [
      {
        id: 11,
        name: "Random Numbers",
        format: "<b>Numbers:</b> </br>{d1}</br>\r\n<b>Solution:</b> </br>{d2}",
        popup_format: '<h2><font face = "Courier New">{d1}</font></h2>',
        d1_format: "%s",
        d2_format: "%s",
        d3_format: "",
        d4_format: "",
        d5_format: "",
        display_order: 1,
        challenge_id: 105,
        elements: [
          {
            id: 218,
            random_list_id: 11,
            d1: " 4 10  6 36 16 10 80 14",
            d2: "House Y",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 219,
            random_list_id: 11,
            d1: "60 24  4  4 48  4 42 34",
            d2: "House V",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 220,
            random_list_id: 11,
            d1: "72 12  6 16 60  6 60 40",
            d2: "House X",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 221,
            random_list_id: 11,
            d1: "16 10 60 10 14 36 70 12",
            d2: "House Y",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 222,
            random_list_id: 11,
            d1: "70 38  4  4 60  4 42 34",
            d2: "House V",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 223,
            random_list_id: 11,
            d1: "70 20  6 16 72 36 80 30",
            d2: "House X",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 224,
            random_list_id: 11,
            d1: "6  6 70 19 13 19 65 34",
            d2: "Point K",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 225,
            random_list_id: 11,
            d1: "65 34 60 24 80 24  2 40",
            d2: "Point N",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 226,
            random_list_id: 11,
            d1: "60 14 80 14 64  7 80 36",
            d2: "Point P",
            d3: "",
            d4: "",
            d5: ""
          },
          {
            id: 227,
            random_list_id: 11,
            d1: "65 34 64  7 13  4 77 33",
            d2: "Point J",
            d3: "",
            d4: "",
            d5: ""
          }
        ]
      }
    ]
  },
  {
    display_order: 7,
    id: 106,
    display_name: "Heartbeat",
    rules:
      "<b>Set-Up</b><ul><li>Student places a Bot anywhere</li></ul>\r\n<b>Objective</b><ul><li>Record the movement of the Bot and output a graph</li><li>Bot's movements are the blue line and should be between the green and red lines</li></ul>",
    points: 65,
    randoms: [],
    score_elements: [
      {
        id: 373,
        name: "1",
        display_text:
          "<h4>How many segments of the</br>blue line are between the </br>green and red lines?</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 5,
        min_entry: 0,
        max_entry: 9,
        type: "low_slider",
        challenge_id: 106,
        score_map: []
      },
      {
        id: 374,
        name: "2",
        display_text: '<h4>Graph Title is "Distance versus </br>Time"</h4>',
        element_number: 2,
        base_value: 0,
        multiplier: 10,
        min_entry: 0,
        max_entry: 10,
        type: "noyes",
        challenge_id: 106,
        score_map: []
      },
      {
        id: 375,
        name: "3",
        display_text:
          "<h4>Graph Axes are labeled correctly:<br/>\r\nx: time(seconds)<br/>\r\ny: distance(degrees)</h4>",
        element_number: 3,
        base_value: 0,
        multiplier: 10,
        min_entry: 0,
        max_entry: 10,
        type: "noyes",
        challenge_id: 106,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 8,
    id: 107,
    display_name: "Go Robobo 2",
    rules:
      "<b>Set-Up</b><ul><li>Bot Configuration with at least two Bots is placed on the intersection of 3rd and F Street. NO WHEELS OR CUBE CONNECTORS ARE ALLOWED</li><li>Place the wooden block on the Blue Dot at (42,31)</li></ul>\r\n<b>Objective</b><ul><li>The Bot Configuration moves the wooden block into the Evacuation Zone</li></ul>",
    points: 70,
    randoms: [],
    score_elements: [
      {
        id: 376,
        name: "1",
        display_text:
          "<h4>Bot Configuration with at least two </br>Bots and no wheels or cube </br>connectors moves</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 20,
        type: "noyes",
        challenge_id: 107,
        score_map: []
      },
      {
        id: 377,
        name: "2",
        display_text:
          "<h4>Bot Configuration touches the </br>wooden block</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 20,
        type: "noyes",
        challenge_id: 107,
        score_map: []
      },
      {
        id: 378,
        name: "3",
        display_text:
          "<h4>Wooden block ends completely </br>within the Evacuation Zone</h4>",
        element_number: 3,
        base_value: 0,
        multiplier: 30,
        min_entry: 0,
        max_entry: 30,
        type: "noyes",
        challenge_id: 107,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 9,
    id: 108,
    display_name: "Supply Transfer",
    rules:
      "<b>Set-Up</b><ul><li>Stack two wooden blocks on House W then place a hacky sack on top of the blocks</li><li>Place Bot(s)/Configuration(s) anywhere on the map not touching the hacky sack</li></ul>\r\n<b>Objective</b><ul><li>Get the hacky sack off the blocks at House W and into the Evacuation Zone without moving or knocking over the blocks.</li></ul>",
    points: 80,
    randoms: [],
    score_elements: [
      {
        id: 379,
        name: "1",
        display_text: "<h4>Bot(s) remove(s) hacky sack from </br>blocks</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 30,
        min_entry: 0,
        max_entry: 30,
        type: "noyes",
        challenge_id: 108,
        score_map: []
      },
      {
        id: 380,
        name: "2",
        display_text:
          "<h4>Entire hacky sack finishes inside </br>the Evacuation Zone</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 50,
        min_entry: 0,
        max_entry: 50,
        type: "noyes",
        challenge_id: 108,
        score_map: []
      },
      {
        id: 381,
        name: "3",
        display_text:
          '<h4 style="color:red"><b>Penalty:</b> Blocks move or are </br>knocked over</h4>',
        element_number: 3,
        base_value: 0,
        multiplier: -80,
        min_entry: 0,
        max_entry: -80,
        type: "noyes",
        challenge_id: 108,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 10,
    id: 109,
    display_name: "Helpful Friend",
    rules:
      '<b>Set-Up</b><ul><li>Student places one Bot on any point in {K, L, M, N, P, Q, R, S} facing any direction</li><li>One wheel has a 3.5-inch diameter and the other wheel has a 4-inch diameter</li></ul>\r\n<b>Objective</b><ul><li>Bot needs to "visit" four of the six houses T, V, W, X, Y, or Z</li><li>Definition: "Visit"--any time a Bot is near the house and pauses for at least 3 seconds.</li><li>The Bot must end at the point it started on</li></ul>\r\n',
    points: 100,
    randoms: [],
    score_elements: [
      {
        id: 382,
        name: "1",
        display_text: "<h4>How many houses did the Bot</br> visit?</h4>",
        element_number: 1,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 4,
        type: "low_slider",
        challenge_id: 109,
        score_map: []
      },
      {
        id: 383,
        name: "2",
        display_text:
          "<h4>Bot ends at the point it started </br>at after attempting to </br>visit at least one house.</h4>",
        element_number: 2,
        base_value: 0,
        multiplier: 20,
        min_entry: 0,
        max_entry: 20,
        type: "noyes",
        challenge_id: 109,
        score_map: []
      }
    ],
    random_lists: []
  },
  {
    display_order: 11,
    id: 132,
    display_name: "Test Challenge",
    rules: "This is a test",
    points: 100,
    randoms: [
      {
        id: 23,
        name: "May not Match Test",
        type: "dual",
        format: "A: %d  B:  %d",
        min1: 1,
        max1: 6,
        min2: 1,
        max2: 6,
        may_not_match: 1,
        display_order: 1,
        challenge_id: 132,
        created_at: "2018-03-17 02:06:06",
        updated_at: "2018-03-17 02:06:06"
      }
    ],
    score_elements: [
      {
        id: 463,
        name: "NoYes Test",
        display_text: "NoYes Test, Multi = 5, Base = 7",
        element_number: 1,
        base_value: 7,
        multiplier: 5,
        min_entry: 7,
        max_entry: 13,
        type: "noyes",
        challenge_id: 132,
        score_map: []
      },
      {
        id: 464,
        name: "YesNo Tesst",
        display_text: "Yes/No Test - Multi = 10, Base = 4",
        element_number: 2,
        base_value: 4,
        multiplier: 10,
        min_entry: 4,
        max_entry: 14,
        type: "noyes",
        challenge_id: 132,
        score_map: []
      },
      {
        id: 465,
        name: "Slider",
        display_text: "Low->High Slider <br> Multi = 2 Base = 0, Min 0, Max 10",
        element_number: 3,
        base_value: 0,
        multiplier: 2,
        min_entry: 0,
        max_entry: 10,
        type: "low_slider",
        challenge_id: 132,
        score_map: []
      },
      {
        id: 466,
        name: "Slider 2",
        display_text:
          "High->Low Slider <br>\r\nMulti = 5, Base = 0, Min 0, Max 50",
        element_number: 4,
        base_value: 0,
        multiplier: 5,
        min_entry: 0,
        max_entry: 50,
        type: "high_slider",
        challenge_id: 132,
        score_map: []
      },
      {
        id: 467,
        name: "Score Slider",
        display_text:
          "Score Slider <br>\r\nMulti = 10, base = 0, min 0, max 70",
        element_number: 5,
        base_value: 0,
        multiplier: 10,
        min_entry: 0,
        max_entry: 70,
        type: "score_slider",
        challenge_id: 132,
        score_map: []
      },
      {
        id: 468,
        name: "Score Map Test",
        display_text: "Score Map Test",
        element_number: 6,
        base_value: 0,
        multiplier: 1,
        min_entry: 0,
        max_entry: 10,
        type: "low_slider",
        challenge_id: 132,
        score_map: [
          {
            i: -5,
            v: -10
          },
          {
            i: 0,
            v: 0
          },
          {
            i: 5,
            v: 10
          }
        ]
      }
    ],
    random_lists: []
  }
];

module.exports.TeamScoresMulti = {
  "277": [
    {
      teamId: "277",
      chalId: 100,
      divId: "28",
      timestamp: 1523424212,
      abort: false,
      saved: true,
      scores: {
        "1": 30
      }
    },
    {
      teamId: "277",
      chalId: 100,
      divId: "28",
      timestamp: 1523424216,
      abort: false,
      saved: true,
      scores: {
        "1": 0
      }
    },
    {
      teamId: "277",
      chalId: 101,
      divId: "28",
      timestamp: 1523424221,
      abort: false,
      saved: true,
      scores: {
        "1": 20,
        "2": 0,
        "3": 0,
        "4": 0
      }
    },
    {
      teamId: "277",
      chalId: 101,
      divId: "28",
      timestamp: 1523424227,
      abort: false,
      saved: true,
      scores: {
        "1": 20,
        "2": 15,
        "3": 0,
        "4": 0
      }
    },
    {
      teamId: "277",
      chalId: 101,
      divId: "28",
      timestamp: 1523424234,
      abort: true,
      saved: true,
      elementCount: 4
    },
    {
      teamId: "277",
      chalId: 102,
      divId: "28",
      timestamp: 1523424243,
      abort: true,
      saved: true,
      elementCount: 3
    },
    {
      teamId: "277",
      chalId: 103,
      divId: "28",
      timestamp: 1523424247,
      abort: true,
      saved: true,
      elementCount: 3
    },
    {
      teamId: "277",
      chalId: 103,
      divId: "28",
      timestamp: 1523424252,
      abort: false,
      saved: true,
      scores: {
        "1": 25,
        "2": 0,
        "3": 0
      }
    },
    {
      teamId: "277",
      chalId: 103,
      divId: "28",
      timestamp: 1523424258,
      abort: false,
      saved: true,
      scores: {
        "1": 25,
        "2": 20,
        "3": 0
      }
    },
    {
      teamId: "277",
      chalId: 104,
      divId: "28",
      timestamp: 1523424265,
      abort: false,
      saved: true,
      scores: {
        "1": 15,
        "2": 0,
        "3": 0
      }
    },
    {
      teamId: "277",
      chalId: 105,
      divId: "28",
      timestamp: 1523424269,
      abort: true,
      saved: true,
      elementCount: 2
    },
    {
      teamId: "277",
      chalId: 105,
      divId: "28",
      timestamp: 1523424275,
      abort: false,
      saved: true,
      scores: {
        "1": 10,
        "2": 0
      }
    },
    {
      teamId: "277",
      chalId: 105,
      divId: "28",
      timestamp: 1523424279,
      abort: true,
      saved: true,
      elementCount: 2
    },
    {
      teamId: "277",
      chalId: 105,
      divId: "28",
      timestamp: 1523424287,
      abort: false,
      saved: true,
      scores: {
        "1": 10,
        "2": 50
      }
    }
  ]
};
