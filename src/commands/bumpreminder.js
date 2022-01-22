// Imports
const Command = require('../lib/command.js');
const discord = require('discord.js');

module.exports = new Command({
    name: 'd',
    description: '',

    async run(message, args, bot) {
        if (args[1] == 'bump') {
            setTimeout(() => {
                message.channel.messages.fetch({limit: 1}).then(messages => {
                    if (messages.first().author.id == 302050872383242240 && messages.first().embeds[0].thumbnail.url == 'https://disboard.org/images/bot-command-image-thumbnail.png') {
                        message.reply('Thanks for bumping our server!');
                        setTimeout(() => {
                            embed = new discord.MessageEmbed().setTitle('go bump nerds').setDescription('Bump the server with !d bump.').setColor('PURPLE').setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                            message.channel.send({content: '<@&928005402338140220>', embeds: [embed]})
                        }, 3600000);
                    }
                });
            }, 100);
        }
    },
});
