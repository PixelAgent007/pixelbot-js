// Imports
const Command = require('../lib/command.js');

module.exports = new Command({
    name: 'ping',
    description: "Checks the bot's connection to the discord servers.",

    async run(message, args, bot) {
        const msg = await message.channel.send(`Ping: ${bot.ws.ping}ms`);
        msg.edit(
            `Ping: ${bot.ws.ping}ms\nMessage Ping: ${
                msg.createdTimestamp - message.createdTimestamp
            }ms`
        );
    },
});
