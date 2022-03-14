// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
    name: "fuck_you_pixel",
    description: "A command made for kat <3",

    async run(message, args, bot) {
        message.reply("Fuck you too <3");
    },
});
