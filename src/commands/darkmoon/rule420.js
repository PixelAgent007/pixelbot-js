// Imports
const Command = require("../../lib/command.js");

const no = "420";
const short = "Thou shall not <:markiplierE:919627262381420584>!";
const long = `
Failure to comply with this rule is punishable by death (and a ban on cookies).
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
