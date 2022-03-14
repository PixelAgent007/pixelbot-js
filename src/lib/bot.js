// Imports
const { Client, Intents, Collection } = require("discord.js");
const Command = require("./command.js");

// Defining Intents
const intents = new Intents(32767);

class Bot extends Client {
    constructor(options) {
        super({ intents });

        /**
         * @type {Collection<string, Command>}
         */
        this.commands = new Collection();
    }
}

module.exports = Bot;
