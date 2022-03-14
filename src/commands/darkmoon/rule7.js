// Imports
const Command = require("../../lib/command.js");

const no = "7";
const short = "Don't spam commands!";
const long = `
Please refrain from spamming bot commands! Yes, I'm looking at you, Kit. <:shoebill:949393466377515038>
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
