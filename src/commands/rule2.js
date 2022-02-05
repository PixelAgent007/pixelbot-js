// Imports
const Command = require("../lib/command.js");

const no = "2";
const short = "This is a community server."
const long = `
It is not allowed to post explicit, pornographic or NSFW content in general. No illegal content or piracy. It is also not allowed sending links leading to such. 
`

module.exports = new Command({
    name: "rule" + no,
    description: "Print out Rule " +  no + ".",

    async run(message, args, bot) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    }
});
