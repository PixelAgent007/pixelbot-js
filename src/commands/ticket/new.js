// Imports
const Command = require('../../lib/command.js');
const { MessageEmbed, Permissions } = require('discord.js');
const dotenv = require('dotenv');

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'new',
    description: 'Creates a new ticket.',

    async run(message, args, bot) {
        if (
            message.guild.channels.cache.find(
                (channel) =>
                    channel.name === `ticket-${message.author.username}`
            )
        ) {
            return message.reply(
                'You already have a ticket, please close your existing ticket first before opening a new one!'
            );
        }

        message.guild.channels
            .create(`ticket-${message.author.username}`, 'text')
            .then(async (channel) => {
                await channel.setParent(process.env['TICKET_CATEGORY_ID']);
                await channel.permissionOverwrites.set([
                    {type: 'member', id: message.author.id, allow: [Permissions.FLAGS.VIEW_CHANNEL]},
                    {type: 'role', id: process.env.TICKET_SUPPORTTEAM_ROLEID, allow: [Permissions.FLAGS.VIEW_CHANNEL]},
                    {type: 'role', id: message.guild.roles.everyone.id, deny: [Permissions.FLAGS.VIEW_CHANNEL]},
                ]);
                await channel.setTopic(message.author.id);
                message.reply(
                    `You have successfully created a ticket! Please go to ${channel} to view your ticket.`
                );
                const embed = new MessageEmbed()
                    .setColor('PURPLE')
                    .setTitle('How do I join the server?')
                    .setDescription(
                        'Hi ' +
                            message.author.username +
                            `, welcome to your member application. Staff will be with you shortly. If you would like to close this ticket please run \`${process.env.PREFIX}close\``
                    )
                    .addFields(
                        {
                            name: 'Step 1: ',
                            value: 'If not done already, please fill out this form: https://forms.gle/gmZSEJ8L1Dfy9o4k9',
                        },
                        {
                            name: 'Step 2:',
                            value: 'Staff will discuss your origin with you and will balance it.',
                        },
                        {
                            name: 'Step 3: ',
                            value:
                                'Download the modpack as stated in ' +
                                channel.guild.channels.cache
                                    .get('916023846862221353')
                                    .toString(),
                        }
                    );
                channel.send({ embeds: [embed] });
                const logchannel = message.guild.channels.cache.find(
                    (channel) => channel.name === 'ticket-logs'
                );
                if (logchannel) {
                    logchannel.send(
                        `Ticket ${message.author.id} created. Click the following to view <#${channel.id}>`
                    );
                }
            });
    },
});
