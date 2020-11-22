const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'copperOre',
			aliases: ['copper'],
			group: 'oreWiki',
			memberName: 'copperOre',
			description: 'Replies with a link to the Copper Ore wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/wrench.html');
	}
};