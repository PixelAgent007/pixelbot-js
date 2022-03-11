// Imports
import {Command} from '../../lib/command.js';

const no = '1';
const short = 'Listen to staff.';
const long = `
The mods, developers and admins which run this server work hard. Thats why what the mods / admins say goes. No questioning the mods. It is allowed to ping them if you seriously need help, but it is not allowed DM'ing mods without their permission. You can also open a ticket. Please note that 'minimodding' is not allowed. `;

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
