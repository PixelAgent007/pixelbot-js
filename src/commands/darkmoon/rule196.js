// Imports
const Command = require("../../lib/command.js");

const no = "196";
const short = "Keep the balance of the time-space continuum.";
const long = `
Failure to comply with the laws of the time-space continuum is punishable by death (and a ban on cookies).
`;

module.exports = new Command({
    name: "rule" + no,
    description: "Print out Rule " + no + ".",

    async run(message, args, bot) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    },
});
