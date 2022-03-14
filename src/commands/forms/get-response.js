// Imports
const Command = require("../../lib/command.js");
const { MessageEmbed } = require("discord.js");
const sqlite3 = require("sqlite3").verbose();

module.exports = new Command({
    name: "getresponse",
    description: "Gets a forms response for a specific ticket.",

    async run(message, args, bot) {
        if (args.length !== 2)
            return message.reply("You need to specify a ticket ID!");

        const db = new sqlite3.Database("database.db", (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Connected to the SQlite database.");
        });

        db.get(
            "select * from form_responses where ticketID = ?",
            [args[1]],
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
                        .setTitle("Form Response for Ticket ID " + args[1])
                        .setColor("PURPLE")
                        .addFields(items);
                    message.channel.send({ embeds: [embed] });
                }
            }
        );
    },
});
