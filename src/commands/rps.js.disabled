// Imports
const Command = require("../lib/command.js");
const discord = require("discord.js");

module.exports = new Command({
    name: "rps",
    description: "Play rock paper scissors against a fellow member.",

    async run(message, args, bot) {

        if (args.length !== 2) return;

        const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[1]);

        const error = new discord.MessageEmbed().setColor("RED");

        let author;
        await message.author.createDM().then(channel => {
            channel.send('Please send either rock, paper or scissors. You have 5 seconds.')
            setTimeout(() => { channel.messages.fetch({ limit: 1 }).then(messages => {
                author = messages.first().content;
                if (messages.first().author.bot) {
                    error.setTitle(message.author.tag + " didn't decide fast enough.");
                    message.channel.send({ embeds: [error] });
                    return;
                }
            }); }, 5000);

        });

        let opp;
        await member.createDM().then(channel => {
            channel.send('Please send either rock, paper or scissors. You have 5 seconds.')
            setTimeout(() => { channel.messages.fetch({ limit: 1 }).then(messages => {
                opp = messages.first().content;
                if (messages.first().author.bot) {
                    error.setTitle(member.tag + " didn't decide fast enough.");
                    message.channel.send({ embeds: [error] });
                    return;
                }
            }); }, 5000);

        }).then( () => {
            setTimeout(() => {
                const name1 = message.author.tag + ":";
                const name2 = member.tag + ":";

                const embed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Result")
                    .addFields(
                        { name: name1, value: author },
                        { name: name2, value: opp }
                    );
                message.channel.send({ embeds: [embed] });
            }, 5000);
        });
    },
});
