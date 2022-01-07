// Imports
const Command = require('../lib/command.js');
const discord = require('discord.js');

module.exports = new Command({
    name: 'rps',
    description: "Play rock paper scissors against a fellow member.",

    async run(message, args, bot) {
        if (args.length != 2) return;
      
        const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[1]);

        let author;
        await message.author.createDM().then(channel => {
            channel.send('Please send either rock, paper or scissors. You have 10 seconds.')
            setTimeout(channel.messages.fetch({ limit: 1 }).then(messages => {
            author = messages.first();
  
            if (lastMessage.author.bot) {
              return;
            }
        }), 10000);

        let opp;
        await member.createDM().then(channel => {
            channel.send('Please send either rock, paper or scissors. You have 10 seconds.');
            setTimeout(channel.messages.fetch({ limit: 1 }).then(messages => {
            opp = messages.first();
  
            if (lastMessage.author.bot) {
              return;
            }
        }), 10000);
      
        const embed = new discord.MessageEmbed().setColor('RANDOM').setTitle('Result')
        .addField(
          { name: message.author.name + ':', value: author },
          { name: member.name + ':', value: opp }
        );
        const msg = await message.channel.send({embeds: [embed]});
    },
});
