// Imports
const Command = require('../lib/command.js');
const mcping = require('mcping-js');
const discord = require('discord.js')

module.exports = new Command({
    name: 'motd',
    description: 'Gets a random motd.',

    async run(message, args, bot) {
        const server = new mcping.MinecraftServer('darkmoonsmp.tk', 25565);
        server.ping(1000, 757, (err, res) => {
            if (err) {
                const embed = new discord.MessageEmbed()
                    .setTitle('Server couldn\'t be reached!')
                    .setColor('RED');
                message.channel.send({embeds: [embed]});
                console.log(err);
            } else {
                const embed = new discord.MessageEmbed()
                    .setTitle(res.description.extra[2].text)
                    .setColor('PURPLE');
                message.channel.send({embeds: [embed]});
            }
        })

    },
});
