// Imports
import {Command} from '../../lib/command';
import {Origin} from '../../lib/origin';
import fs from 'fs';

let registeredOrigins = [];

module.exports = new Command({
    name: 'origin',
    description: "Displays someone's origins",

    run: async function (message, args, bot) {
        if (message.guild.id != 906804682452779058) return;
        if (args.length != 2) return;

        fs.readdirSync('./src/origins/')
            .filter((file) => file.endsWith('.js'))
            .forEach((file) => {
                /**
                 * @type {Origin}
                 */
                const origin: Origin = require(`../../origins/${file}`);

                console.log(`Origin ${origin.name} loaded successfully!`);
                // @ts-ignore
                registeredOrigins.push(origin);
            });

        const player = args[1];
        if (player.length > 16 || player.length < 3) return;

        registeredOrigins.forEach((origin) => {
            // @ts-ignore
            if (origin.player == player)
                message.channel.send({ embeds: [Origin.getEmbed(origin)] });
            return;
        });
    },
});
