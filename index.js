const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: '197773056557580288',
	invite: 'https://discord.gg/bRCvFy9',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['wiki', 'Commands related to wiki actions'],
		['wiki-machines', 'Commands related to machines on the wiki'],
		['wiki-ores', 'Commands related to ores on the wiki'],
		['wiki-items', 'Commands related to itmes on the wiki'],
		['plugin', 'Commands related to general plugin information']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('Crafting Craftory');
});

client.on('error', console.error);

client.login(process.env.token);