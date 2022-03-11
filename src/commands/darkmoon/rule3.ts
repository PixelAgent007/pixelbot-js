// Imports
import {Command} from '../../lib/command.js';

const no = '3';
const short = 'Be nice.';
const long = `
Be nice to your fellow members. Thats why personal attacks, witch hunting, harassment, sexism, death threats, racism, and hate speech isn't allowed. This server is a gaming server, therefore neither sexual discussions nor flirting is allowed. Please try to speak in English! Also, we do not talk about launch ;) `;

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
