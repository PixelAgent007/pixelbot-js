// Imports
const Command = require('../../lib/command.js');

const no = '4';
const short = "Don't advertise.";
const long = `
Without permission of a mod spam or self-promotion (Server invites, ads, etc.) isn't allowed. Neither is DM-Advertising!
`;

module.exports = new Command({
    name: 'rule' + no,
    description: 'Print out Rule ' + no + '.',

    async run(message, args, bot) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    },
});
