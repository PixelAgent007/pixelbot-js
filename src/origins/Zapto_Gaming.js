// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
	name: "Smiling Demon",
	player: "Zapto_Gaming",
	impact: 3,
	description: "A demon with a grin permanently plastered on its face. It doesn't seem like the Nether is it's natural home, but it somehow managed to get there anyways.",
	author: "KitCat#0962",
	src: "https://github.com/dark-moon-smp/smiling-demon-origin",
	actives: [
		new Power({
			"name": "Beaming Smile",
			"description": "Give your opponents an unnreving grin! Activate and then hit your opponent to weaken their attacks."
		}),
		new Power({
			"name": "Haunting Gaze",
			"description": "Your gaze peirces through walls. When activated, you will be able to see the location of all nearby. They can feel your presence as well, becoming slower. This puts a heavy strain on you, leaving you immobile for a time."
		})
	],
	pros: [
		new Power({
			"name": "Night Vision",
			"description": "You can see in the dark a bit."
		}),
		new Power({
			"name": "Born in Fire",
			"description": "The flames gave birth to you; they won't harm you. Instead, they will heal you slowly."
		}),
		new Power({
			"name": "Tortured Torturer",
			"description": "At the brink of death, you deal more damage."
		})
	],
	passives: [
		new Power({
			"name": "Ravenous",
			"description": "You have an iron stomache, capable of consuming anything without any extra effects. Though, you become weaker when you're even slightly hungery."
		}),
		new Power({
			"name": "Nocturnal Hunter",
			"description": "While in the dark you are stronger and faster. Though in the sun you become equally slow and weak."
		}),
		new Power({
			"name": "Nether Inhabitant",
			"description": "Your natural spawn will be in the Nether."
		})
	],
	cons: [
		new Power({
			"name": "Carnivore",
			"description": "Your diet is restricted to meat, you can't eat vegetables."
		}),
		new Power({
			"name": "Famished",
			"description": "You require food more often than others."
		}),
		new Power({
			"name": "Insomnia",
			"description": "Sleep? Whats that? I havn't slept since... my entire life!"
		}),
		new Power({
			"name": "Sinner",
			"description": "What you did, do, or will do matters not. All things that would otherwise ignore you will come for your head."
		}),
		new Power({
			"name": "Hydrophobia",
			"description": "You receive damage over time while in contact with water."
		})
	]
});