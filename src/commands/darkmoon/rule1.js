// Imports
const Command = require("../../lib/command.js");

const no = "1";
const short = "Listen to staff.";
const long = `
The mods, developers and admins which run this server work hard. Thats why what the mods / admins say goes. No questioning the mods. It is allowed to ping them if you seriously need help, but it is not allowed DM'ing mods without their permission. You can also open a ticket. Please note that 'minimodding' is not allowed. Impersonation leads to a permanent ban.`;

module.exports = new Command({
    name: "rule" + no,
    description: "Print out Rule " + no + ".",

    async run(message, args, bot) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    },
});
