// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Ralsei",
    player: "Lofees0v",
    impact: 3,
    description: "Welcome. I am the Prince of this Kingdom... The KINGDOM OF DARKNESS. Ralsei is a young prince looking to fulfill an ancient prophecy. They believe there's a peaceful way to solve every problem.",
    author: "Lofees0v",
    src: "https://github.com/Lofees0v/Ralsei",
    actives: [],
    pros: [
        new Power({
            "name": "Tension Points",
            "description": "You get a passive xp gain, which caps out at 30"
        }),
        new Power({
            "name": "Heal Prayer",
            "description" : "For 5 xp levels, you can heal everyone around you, friend or foe, by pressing your primary"
        }),
	new Power({
            "name": "Fluffy guard",
            "description" : "For 5 xp levels, you can give resistance 1 to everyone around you, friend or foe, by pressing your secondary"
        })
    ],
    passives: [
	new Power({
            "name": "Fluffy",
            "description" : "Whoever hits you regains hp since you are too fluffy. It can come in handy or play against you"
        })
	],
    cons: [
	new Power({
            "name": "Pacifist",
            "description": "You could hardly stand the thought of hurting a possible friend, causing you to loose xp if you ever do."
        }),
	new Power({
            "name": "Karma",
            "description": "If you have zero xp, you die"
        }),
	new Power({
            "name": "Young",
            "description": "You have 2 less hearts"
        })
    ]
});
