// Imports
const Discord = require("discord.js");
const Bot = require("./bot.js");

/**
 *
 * @param {string[]} args
 * @param {Bot} bot
 */
function RunFunction(bot, ...args) {}

class Listener {
    /**
     * @typedef {{name: string, type: string, once: boolean, run: RunFunction}} ListenerOptions
     * @param {ListenerOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.type = options.type;
        this.once = options.once;
        this.run = options.run;
    }
}

module.exports = Listener;
