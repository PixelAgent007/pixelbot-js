// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Royal Bee",
    player: "GoldFish5",
    impact: 3,
    description: "A rare mutation of the honey bee. This bee can, and will kill you if you so much as look at it funny, not unlike the common wasp.",
    author: "KitCat#0962",
    src: "https://github.com/dark-moon-smp/royal-bee-origin",
    actives: [
        new Power({
            "name": "NOT THE BEES",
            "description" : "Summon 3 aggressive bees with your primary. They will disappear after 1 minute."
        }),
        new Power({
            "name": "Final Sting",
            "description" : "Kill yourself to deal massive damage to your foes! Or just for fun I guess."
        })
	],
    pros: [
        new Power({
            "name": "Float Flight",
            "description": "You are always floating. Hold jump to rise and sneak to fall."
        })
    ],
    passives: [
        new Power({
            "name": "Pollen Diet",
            "description" : "You can't eat normal food. Instead, you gain food from surrounding flowers."
        }),
        new Power({
            "name": "Microscopic",
            "description" : "You are a quater of a block in size."
        })
	],
    cons: [
        new Power({
            "name": "Puny",
            "description" : "You only have 3 hearts."
        }),
        new Power({
            "name": "Highly Flammable",
            "description" : "Did you know that bees are highly flammable? You take double fire damage."
        }),
        new Power({
            "name": "Water Weight",
            "description" : "Some of your abilities will be disabled if you get too wet."
        }),
        new Power({
            "name": "Absorbant",
            "description" : "While wet, you are slow."
        })
    ]
});