// Imports
const Command = require('../../lib/command.js');

const no = '6';
const short = "In-game guidelines";
const long = `
    __Rule 6.1: Waystones__
        On this server waystones exist. They can be found naturally generated ontop of towers & just 
        randomly on the ground. They can't be broken, crafted or obtained. 
        
    __Rule 6.2: MyLoot chests__
       All loot chests are managed by a mod called MyLoot. The chests have loot for each player. 
       Therefore, loot chests may not be obstructed or broken.
`

module.exports = new Command({
    name: 'rule' + no,
    description: 'Print out Rule ' + no + '.',

    async run(message, args, bot) {
        await message.reply(`
        **Rule ${no}: ${short}** ${long}
        `);
    },
});