// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed, Permissions } = require("discord.js");

module.exports = new Command({
    name: "open",
    description: "Reopens a ticket.",

    async run(message, args, bot) {
        let member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) {
            return message.reply("Only staff may reopen tickets!");
        }

        if (message.channel.name.includes("closed-")) {
            try {
                member = message.guild.members.cache.get(message.channel.topic);
                await message.channel.permissionOverwrites.set([
                    {
                        type: "member",
                        id: member.id,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        type: "role",
                        id: process.env.TICKET_SUPPORTTEAM_ROLEID,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        type: "role",
                        id: message.guild.roles.everyone.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ]);
                await message.channel.setName(
                    "ticket-" + message.channel.name.substring(7)
                );
                message.channel.send(
                    `Successfully re-opened ${message.channel}.`
                );
            } catch (e) {
                console.log(e);
                return message.channel.send(
                    "An error occurred, please try again!"
                );
            }
        } else {
            return message.reply(
                "You can't use this command here. Please use this command in a closed ticket."
            );
        }
    },
});
