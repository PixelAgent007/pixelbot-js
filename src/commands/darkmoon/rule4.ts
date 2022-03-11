// Imports
import {Command} from '../../lib/command.js';

const no = '4';
const short = "Don't advertise.";
const long = `
Without permission of a mod spam or self-promotion (Server invites, ads, etc.) isn't allowed. Neither is DM-Advertising!
`;

const command: Command = {
    name: 'rule' + no,
    description: 'Print Rule ' + no + '.',

    async run(message, bot, args) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    },
}

export default command;
