module.exports = {
    name: "ready",
    once: true,
    execute() {
        // Clear console
        console.clear();
        console.log("Bot connected to Discord!");
    },
};
