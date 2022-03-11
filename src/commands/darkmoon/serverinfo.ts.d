// Imports
import {Command} from '../../lib/command';
import {MessageEmbed} from 'discord.js';

module.exports = new Command({
    name: 'serverinfo',
    description: 'Provides information about the server.',

    async run(message, args, bot) {
        const embed = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('Server Information')
            .setDescription('IP: `darkmoonsmp.tk`')
            .addFields(
                {
                    name: 'Version: ',
                    value: '1.18.1 @ Fabric 0.12.12 (Installer Version 10.2)',
                },
                {
                    name: 'Manual Download: ',
                    value: 'https://l.oskar.global/manual',
                    inline: true,
                },
                {
                    name: 'Curseforge: ',
                    value: 'https://l.oskar.global/curseforge',
                    inline: true,
                },
                {
                    name: 'Technic: ',
                    value: 'https://l.oskar.global/technic',
                    inline: true,
                },
                {
                    name: 'More help',
                    value:
                        'If you need help on installing the modpack, feel free to ask in ' +
                        message.guild.channels.cache
                            .get('906922845404274689')
                            .toString(),
                }
            );
        message.channel.send({ embeds: [embed] });
    },
});
