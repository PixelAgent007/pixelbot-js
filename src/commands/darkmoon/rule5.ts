// Imports
import {Command} from '../../lib/command.js';

const no = '5';
const short = "Bannable In-game actions";
const long = `
Actions ingame that may lead to a ban or another kind of punishment include spawntrapping, chunk banning, building lag machines, duping (except carpet, rail and falling block duping). Killing / Trapping / Griefing without any reason may be punishable too, but Staff will never refund anything lost to such actions.
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
