// Imports
const Listener = require("../lib/listener.js");
const discord = require("discord.js");

module.exports = new Listener({
    name: "Ticket Create",
    type: "channelCreate",
    once: false,
    run(channel) {
        if(channel.name.startsWith("ticket")) {
            const embed = new discord.MessageEmbed()
                .setColor("PURPLE")
                .setTitle("How do I join the server?")
                .setDescription("Welcome to your member application. Staff will be with you shortly.")
                .addFields(
                    { name: "Step 1: ", value: "If not done already, please fill out this form: https://forms.gle/gmZSEJ8L1Dfy9o4k9" },
                    { name: "Step 2:", value: "Staff will discuss your origin with you and will balance it."},
                    { name: "Step 3: ", value: "Download the modpack as stated in " + channel.guild.channels.cache.get('916023846862221353').toString() }

                );
            channel.send({embeds: [embed]});
        }
    },
});
