// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
    name: "no",
    description: "Another command made for kat",

    async run(message, args, bot) {
        if (message.author.id == 487247155741065229) {
            const embed = new MessageEmbed()
                .setTitle("No.")
                .setImage(
                    "https://oskar.global/wp-content/uploads/2022/03/no.jpg"
                )
                .setColor("PURPLE");
            message.channel.send({ embeds: [embed] });
        }
    },
});
