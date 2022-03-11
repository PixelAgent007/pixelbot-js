// Imports
import { Command } from '../../lib/command.js';
import dotenv from 'dotenv';

// Setting up dotenv
dotenv.config();

export default new Command({
    name: 'delete',
    description: 'Delete a ticket.',

    async run(message, args, bot) {
        const member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) return message.reply("Only staff may delete tickets!");

        if(message.channel.name.includes('ticket-') || message.channel.name.includes('closed-')) return message.channel.delete();
        else return message.reply('You can\'t use this command here. Please use this command when you want to delete a ticket.');
    },
});
