// Imports
const Command = require('../../lib/command.js');
const { MessageEmbed, Permissions } = require('discord.js');
const hastebin = require('hastebin');
const dotenv = require('dotenv');

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'close',
    description: 'Closes a ticket.',

    async run(message, args, bot) {
        if (message.channel.name.includes('ticket-')) {
            try {
                const member = message.guild.members.cache.get(message.channel.topic);
                await message.channel.permissionOverwrites.set([
                    {type: 'member', id: member.id, deny: [Permissions.FLAGS.VIEW_CHANNEL]},
                    {type: 'role', id: process.env.TICKET_SUPPORTTEAM_ROLEID, allow: [Permissions.FLAGS.VIEW_CHANNEL]},
                    {type: 'role', id: message.guild.roles.everyone.id, deny: [Permissions.FLAGS.VIEW_CHANNEL]},
                ]);
                message.channel.send(`Successfully closed ${message.channel}.`);
            } catch (e) {
                console.log(e);
                return message.channel.send('An error occurred, please try again!');
            }

            message.channel.messages.fetch().then(async (messages) => {
                const output = messages.map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');
                hastebin.createPaste(output, {
                    raw: false,
                    contentType: 'text/plain',
                    server: 'https://haste.oskar.global'
                }, {})
                    .then(function (urlToPaste) {
                        const embed = new MessageEmbed()
                            .setDescription(`[📄 View Transcript](${urlToPaste})`)
                            .setColor('PURPLE');
                        message.channel.send({embeds: [embed]});
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
                                    .setDescription(`[📄 View Transcript](${urlToPaste})`)
                                    .setColor('PURPLE');
                                message.channel.send({embeds: [embed]});
                            })
                            .catch(function (requestError) {
                                console.log(requestError);
                            });
                    });
            });
        } else {
            return message.reply(
                'You can\'t use this command here. Please use this command in a closed ticket.',
            );
        }
    },
});
