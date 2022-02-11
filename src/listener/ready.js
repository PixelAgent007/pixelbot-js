// Imports
const Listener = require("../lib/listener.js");

module.exports = new Listener({
    name: "Bot Startup",
    type: "ready",
    once: true,
    run() {
        // Clear console
        console.log("Bot connected to Discord!");
    },
});
