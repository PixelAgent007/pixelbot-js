// Imports
const Command = require("../../lib/command.js");
const dotenv = require("dotenv");

const TranscriptionUtil = require("../../util/transcribe.js");

module.exports = new Command({
    name: "transcript",
    description: "Creates a ticket transcript.",

    async run(message, args, bot) {
        const member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) {
            return message.reply("Only staff may transcribe tickets!");
        }

        if (
            message.channel.name.includes("ticket-") |
            message.channel.name.includes("closed-")
        ) {
            TranscriptionUtil.transcribe(message);
        } else {
            return message.reply(
                "You can't use this command here. Please use this command in a ticket."
            );
        }
    },
});
