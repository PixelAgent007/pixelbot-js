// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed, Permissions } = require("discord.js");
const dotenv = require("dotenv");
const hastebin = require("hastebin");
const sqlite3 = require("sqlite3").verbose();

const TranscriptionUtil = require("../../util/transcribe.js");

// Setting up dotenv
dotenv.config();

module.exports = new Command({
    name: "delete",
    description: "Delete a ticket.",

    async run(message, args, bot) {
        const member = message.guild.members.cache.get(message.author.id);
        if (!member.roles.cache.has(process.env.TICKET_SUPPORTTEAM_ROLEID)) {
            return message.reply("Only staff may delete tickets!");
        }

        if (
            message.channel.name.includes("ticket-") ||
            message.channel.name.includes("closed-")
        ) {
            // Getting form response
            const db = new sqlite3.Database("database.db", (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("Connected to the SQlite database.");
            });

            db.get(
                "select * from form_responses where ticketID = ?",
                [message.channel.id],
                (err, row) => {
                    if (!row)
                        return message.reply(
                            "The ticket ID you specified couldn't be found!"
                        );
                    else {
                        let items = [];

                        items.push({
                            name: "Ticket ID",
                            value: row.ticketID.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Timezone",
                            value: row.timezone.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Minecraft Name",
                            value: row.ign.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Age",
                            value: row.age.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Hobbies aside Minecraft",
                            value: row.hobbies.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Origin Name",
                            value: row.origin.toString(),
                            inline: false,
                        });
                        items.push({
                            name: "Origin Description",
                            value: row.origin_desc.toString(),
                            inline: false,
                        });
                        if (row.done) {
                            items.push({
                                name: "Download link",
                                value: row.download.toString(),
                                inline: false,
                            });
                        }
                        items.push({
                            name: "Notes",
                            value: row.anythingElse.toString(),
                            inline: false,
                        });

                        const embed = new MessageEmbed()
                            .setTitle(
                                "Form Response for Ticket ID " +
                                    message.channel.id
                            )
                            .setColor("PURPLE")
                            .addFields(items);
                        message.guild.channels.cache
                            .get(process.env.TICKET_TRANSSCRIPT_CHANNELID)
                            .send({ embeds: [embed] });
                    }
                }
            );

            // Creating transcript
            TranscriptionUtil.transcribe(message);

            // Deleting channel
            setTimeout( () => message.channel.delete(), 500);
        } else {
            return message.reply(
                "You can't use this command here. Please use this command when you want to delete a ticket."
            );
        }
    },
});
