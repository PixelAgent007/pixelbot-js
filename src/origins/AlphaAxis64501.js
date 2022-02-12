// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Sporeling",
    player: "AlphaAxis64501",
    impact: 2,
    description: "You are a species of spores and mushrooms formed together, seemingly harmless but extremley deadly that can kill in an instant.",
    author: "KawatOwO#3016",
    src: "https://github.com/dark-moon-smp/Sporeling-Origin",
    actives: [
        new Power({
            "name": "Sporification",
            "description": "You can spread your spores, becoming a phaseable fungus which can go through plant based things. If anyone steps on you in this form, they'll get poisoned."
        }),
        new Power({
            "name": "Spore Bomb",
            "description": "You are able to combust into bunches of poisionous spores, poisioning anyone in a nearby radius."
        }),
        new Power({
            "name": "Climbing",
            "description": "You can climb and are immune to fall damage if in your spore form."
        }),
        new Power({
            "name": "Shrink",
            "description": "You are one with the mushrooms, therefore you know how to look like them."
        }),
        new Power({
            "name": "Shroom cap",
            "description": "You know the ways of your kind, and are able to only wear mushrooms and fungi, this means you cannot wear normal helms."
        })
    ],
    pros: [
        new Power({
            "name": "Rich Soil",
            "description": "Standing in the correct soil with the correct fungus in your head will give you some benefits."
        }),
        new Power({
            "name": "Thriving night",
            "description" : "At night, you feel the empowerment of the mushrooms within you. In dark areas you gain dark vision."
        }),
        new Power({
            "name": "Shroom food",
            "description" : "Mushroom and fungus food is much more delicious. Nether salad doesn't give you nausea."
        })
    ],
    passives: [
        new Power({
            "name": "Color Change",
            "description" : "Your appearance changes with the mushroom you're wearing."
        })
	],
    cons: [
        new Power({
            "name": "Shroom-like",
            "description" : "Your kind arent very fond of axes as they break through you quickly. You also hate feeling burnt."
        }),
        new Power({
            "name": "Sun weakness",
            "description" : "During the day your power dries up, unless standing on the correct soil."
        }),
        new Power({
            "name": "Delicate",
            "description" : "You body is very lightweight, so you can just about only wear up to iron armor."
        }),
        new Power({
            "name": "Effect absorption",
            "description" : "Your spores think that withering and poison effects are from you, so you keep accidentally absorbing them, making them last longer."
        })
    ]
});