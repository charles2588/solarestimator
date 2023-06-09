// It might make sense to put this in enum if the list would be static
export const battery_types = Object.freeze(
    [
        {
            "battery_type": "megapack2XL",
            "battery_name": "Megapack 2XL",
            "battery_url": "https://en.wikipedia.org/wiki/Tesla_Megapack#/media/File:Tesla_Gigafactory_1_-_December_2019.jpg",
            "floor_width": 40,
            "floor_height": 10,
            "energy": 4,
            "cost": 120000,
            "release_date": 2022,
        },
        {
            "battery_type": "megapack2",
            "battery_name": "Megapack 2",
            "floor_width": 30,
            "floor_height": 10,
            "energy": 2,
            "cost": 80000,
            "release_date": 2021,
        },
        {
            "battery_type": "megapack",
            "battery_name": "Megapack",
            "floor_width": 30,
            "floor_height": 10,
            "energy": 2,
            "cost": 50000,
            "release_date": 2005,
        },
        {
            "battery_type": "powerpack",
            "battery_name": "Powerpack",
            "floor_width": 10,
            "floor_height": 10,
            "energy": 1,
            "cost": 20000,
            "release_date": 2000,
        },
    ]);

export const transformer = Object.freeze(
    {
        "battery_type": "transformer",
        "battery_name": "Transformer",
        "floor_width": 10,
        "floor_height": 10,
        "energy": -0.25,
        "cost": 10000,
        "release_date": 0,
    });