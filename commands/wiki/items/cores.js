const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'cores',
			aliases: ['cores'],
			group: 'itemWiki',
			memberName: 'cores',
			description: 'Replies with a link to the Cores wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/cores.html');
	}
};