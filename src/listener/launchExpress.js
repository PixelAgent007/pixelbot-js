// Imports
const Listener = require("../lib/listener.js");
const express = require("express");
const sha256 = require("sha256");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sqlite3 = require("sqlite3").verbose();
const cors = require('cors');

// Setting up dotenv
dotenv.config();

module.exports = new Listener({
    name: "Launch Express Server",
    type: "ready",
    once: true,
    run() {
        // Defining API listening port
        const port = 3000;

        // Defining http server
        const app = express();

        // Setting up body parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // Setting up cors
        app.use(cors());

        app.post("/v1/submit_application", (req, response) => {
            response.json({ code: 200, text: "Post successful." });
            const res = req.body;
            const db = new sqlite3.Database("database.db", (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("Connected to the SQlite database.");
            });

            db.get("select * from form_responses where ticketID = ?", res.ticketID, (err, row) => {
               if (err || row) return console.log('Ticket already exists!');
            });

            db.serialize(() => {
                db.run(
                    `insert into form_responses (ticketID, timezone, ign, age, hobbies, origin, origin_desc, done,
                                                 download, active, rules, anythingElse)
                     values (${res.ticketID}, '${res.timezone}', '${res.ign}', '${res.age}', '${res.hobbies}', '${res.origin}',
                             '${res.origin_desc}', ${res.done}, '${res.download}', ${res.active}, ${res.rules},
                             '${res.anythingElse}')`
                );
            });

            db.close();
        });

        // Starting express app
        app.listen(port, () => console.log(`App listening on port ${port}!`));
    },
});
