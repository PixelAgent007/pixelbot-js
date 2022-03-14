// Imports
const Command = require("../../lib/command.js");
const discord = require("discord.js");

module.exports = new Command({
    name: "becomemember",
    description: "Provides information about becoming a member.",

    async run(message, args, bot) {
        const embed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("How do I join the server?")
            .setDescription(
                "Because we offer custom origins for all members, members need to apply in order to be able to join the server. Follow these steps:"
            )
            .addFields(
                {
                    name: "Step 1: ",
                    value: "Please open a ticket by typing `a!new` in any channel. Staff will be with you shortly.",
                },
                {
                    name: "Step 2: ",
                    value: "Follow the steps described in the bot's message inside your ticket.",
                }
            );
        message.channel.send({ embeds: [embed] });
    },
});
