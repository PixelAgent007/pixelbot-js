// Imports
const Discord = require('discord.js');
const Bot = require('./bot.js');

/**
 *
 * @param {Discord.Message | Discord.Interaction} message
 * @param {string[]} args
 * @param {Bot} bot
 */
function RunFunction(message, args, bot) {}

class Command {
    /**
     * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;
