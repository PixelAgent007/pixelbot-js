// Imports
const Command = require('../../lib/command.js');
const { MessageEmbed, Permissions} = require('discord.js');
const dotenv = require('dotenv');

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: 'delete',
    description: 'Delete a ticket.',

    async run(message, args, bot) {
        const member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) {
            return message.reply("Only staff may delete tickets!");
        }

        if(message.channel.name.includes('ticket-')) {
            message.channel.delete();
        }
        else {
            return message.reply('You can\'t use this command here. Please use this command when you want to delete a ticket.');
        }
    },
});
