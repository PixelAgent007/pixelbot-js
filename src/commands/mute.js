// Imports
const Command = require('../lib/command.js')
const discord = require('discord.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'mute',
    description: 'Timeouts a member.',

    async run(message, args, bot) {
        const valueError = new discord.MessageEmbed()
            .setColor('RED')
            .setTitle(':no_entry: Syntax: ' + process.env.PREFIX + 'mute <member> <time> <m | h | d> [reason]');

        
        if (args.length != 4) if (args.length != 5) {
            await message.reply({embeds: [valueError]});
            return;
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        const time = parseInt(args[2]);
      
        if (isNaN(time)) {
            await message.reply({embeds: [valueError]});
            return;
        }

        let ms;


        switch (args[3]) {
            case 'min':
            case 'm':
            case 'minute':
            case 'minutes':
                if (time > 40320) {
                    valueError.setFooter('Timeouts may last up to 28 days, 672 hours or 40320 minutes.');
                    await message.reply({embeds: [valueError]});
                    return;
                } else ms = time * 60000;
                break;
            case 'hrs':
            case 'h':
            case 'hour':
            case 'hours':
                if (time > 672) {
                    valueError.setFooter('Timeouts may last up to 28 days, 672 hours or 40320 minutes.');
                    await message.reply({embeds: [valueError]});
                   return;
                } else ms = time * 60000 * 60;
                break;
            case 'day':
            case 'd':
            case 'days':
                if (time > 28) {
                    valueError.setFooter('Timeouts may last up to 28 days, 672 hours or 40320 minutes.');
                    await message.reply({embeds: [valueError]});
                    return;
                } else ms = time * 60000 * 60 * 24;
                break;
            default:
                await message.reply({embeds: [valueError]});
                return;
        }

        let reason = ' | Issued by: ' + message.author.tag;
        if (args[5] || args[5] != '') reason = args[5] + reason;

        const embed = new discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(':white_check_mark: Member muted successfully.');

        const errorEmbed = new discord.MessageEmbed()
            .setColor('RED')
            .setTitle(':no_entry: An error has occured. Please try again later or contact PixelAgent007#3062.');

        const url = 'https://discord.com/api/v9/guilds/' + message.guild.id + '/members/' + member.id;

        fetch(url, {
            method: 'GET',
            headers: new fetch.Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bot ' + process.env.TOKEN
            })
        })
            .then(res => res.text())
            .then(data => {
                if (JSON.parse(data).communication_disabled_until == null) {
                    const tmp = Date.now() + ms
                    const end = new Date(tmp).toISOString();
                    const data = {
                        "communication_disabled_until": end
                    }
                    fetch(url, {
                        method: 'PATCH',
                        body: JSON.stringify(data),
                        headers: new fetch.Headers({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Audit-Log-Reason': reason,
                            'Authorization': 'Bot ' + process.env.TOKEN
                        })
                    }).then(res => {
                        if (res.status == 200) message.reply({embeds: [embed]});
                        else message.reply({embeds: [errorEmbed]});
                        return;
                    });
                } else {
                    const now = new Date();
                    const end = new Date(JSON.parse(data).communication_disabled_until);

                    if (now.valueOf() < end.valueOf()) {
                        embed.setColor('RED');
                        embed.setTitle(':no_entry: Member already muted.');
                        message.reply({embeds: [embed]});
                        return;
                    } else {
                        const tmp = Date.now() + ms
                        const end = new Date(tmp).toISOString();
                        const data = {
                            "communication_disabled_until": end
                        }
                        fetch(url, {
                            method: 'PATCH',
                            body: JSON.stringify(data),
                            headers: new fetch.Headers({
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'X-Audit-Log-Reason': reason,
                                'Authorization': 'Bot ' + process.env.TOKEN
                            })
                        }).then(res => {
                            if (res.status == 200) message.reply({embeds: [embed]});
                            else message.reply({embeds: [errorEmbed]});
                            return;
                        });
                    }
                }
            });
    }
})