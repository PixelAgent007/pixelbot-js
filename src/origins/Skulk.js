// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Arctic Seal",
    player: "_Skulk",
    impact: 3,
    description: "This race used to have a grand underwater civilization. Unfourtunatly when it was attacked, these seals didn't have the combat prowess to defend it. Now they are scattered far and wide, their civilization mostly forgotten.",
    author: "KitCat#0962",
    src: "https://github.com/dark-moon-smp/arctic-seal-origin",
    actives: [],
    pros: [
        new Power({
            "name": "Chonky",
            "description": "You have an extra 10 hearts."
        }),
        new Power({
            "name": "Beefy Lungs",
            "description" : "You can hold your breath for a ridiculously long time, but it is not forever."
        }),
        new Power({
            "name": "Aqua Eyes",
            "description" : "You have perfect underwater vision."
        })
    ],
    passives: [
        new Power({
            "name": "Legs of Neptune",
            "description" : "Using your legs, you are immensely fast in water, but they aren't very useful on land. You can't move very fast on land."
        }),
        new Power({
            "name": "Smol Chonk",
            "description" : "You are one block, both in height and in width."
        }),
        new Power({
            "name": "Picky eater",
            "description" : "While you can only eat fish, you can digest them more efficiently."
        }),
        new Power({
            "name": "Blubber",
            "description" : "You are too chonky for armor to fit on you. You can still wear a helmet though."
        })
	],
    cons: [
        new Power({
            "name": "Heat Sink",
            "description" : "You rapidly overheat in hot climates, taking damage over time."
        }),
        new Power({
            "name": "Highly Flammable",
            "description" : "Did you know that blubber is highly flammable? You take double fire damage."
        }),
        new Power({
            "name": "Flippers",
            "description" : "Your hands are largely useless. You cannot use bows, crossbows, shields, and all projectiles excluding tridents, and all damage you deal is only half as effective."
        })
    ]
});