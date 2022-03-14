// Imports
const Command = require("../../lib/command.js");
const Origin = require("../../lib/origin.js");
const fs = require("fs");

let registeredOrigins = [];

module.exports = new Command({
    name: "origin",
    description: "Displays someone's origins",

    run: async function (message, args, bot) {
        if (message.guild.id != 906804682452779058) return;
        if (args.length != 2) return;

        fs.readdirSync("./src/origins/")
            .filter((file) => file.endsWith(".js"))
            .forEach((file) => {
                /**
                 * @type {Origin}
                 */
                const origin = require(`../../origins/${file}`);

                console.log(`Origin ${origin.name} loaded successfully!`);
                registeredOrigins.push(origin);
            });

        const player = args[1];
        if (player.length > 16 || player.length < 3) return;

        registeredOrigins.forEach((origin) => {
            if (origin.player == player)
                message.channel.send({ embeds: [Origin.getEmbed(origin)] });
        });
    },
});
