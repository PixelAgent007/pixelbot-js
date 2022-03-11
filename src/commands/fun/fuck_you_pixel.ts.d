// Imports
import {Command} from '../../lib/command.js';

export default new Command({
    name: 'fuck_you_pixel',
    description: 'A command made for kat <3',

    async run(message, args, bot) {
        message.reply('Fuck you too <3');
    },
});
