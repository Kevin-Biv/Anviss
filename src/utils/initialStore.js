/* sample data store*/

const values = {
    reminders: [
        {
            name: "Wash the sink",
            media: "sink.jpg"
        }
    ],
    buildings: [
        {
            name: "66",
            reminders: [
                {
                    name: "Wash the sink",
                    media: "sink.jpg"
                }
            ],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "20x20x2",
                    quantity: "66",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2020-12-27T00:00:00",
                    ndos: "2021-02-27T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-10T00:00:00",
                    ndos: "2021-08-10T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-04-19T00:00:00",
                    ndos: "2021-07-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-01-22T00:00:00",
                    ndos: "2021-04-22T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-03-19T00:00:00",
                    ndos: "2021-06-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-01-19T00:00:00",
                    ndos: "2021-04-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2020-11-10T00:00:00",
                    ndos: "2021-02-10T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "90 St. Thomas More",
            reminders: [],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "10x10x2",
                    quantity: "90",
                    ldos: "2021-02-19T00:00:00",
                    ndos: "2021-05-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-02-19T00:00:00",
                    ndos: "2021-05-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-01-09T00:00:00",
                    ndos: "2021-04-09T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-03-19T00:00:00",
                    ndos: "2021-06-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-01-29T00:00:00",
                    ndos: "2021-04-29T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-02-05T00:00:00",
                    ndos: "2021-05-05T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-05-13T00:00:00",
                    ndos: "2021-08-13T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-04-28T00:00:00",
                    ndos: "2021-07-28T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "2150",
            reminders: [],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "30x30x2",
                    quantity: "21",
                    ldos: "2021-09-18T00:00:00",
                    ndos: "2021-12-18T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-01-14T00:00:00",
                    ndos: "2021-04-14T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-01-19T00:00:00",
                    ndos: "2021-04-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-10T00:00:00",
                    ndos: "2021-08-10T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-04-19T00:00:00",
                    ndos: "2021-07-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-03-13T00:00:00",
                    ndos: "2021-06-13T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-04-20T00:00:00",
                    ndos: "2021-07-20T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-05-05T00:00:00",
                    ndos: "2021-08-05T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "Gasson",
            reminders: [],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "40x40x2",
                    quantity: "45",
                    ldos: "2021-03-19T00:00:00",
                    ndos: "2021-06-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-04-19T00:00:00",
                    ndos: "2021-07-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-01-25T00:00:00",
                    ndos: "2021-04-25T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2020-12-18T00:00:00",
                    ndos: "2021-03-18T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-02-04T00:00:00",
                    ndos: "2021-05-04T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-04-12T00:00:00",
                    ndos: "2021-07-12T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-02-05T00:00:00",
                    ndos: "2021-05-05T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-05-10T00:00:00",
                    ndos: "2021-08-10T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-01-25T00:00:00",
                    ndos: "2021-04-25T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-03-20T00:00:00",
                    ndos: "2021-06-20T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "Higgins",
            reminders: [],
            data: [
                {
                    name: "A-H # (1)Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-09-19T00:00:00",
                    ndos: "2021-12-19T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # ( 2)Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-02-01T00:00:00",
                    ndos: "2021-05-01T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # (3) Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # (4) Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2020-11-06T00:00:00",
                    ndos: "2021-02-06T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-05-09T00:00:00",
                    ndos: "2021-08-09T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-07-07T00:00:00",
                    ndos: "2021-10-07T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-03-29T00:00:00",
                    ndos: "2021-06-29T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-02-30T00:00:00",
                    ndos: "2021-05-30T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-02-08T00:00:00",
                    ndos: "2021-05-08T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-04-04T00:00:00",
                    ndos: "2021-07-04T00:00:00",
                    notes: ""
                },
                {
                    name: "Cold Box ",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-09-18T00:00:00",
                    ndos: "2021-12-18T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "Maloney",
            reminders: [],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "50x50x2",
                    quantity: "17",
                    ldos: "2021-09-23T00:00:00",
                    ndos: "2021-12-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-09-23T00:00:00",
                    ndos: "2021-12-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-09-23T00:00:00",
                    ndos: "2021-12-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-09-23T00:00:00",
                    ndos: "2021-12-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-01-24T00:00:00",
                    ndos: "2021-04-24T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-03-29T00:00:00",
                    ndos: "2021-06-29T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2020-12-16T00:00:00",
                    ndos: "2021-03-16T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-04-28T00:00:00",
                    ndos: "2021-07-28T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-03-01T00:00:00",
                    ndos: "2021-06-01T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-04-19T00:00:00",
                    ndos: "2021-07-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Fan coil Unit",
                    location: "",
                    size: "1-7X32X1",
                    quantity: "1",
                    ldos: "2021-09-23T00:00:00",
                    ndos: "2021-12-23T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "Walsh",
            reminders: [],
            data: [
                {
                    name: "Filter Replacement",
                    location: "",
                    size: "60x60x2",
                    quantity: "8",
                    ldos: "2021-05-19T00:00:00",
                    ndos: "2021-08-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Belt Replacement",
                    location: "",
                    size: "Bx56",
                    quantity: "2",
                    ldos: "2021-03-19T00:00:00",
                    ndos: "2021-06-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor/Bearings",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-01-20T00:00:00",
                    ndos: "2021-04-20T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Cooling/Heating Coils",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-02-07T00:00:00",
                    ndos: "2021-05-07T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Drain Pan/Drain Lines",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2020-12-26T00:00:00",
                    ndos: "2021-03-26T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "100x1",
                    quantity: "4",
                    ldos: "2021-03-12T00:00:00",
                    ndos: "2021-06-12T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating/Cooling Valves",
                    location: "",
                    size: "50x2",
                    quantity: "45",
                    ldos: "2021-05-04T00:00:00",
                    ndos: "2021-08-04T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "9x3",
                    quantity: "20",
                    ldos: "2021-01-19T00:00:00",
                    ndos: "2021-04-19T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "90x5",
                    quantity: "45",
                    ldos: "2021-02-18T00:00:00",
                    ndos: "2021-05-18T00:00:00",
                    notes: ""
                },
                {
                    name: "Electric Connections",
                    location: "",
                    size: "75x5x5",
                    quantity: "5",
                    ldos: "2021-04-10T00:00:00",
                    ndos: "2021-07-10T00:00:00",
                    notes: ""
                }
            ]
        },
        {
            name: "Merkert",
            reminders: [
                {
                    name: "Wash the sink",
                    media: "sink.jpg"
                }
            ],
            data: [
                {
                    name: "A-H # 1 Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 2 Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 3 Filter Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 4 Filters Replacement",
                    location: "",
                    size: "24x24x2",
                    quantity: "40",
                    ldos: "2021-04-10T00:00:00",
                    ndos: "2021-06-10T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 1 Belts Replacement",
                    location: "",
                    size: "BX-60",
                    quantity: "4",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 2 Belts Replacement",
                    location: "",
                    size: "BX-60",
                    quantity: "4",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 3 Belt Replacement",
                    location: "",
                    size: "BX-60",
                    quantity: "4",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "A-H # 4 Belt Replacement",
                    location: "",
                    size: "BX-60",
                    quantity: "4",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-06-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Blower Assembly Service",
                    location: "",
                    size: "-",
                    quantity: "1",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Handler Console Service",
                    location: "",
                    size: "-",
                    quantity: "1",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Lubricate Motor & Bearings",
                    location: "",
                    size: "-",
                    quantity: "2+4",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean DraiPan & Drain Line",
                    location: "",
                    size: "-",
                    quantity: "1",
                    ldos: "2021-06-29T00:00:00",
                    ndos: "2021-09-29T00:00:00",
                    notes: ""
                },
                {
                    name: "Clean Coils",
                    location: "",
                    size: "-",
                    quantity: "2",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Flush Coils",
                    location: "",
                    size: "-",
                    quantity: "2",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-06-29T00:00:00",
                    notes: ""
                },
                {
                    name: "Heating & Cooling Valves",
                    location: "",
                    size: "-",
                    quantity: "4",
                    ldos: "2021-09-22T00:00:00",
                    ndos: "2021-12-22T00:00:00",
                    notes: ""
                },
                {
                    name: "Exhaust Hood",
                    location: "",
                    size: "#16",
                    quantity: "2-L36",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Exhaust  Hood",
                    location: "",
                    size: "#17",
                    quantity: "2-L26",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Air Compressor",
                    location: "",
                    size: "#1",
                    quantity: "2-BX92",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "process Chiller",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-07-07T00:00:00",
                    ndos: "2021-10-07T00:00:00",
                    notes: ""
                },
                {
                    name: "Liebert Unit",
                    location: "",
                    size: "4-24x24x4",
                    quantity: "2-BX72",
                    ldos: "2021-06-23T00:00:00",
                    ndos: "2021-09-23T00:00:00",
                    notes: ""
                },
                {
                    name: "Cold Box # 1",
                    location: "",
                    size: "-",
                    quantity: "=",
                    ldos: "2021-07-07T00:00:00",
                    ndos: "2021-10-07T00:00:00",
                    notes: ""
                },
                {
                    name: "Cold Box # 2",
                    location: "",
                    size: "-",
                    quantity: "-",
                    ldos: "2021-08-02T00:00:00",
                    ndos: "2021-11-02T00:00:00",
                    notes: ""
                }
            ]
        }
    ],
    users: [
        {
            username: "Matt",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
        }
    ],
    headers: ["Item", "Tasks", "Location", "Size", "Quantity", "Last Date Serviced", "Recommended Next Service", "Notes", "Status"],
}
export default values;