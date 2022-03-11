// Imports
import { MessageEmbed } from 'discord.js';
import { Power } from './power';

export class Origin {
    public name: string;
    public player: string;
    public impact: string;
    public description: string;
    public author: string;
    public src: string;
    public actives: Power[];
    public pros: Power[];
    public passives: Power[];
    public cons: Power[];

    /**
     * @typedef {{name: string, player: string, impact: string, description: string, author: string, src: string, actives: Power[], pros: Power[], passives: Power[], cons: Power[]}} Data
     * @param {Data} data
     */
    constructor(data) {
        this.name = data.name;
        this.player = data.player;
        this.impact = data.impact;
        this.description = data.description;
        this.author = data.author;
        this.src = data.src;

        this.actives = data.actives;
        this.pros = data.pros;
        this.passives = data.passives;
        this.cons = data.cons;
    }

    public static getEmbed(origin: Origin) {
        let embed = new MessageEmbed()
            .setTitle(origin.name)
            .setColor('RANDOM')
            .addField('Impact: ', Origin.visualizeImpact(origin.impact))
            .addField('Made by: ', origin.author)
            .addField('Description: ', origin.description);

        let power;
        origin.actives.forEach((power) => {
            embed.addField(
                ':green_circle: ' + power.name + ' (Active) ',
                power.description
            );
        });

        origin.pros.forEach((power) => {
            embed.addField(
                ':green_circle: ' + power.name + ' ',
                power.description
            );
        });

        origin.passives.forEach((power) => {
            embed.addField(
                ':yellow_circle: ' + power.name + ' ',
                power.description
            );
        });

        origin.cons.forEach((power) => {
            embed.addField(
                ':red_circle: ' + power.name + ' ',
                power.description
            );
        });

        if (origin.src != '') embed.setFooter('Source code: ' + origin.src);
        return embed;
    }

    private static visualizeImpact(impact: string) {
        switch (impact) {
            case '2': return ':yellow_circle: :yellow_circle:';
            case '3': return ':orange_circle: :orange_circle: :orange_circle:';
            default: return ':green_circle:';
        }
    }
}