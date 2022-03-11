// Imports
import { Command } from '../../lib/command.js';
import { MessageEmbed } from 'discord.js';

function parseDur(ms: number) {
    let seconds: number = ms / 1000;

    const days = seconds / 86400;
    seconds = seconds % 86400;

    const hours = seconds / 3600
    seconds = seconds % 3600;

    const minutes = seconds / 60;
    seconds = seconds % 60;

    if (days) {
        return `\`${days}\` day, \`${hours}\` hours, \`${minutes}\` minutes`;
    } else if (hours) {
        return `\`${hours}\` hours, \`${minutes}\` minutes, \`${seconds}\` seconds`;
    } else if (minutes) {
        return `\`${minutes}\` minutes, \`${seconds}\` seconds`;
    }
    return `\`${seconds}\` second(s)`;
}

export default new Command({
    name: 'uptime',
    description: "Checks the bot's uptime.",

    async run(message, args, bot) {
        const duration = parseDur(bot.uptime);
        message.channel.send('⌛ Loading...').then((msg) => {
            const embed = new MessageEmbed()
                .setTitle(':inbox_tray: Online for')
                .setColor('PURPLE')
                .setDescription(`**${duration}**`);
            msg.channel.send({ embeds: [embed] });
            msg.delete();
        });
    },
});
