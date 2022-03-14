const hastebin = require("hastebin");
const { MessageEmbed } = require("discord.js");
const dotenv = require("dotenv");

// Setting up dotenv
dotenv.config();

class TranscriptionUtil {
    static transcribe(message) {
        // Creating transcript
        message.channel.messages.fetch().then(async (messages) => {
            const output = messages
                .map(
                    (m) =>
                        `${new Date(m.createdAt).toLocaleString("en-US")} - ${
                            m.author.tag
                        }: ${
                            m.attachments.size > 0
                                ? m.attachments.first().proxyURL
                                : m.content
                        }`
                )
                .join("\n");
            hastebin
                .createPaste(
                    output,
                    {
                        raw: false,
                        contentType: "text/plain",
                        server: "https://haste.oskar.global",
                    },
                    {}
                )
                .then(function (urlToPaste) {
                    const embed = new MessageEmbed()
                        .setDescription(
                            `[📄 View Transcript of ${message.channel.name.substr(
                                7
                            )}'s Ticket](${urlToPaste})`
                        )
                        .setColor("PURPLE");
                    message.guild.channels.cache
                        .get(process.env.TICKET_TRANSSCRIPT_CHANNELID)
                        .send({ embeds: [embed] });
                })
                .catch(function (requestError) {
                    console.log(requestError);
                    hastebin
                        .createPaste(
                            output,
                            {
                                raw: false,
                                contentType: "text/plain",
                                server: "https://hastebin.com",
                            },
                            {}
                        )
                        .then(function (urlToPaste) {
                            const embed = new MessageEmbed()
                                .setDescription(
                                    `[📄 View Transcript of ${message.channel.name.substr(
                                        7
                                    )}'s Ticket](${urlToPaste})`
                                )
                                .setColor("PURPLE");
                            message.guild.channels.cache
                                .get(process.env.TICKET_TRANSSCRIPT_CHANNELID)
                                .send({ embeds: [embed] });
                        })
                        .catch(function (requestError) {
                            console.log(requestError);
                        });
                });
        });
    }
}

module.exports = TranscriptionUtil;
