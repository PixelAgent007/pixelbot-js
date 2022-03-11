// Imports
import { Command } from '../../lib/command.js';
import { MessageEmbed } from 'discord.js';

export default new Command({
    name: 'ping',
    description: "Checks the bot's connection to the discord servers.",

    async run(message, args, bot) {
        if (message.author.id == 487247155741065229) {
            message.channel.send('🏓 Pinging....').then((msg) => {
                const embed = new MessageEmbed()
                    .setTitle('🏓 Pong!')
                    .setColor('PURPLE')
                    .setDescription(
                        `Latency: ${Math.floor(
                            msg.createdTimestamp - message.createdTimestamp
                        )}ms\nAPI Latency: ${bot.ws.ping}ms`
                    );
                msg.channel.send({ embeds: [embed] });
                msg.delete();
            });
        } else {
            message.delete();
        }
    },
});
