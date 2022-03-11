// Imports
import {Command} from '../../lib/command.js';
import {MessageEmbed} from 'discord.js';

const command: Command = {
    name: 'becomemember',
    description: 'Provides information about becoming a member.',

    async run(message, bot, args) {
        // @ts-ignore
        const channel = message.guild.channels.cache.get('916023846862221353').toString();

        const embed = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('How do I join the server?')
            .setDescription(
                'Because we offer custom origins for all members, members need to apply in order to be able to join the server. Follow these steps:'
            )
            .addFields(
                {
                    name: 'Step 1: ',
                    value: 'Please fill build this form: https://forms.gle/gmZSEJ8L1Dfy9o4k9',
                },
                {
                    name: 'Step 2: ',
                    value: 'Please open a ticket above. Staff will be with you shortly.',
                },
                {
                    name: 'Step 3: ',
                    value:
                        'Download the modpack as stated in ' + channel,
                }
            );
        message.channel.send({ embeds: [embed] });
    },
}

export default command;