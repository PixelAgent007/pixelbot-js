// Imports
const Command = require('../lib/command.js');
const discord = require('discord.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'unmute',
    description: 'Unmutes a member.',

    async run(message, args, bot) {
        const error = new discord.MessageEmbed()
            .setColor('RED')
            .setTitle(
                ':no_entry: Syntax: ' +
                    process.env.PREFIX +
                    'unmute <member> [reason]'
            );

        if (args.length != 2) {
            await message.reply({ embeds: [error] });
            return;
        }

        const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
        const embed = new discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(':white_check_mark: Member unmuted successfully.');

        const errorEmbed = new discord.MessageEmbed()
            .setColor('RED')
            .setTitle(
                ':no_entry: An error has occured. Please try again later or contact PixelAgent007#3062.'
            );

        const url =
            'https://discord.com/api/v9/guilds/' +
            message.guild.id +
            '/members/' +
            member.id;

        fetch(url, {
            method: 'GET',
            headers: new fetch.Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bot ' + process.env.TOKEN,
            }),
        })
            .then((res) => res.text())
            .then((data) => {
                if (JSON.parse(data).communication_disabled_until == null) {
                    error.setTitle(':no_entry: Member not muted.');
                    message.reply({ embeds: [error] });
                    return;
                } else {
                    const now = Date.now();
                    const end = new Date(
                        JSON.parse(data).communication_disabled_until
                    );

                    if (now.valueOf() < end.valueOf()) {
                        const data = {
                            communication_disabled_until: null,
                        };
                        fetch(url, {
                            method: 'PATCH',
                            body: JSON.stringify(data),
                            headers: new fetch.Headers({
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bot ' + process.env.TOKEN,
                            }),
                        }).then((res) => {
                            if (res.status == 200)
                                message.reply({ embeds: [embed] });
                            else message.reply({ embeds: [errorEmbed] });
                        });
                    } else {
                        error.setTitle(':no_entry: Member not muted.');
                        message.reply({ embeds: [error] });
                        return;
                    }
                }
            });
    },
});
