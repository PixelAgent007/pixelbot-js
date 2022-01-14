// Imports
const Discord = require("discord.js");
const Command = require("./command.js");

// Defining Intents
const intents = new Discord.Intents(32767);

class Bot extends Discord.Client {
    constructor(options) {
        super({ intents });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
    }
}

module.exports = Bot;
