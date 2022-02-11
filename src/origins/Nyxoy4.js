// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Fallen Goddess Nyx",
    player: "Nyxoy4",
    impact: 2,
    description: "Nyx used to be the Goddess of the Night. Now stripped of her powers, she wanders a mortal plane once thought to be lost.",
    author: "KitCat#0962",
    src: "https://github.com/dark-moon-smp/fallen-gods-origins",
    actives: [
        new Power({
            "name": "Spell of Blindness",
            "description" : "With your primary key, aflict the entity in your sights with blindness."
        })
	],
    pros: [
        new Power({
            "name": "Remnant Strength",
            "description": "A bit of your Godly strength still remains, but only while in your element."
        }),
        new Power({
            "name": "Adapted Eyes",
            "description" : "Your natural home is in a cave. As a result, your eyes have adapted to low light levels."
        }),
        new Power({
            "name": "Cave Food",
            "description" : "You gain more from food found in caves than others."
        })
    ],
    passives: [
        new Power({
            "name": "Thin Presence",
            "description" : "You had a thin presence in Godhood and an even thinner presence without it. You appear translucent to others."
        })
	],
    cons: [
        new Power({
            "name": "Sensitive Skin",
            "description" : "In Godhood, light was your elemental opposite. Turns out, nothing changed. You burn in direct sunlight."
        }),
        new Power({
            "name": "Elemental Opposite",
            "description" : "Grow weak for some time after touching direct sunlight."
        })
    ]
});