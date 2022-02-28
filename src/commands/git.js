// Imports
const Command = require('../lib/command.js');
const discord = require("discord.js");
const { exec } = require("child_process");

module.exports = new Command({
    name: 'git',
    description: "Fetches all new origins from the PixelAgent007/pixelbot-js-origins repository.",

    async run(message, args, bot) {
        switch (args[1]) {
            case 'help':
                break;
            case 'originStatus':
                exec('cd src/origins && git status', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        break;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        break;
                    }
                    const embed = new discord.MessageEmbed()
                        .setTitle('Origin Git Status')
                        .setColor('PURPLE')
                        .setDescription(stdout);
                    message.channel.send({ embeds: [embed] });
                    break;
                });
                break;
            case 'status':
                exec('git status', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        break;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        break;
                    }
                    const embed = new discord.MessageEmbed()
                        .setTitle('Bot Git Status')
                        .setColor('PURPLE')
                        .setDescription(stdout);
                    message.channel.send({ embeds: [embed] });
                    break;
                });
                break;
            default:
                break;
        }
    },
});
