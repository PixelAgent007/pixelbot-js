// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Old King",
    player: "Isengard",
    impact: 1,
    description: "An exiled King from a kingdom far away has wandered to this realm. Will he be content with what he has now or will he rise to create a kingdom far greater than the previous?",
    author: "KitCat#0962",
    src: "https://github.com/dark-moon-smp/old-king-origin",
    actives: [
        new Power({
            "name": "Body Guard",
            "description" : "Summon an Iron Golem as a body guard to protect you. Hold shift while summoning to target players. They will disapear after 1 minute. Cooldown 5 minutes."
        })
	],
    pros: [
        new Power({
            "name": "Battle Hardened",
            "description": "Through years of wars, the king has become battle hardened. +2 Hearts."
        }),
        new Power({
            "name": "Melee Expertise",
            "description" : "You are an expert at weilding a sword, capable of dealing more damage with it."
        })
    ],
    passives: [
        new Power({
            "name": "King's Crown",
            "description" : "You spawn in with an unbreakable golden helmet. You can only wear golden helmets."
        })
	],
    cons: [
        new Power({
            "name": "Archery Dunce",
            "description" : "Archery was never your forte. You cannot weild a bow or crossbow no matter how hard you try."
        }),
        new Power({
            "name": "Simply Divine",
            "description" : "All Kings are said to have a little bit of divine blood in them. While you don't get anything good from it, you become slow and weak in the Nether, a realm close to Hell."
        }),
        new Power({
            "name": "Warriors Diet",
            "description" : "A great warrior requires an equally great amount of food. You grow hungery quicker."
        })
    ]
});