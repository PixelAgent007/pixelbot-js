// Imports
import {Command} from '../../lib/command';
import {MessageEmbed} from 'discord.js';
import {MinecraftServer} from 'mcping-js';

export default new Command({
    name: 'motd',
    description: 'Gets a random motd.',

    async run(message, args, bot) {
        const server = new MinecraftServer('darkmoonsmp.tk', 25565);
        server.ping(1000, 757, (err, res) => {
            if (err || !res) {
                const embed = new MessageEmbed()
                    .setTitle("Server couldn't be reached!")
                    .setColor('RED');
                message.channel.send({ embeds: [embed] });
                console.log(err);
            } else {
                const embed = new MessageEmbed()
                    .setTitle(res.description.text)
                    .setColor('PURPLE');
                message.channel.send({ embeds: [embed] });
            }
        });
    },
});
