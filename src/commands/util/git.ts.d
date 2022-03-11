// Imports
import { Command } from '../../lib/command.js';
import { MessageEmbed } from 'discord.js';
import { exec } from 'child_process';

export default new Command({
    name: 'git',
    description:
        'Fetches all new origins from the PixelAgent007/pixelbot-js-origins repository.',

    async run(message, args, bot) {
        switch (args[1]) {
            case 'originStatus':
                exec(
                    'cd src/origins && git status',
                    (error, stdout, stderr) => {
                        if (error) {
                            console.log(`error: ${error.message}`);
                        }
                        if (stderr) {
                            console.log(`stderr: ${stderr}`);
                        }
                        const embed = new MessageEmbed()
                            .setTitle('Origin Git Status')
                            .setColor('PURPLE')
                            .setDescription(stdout);
                        message.channel.send({ embeds: [embed] });
                    }
                );
                break;
            case 'status':
                exec('git status', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                    }
                    const embed = new MessageEmbed()
                        .setTitle('Bot Git Status')
                        .setColor('PURPLE')
                        .setDescription(stdout);
                    message.channel.send({ embeds: [embed] });
                });
                break;
            case 'pullOrigins':
                exec('cd src/origins && git pull', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                    }
                    const embed = new MessageEmbed()
                        .setTitle('Origin Git Status')
                        .setColor('PURPLE')
                        .setDescription(stdout);
                    message.channel.send({ embeds: [embed] });
                });
                break;
            default:
                const embed = new MessageEmbed()
                    .setTitle('Git Help')
                    .setColor('PURPLE').setDescription(`
                    Available commands:
                    status - Gets the bot's git status.
                    originStatus - Gets the origins's git status
                    pullOrigins - Updates the origins from the PixelAgent007/pixelbot-js-origins repository
                    help - Print this message
                    `);
                message.channel.send({ embeds: [embed] });
                break;
        }
    },
});
