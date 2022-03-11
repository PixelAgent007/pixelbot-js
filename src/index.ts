// Imports
import { Bot } from './lib/bot.js';
import { Command } from './lib/command.js';
import fs from 'fs';
import dotenv from 'dotenv';
import {Intents} from "discord.js";
import glob from "glob";

// Setting up dotenv
dotenv.config();

// Getting token
const token: string | undefined = process.env.TOKEN;
const prefix: string | undefined = process.env.PREFIX;

// Checking prefix & token
if (!prefix || !token) process.exit(1);

// Clearing console
console.clear();

// Defining Intents
const intents = new Intents(32767);

// Defining bot
const bot = new Bot({ intents });

bot.once('ready', async () => {
    console.log('Bot connected to Discord!');
    glob('src/commands/**/*.ts', async (err, commandFiles) => {
        console.log(commandFiles);
        if (err) {
            console.log(err);
            process.exit(1);
        } else for (const file of commandFiles) {
            const command = await import(file.substring(4)) as Command;
            bot.commands.push(command);
            console.log(`Command ${command.name} loaded successfully!`)
        }
    });
});

/*
Building Event handler
fs.readdirSync('./src/listener')
    .filter((file) => file.endsWith('.js') || file.endsWith('.ts'))
    .forEach((file) => {

        const event = require(`./listener/${file}`);
        console.log(
            `Listener ${event.name} of type ${event.type} loaded successfully!`
        );
        if (event.once) {
            bot.once(event.type, (...args) => event.run(...args));
        } else {
            bot.on(event.type, (...args) => event.run(...args));
        }
    });
*/

bot.on('messageCreate', (message) => {
    // Return if author is bot or message doesn't start w/ prefix
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    // Getting args + command obj
    const args: string[] = message.content.substring(prefix.length).split(/ +/);
    const command: Command | undefined = bot.commands.find(
        (command) => command.name === args[0].toLowerCase()
    );

    if (!command) {
        return message
            .reply(
                `I\'m sorry, the command \`${prefix}${args[0]}\` doesn\'t exist!`
            )
            .then((msg) => {
                setTimeout(() => {
                    msg.delete();
                    message.delete();
                }, 3000);
            })
            .catch(console.error);
    }
    else command.run(message, bot, args);
});

// Logging in
bot.login(token);
