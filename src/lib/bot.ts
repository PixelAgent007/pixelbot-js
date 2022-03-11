// Imports
import { Client } from "discord.js";
import { Command } from './command';

export class Bot extends Client {
    public commands: Command[];

    constructor(options) {
        super(options);

        /**
         * @type {Command[]}
         */
        this.commands = [];
    }
}