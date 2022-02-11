// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "(Modified) Elytrian",
    player: "PixelAgent007",
    impact: 3,
    description: "Often flying around in the winds, Elytrians are uncomfortable when they don't have enough space above their head.",
    author: "LuaDotExe (Edited by PixelAgent007)",
    src: "https://github.com/dark-moon-smp/modified-elytrian",
    actives: [
        new Power({
            "name": "Gift of the Winds",
            "description": "Every 40 seconds, you are able to launch 20 blocks up into the air. When already flying, you will instead be propelled forwards."
        }),
        new Power({
            "name": "Air Breaks",
            "description": "Every 20 seconds you can stop all of your motion for 5 seconds whilst in mid-air."
        })
    ],
    pros: [
        new Power({
            "name": "Winged",
            "description": "You have Elytra wings without needing to equip any."
        }),
        new Power({
            "name": "Aerial Combatant",
            "description" : "You deal substantially more damage while in Elytra flight."
        })
    ],
    passives: [],
    cons: [
        new Power({
            "name": "Need for Mobility",
            "description": "You can not wear armor with protection values higher than chainmail."
        }),
        new Power({
            "name": "Claustrophobia",
            "description": "Being somewhere with a low ceiling for too long will weaken you and make you slower."
        }),
        new Power({
            "name": "Brittle Bones",
            "description": "You take more damage from falling and flying into blocks."
        })
    ]
});