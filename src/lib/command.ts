// Imports
import { Message } from 'discord.js';
import { Bot } from './bot';

export interface Command {
    name: string;
    description: string;
    // Making `args` optional
    run(message: Message, bot: Bot, args?: string[]): any
}