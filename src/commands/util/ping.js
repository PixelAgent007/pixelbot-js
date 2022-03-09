// Imports
const Command = require('../../lib/command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'ping',
    description: "Checks the bot's connection to the discord servers.",

    async run(message, args, bot) {
        if (message.author.id == 289896419291168775) {
            await message.delete();
            return;
        } else {
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
        }
    },
});
