// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Rainbow Infection",
    player: "Kawatt",
    impact: 3,
    description: "A c o l o r f u l world is a better world.",
    author: "KawatOwO#3016",
    src: "https://github.com/dark-moon-smp/Rainbow-Infection-Origin",
    actives: [
        new Power({
            "name": "Fast as light",
            "description" : "You can boost yourself on air."
        }),
        new Power({
            "name": "Color Absorption",
            "description" : "You shoot a ray that absorbs the color from an entity."
        }),
        new Power({
            "name": "Explosive Glint",
            "description" : "You can shoot a firework and are immune to firework damage."
        }),
        new Power({
            "name": "Color Swap",
            "description" : "You can randomly change the color of a block."
        })
    ],
    pros: [
        new Power({
            "name": "Odonata Wings",
            "description": "You have the delicate wings of a dragonfly. Flying with them will slowly decrease your color meter."
        }),
        new Power({
            "name": "Erratic Crystal",
            "description" : "You are immune to kinetyc damage and bounce on walls, but might combust because of the friction. Each time you hit a wall, you will leave a burst of color."
        }),
        new Power({
            "name": "L i b e r a t i o n",
            "description" : "When you die, you'll make a colorful explosion :)"
        })
    ],
    passives: [
        new Power({
            "name": "Pigment Absorption",
            "description" : "You can refill your color bar with dyes and by being around geodes."
        }),
        new Power({
            "name": "Camouflage",
            "description" : "You can make your armor look transparent."
        }),
        new Power({
            "name": "Shiny",
            "description" : "You are slightly transparent. The glowing effect lasts longer."
        })
	],
    cons: [
        new Power({
            "name": "Made of Color",
            "description" : "Running out of color will cause you to get hurt."
        }),
        new Power({
            "name": "Too bright",
            "description" : "Being on fire blinds you."
        }),
        new Power({
            "name": "Scared of the Dark",
            "description" : "Darkness weakens you and makes you lose the ability to regenerate naturally."
        })
    ]
});