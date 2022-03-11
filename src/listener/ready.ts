// Imports
import { Listener } from '../lib/listener';

module.exports = new Listener({
    name: 'Bot Startup',
    type: 'ready',
    once: true,
    run() {
        // Clear console
        console.log('Bot connected to Discord!');
    },
});
