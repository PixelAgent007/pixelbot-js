// Imports
import { Bot } from './bot.js';

/**
 *
 * @param {string[]} args
 * @param {Bot} bot
 */
function run(bot, ...args) {}

export class Listener {
    public name: any;
    public type: any;
    public once: any;
    public run: any;

    /**
     * @typedef {{name: string, type: string, once: boolean, run: run}} ListenerOptions
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
