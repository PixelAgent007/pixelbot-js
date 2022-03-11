// Imports
const Command = require('../../lib/command.js');
const { MessageEmbed, Permissions} = require('discord.js');
const hastebin = require('hastebin');
const dotenv = require('dotenv');

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'transcript',
    description: 'Creates a ticket transcript.',

    async run(message, args, bot) {
        const member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) {
            return message.reply("Only staff may transcribe tickets!");
        }

        if (message.channel.name.includes('ticket-')) {
            message.channel.messages.fetch().then(async (messages) => {
                const output = messages.map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');
                hastebin.createPaste(output, {
                    raw: false,
                    contentType: 'text/plain',
                    server: 'https://haste.oskar.global'
                }, {})
                    .then(function (urlToPaste) {
                        const embed = new MessageEmbed()
                            .setDescription(`[📄 View Transcript of ${message.channel.name.substr(7)}'s Ticket](${urlToPaste})`)
                            .setColor('PURPLE');
                        message.guild.channels.cache.get(process.env.TICKET_TRANSSCRIPT_CHANNELID).send({embeds: [embed]});
                    })
                    .catch(function (requestError) {
                        console.log(requestError);
                        hastebin.createPaste(output, {
                            raw: false,
                            contentType: 'text/plain',
                            server: 'https://hastebin.com'
                        }, {})
                            .then(function (urlToPaste) {
                                const embed = new MessageEmbed()
                                    .setDescription(`[📄 View Transcript of ${message.channel.name.substr(7)}'s Ticket](${urlToPaste})`)
                                    .setColor('PURPLE');
                                message.guild.channels.cache.get(process.env.TICKET_TRANSSCRIPT_CHANNELID).send({embeds: [embed]});
                            })
                            .catch(function (requestError) {
                                console.log(requestError);
                            });
                    });
            });
        } else {
            return message.reply(
                'You can\'t use this command here. Please use this command in a ticket.',
            );
        }
    },
});