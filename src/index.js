// Imports
const Bot = require('./lib/bot.js');
const Command = require('./lib/bot.js');
const Listener = require('./lib/listener.js');
const fs = require('fs');
const dotenv = require('dotenv');

// Setting up dotenv
dotenv.config();

// Getting token
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

// Clearing console
console.clear();

// Defining bot
const bot = new Bot();

// Building Event handler
const eventFiles = fs
    .readdirSync('./src/listener')
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        /**
         * @type {Listener}
         */
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

// Building command handler
fs.readdirSync('./src/commands/', { withFileTypes: true })
    .filter((folder) => folder.isDirectory())
    .forEach((folder) => {
        fs.readdirSync('./src/commands/' + folder.name + '/')
            .filter((file) => file.endsWith('.js'))
            .forEach((file) => {
                /**
                 * @type {Command}
                 */
                const command = require(`./commands/${folder.name}/${file}`);
                console.log(`Command ${command.name} loaded successfully!`);
                bot.commands.set(command.name, command);
            });
    });

bot.on('messageCreate', (message) => {
    // Return if author is bot or message doesnt start w/ prefix
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    // Getting args + command obj
    const args = message.content.substring(prefix.length).split(/ +/);
    const command = bot.commands.find(
        (command) => command.name === args[0].toLowerCase()
    );

    if (!command) {
        return message
            .reply(
                `I\'m sorry, the command \`${prefix}${args[0]}\` doesn\'t exist!`
            )
            .then((msg) => {
                setTimeout(() => msg.delete() && message.delete(), 3000);
            })
            .catch(console.error);
    }
    command.run(message, args, bot);
});

// Logging in
bot.login(token);
