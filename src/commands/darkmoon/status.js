// Imports
const Command = require("../../lib/command.js");
const mcping = require("mcping-js");
const discord = require("discord.js");

module.exports = new Command({
    name: "status",
    description: "Checks minecraft server's status.",

    async run(message, args, bot) {
        const server = new mcping.MinecraftServer("darkmoonsmp.tk", 25565);
        server.ping(1000, 757, (err, res) => {
            if (err) {
                const embed = new discord.MessageEmbed()
                    .setTitle("Server couldn't be reached!")
                    .setColor("RED");
                message.channel.send({ embeds: [embed] });
            } else {
                const buff = new Buffer.from(
                    res.favicon.split(",")[1],
                    "base64"
                );
                const attachment = new discord.MessageAttachment(
                    buff,
                    "output.png"
                );
                const embed = new discord.MessageEmbed()
                    .setTitle("Server Status")
                    .setColor("PURPLE")
                    .setDescription(
                        "Players online: " +
                            res.players.online +
                            "/" +
                            res.players.max
                    )
                    .setThumbnail("attachment://output.png")
                    .setFooter(res.description.extra[2].text);
                message.channel.send({ embeds: [embed], files: [attachment] });
            }
        });
    },
});
