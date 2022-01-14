// Imports
const Command = require("../lib/command.js");
const discord = require("discord.js");

module.exports = new Command({
    name: "serverinfo",
    description: "Provides information about the server.",

    async run(message, args, bot) {
        const embed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Server Information")
            .setDescription("IP: `darkmoonsmp.tk`")
            .addFields(
                { name: "Version: ", value: "1.18.1 @ Fabric 10.2" },
                { name: "Manual Download: ", value: "https://l.darkmoonsmp.tk/manual", inline: true },
                { name: "Curseforge: ", value: "https://l.darkmoonsmp.tk/curseforge", inline: true },
                { name: "Technic: ", value: "https://l.darkmoonsmp.tk/technic", inline: true },
                { name: "More help", value: "If you need help on installing the modpack, be free to ask in " + message.guild.channels.cache.get('906922845404274689').toString() }
            );
        message.channel.send({embeds: [embed]});
    },
});
