const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'foundry',
			aliases: ['foundry'],
			group: 'machineWiki',
			memberName: 'foundry',
			description: 'Replies with a link to the foundry wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/foundry.html');
	}
};