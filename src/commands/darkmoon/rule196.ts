// Imports
import {Command} from '../../lib/command.js';

const no = '196';
const short = 'Keep the balance of the time-space continuum.';
const long = `
Failure to comply with the laws of the time-space continuum is punishable by death (and a ban on cookies).
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
