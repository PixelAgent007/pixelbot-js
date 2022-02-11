// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Cat",
    player: "KitCat962",
    impact: 2,
    description: "A decendant of the common housecat. Cats can be found using their natural abilities to squeeze into small, hard to reach places.",
    author: "KitCat#0962",
    src: "https://github.com/dark-moon-smp/cat-origin",
    actives: [],
    pros: [
        new Power({
            "name": "Agile",
            "description": "You have a wide variety of mevement options including a wall jump."
        }),
        new Power({
            "name": "Crawl",
            "description" : "You can crawl on the ground at the press of a button (while sprinting)"
        }),
        new Power({
            "name": "Quick Attack",
            "description" : "You attack 30% faster."
        }),
        new Power({
            "name": "Quickfooted",
            "description" : "You are naturally faster than others."
        }),
        new Power({
            "name": "Nimble",
            "description" : "You are immune to velocity based damage."
        }),
        new Power({
            "name": "Dark Sight",
            "description" : "Your eyes allow you to see in the dark."
        }),
        new Power({
            "name": "Catlike Appearance",
            "description" : "Creepers are scared of you and will only explode if you attack them first."
        })
    ],
    passives: [
        new Power({
            "name": "Pint Sized",
            "description" : "You are smaller than others, merely 1 block tall."
        }),
        new Power({
            "name": "Fishy Palate",
            "description" : "You are able to get more out of raw fish than others would."
        }),
        new Power({
            "name": "Pickup",
            "description" : "You can ride other players by right clicking them."
        })
	],
    cons: [
        new Power({
            "name": "Fragile",
            "description" : "You can't take too much of a beating. You only have 5 hearts."
        }),
        new Power({
            "name": "Lightweight",
            "description" : "You take more knockback than usual."
        }),
        new Power({
            "name": "Physically Weak",
            "description" : "You deal 40% less damage."
        }),
        new Power({
            "name": "Fast Metabolism",
            "description" : "Your body burns through food faster than others."
        }),
        new Power({
            "name": "Weak Grip",
            "description" : "You are unable to hold a shield up properly"
        }),
        new Power({
            "name": "Hydrophobia",
            "description" : "You fear water for no apperent reason. If it ever touches you, your visoin starts to distort."
        })
    ]
});