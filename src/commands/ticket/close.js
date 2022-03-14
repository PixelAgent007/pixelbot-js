// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed, Permissions } = require("discord.js");
const hastebin = require("hastebin");
const dotenv = require("dotenv");

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: "close",
    description: "Closes a ticket.",

    async run(message, args, bot) {
        if (message.channel.name.includes("ticket-")) {
            try {
                const member = message.guild.members.cache.get(
                    message.channel.topic
                );
                await message.channel.permissionOverwrites.set([
                    {
                        type: "member",
                        id: member.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
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
                    "closed-" + message.channel.name.substring(7)
                );
                message.channel.send(`Successfully closed ${message.channel}.`);
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
