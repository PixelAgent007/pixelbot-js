// Imports
const Command = require('../lib/command.js');
const discord = require('discord.js');
const fetch = require('node-fetch')

module.exports = new Command({
    name: 'rps',
    description: "Play rock paper scissors against a fellow player!",

    async run(message, args, bot) {
        if (args.length != 2)
        const embed = new discord.MessageEmbed().setColor('RANDOM').setTitle('Result');
        
        const msg = await message.channel.send({embeds: [embed]});
    },
});
