const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'wrench',
			aliases: ['wrench'],
			group: 'itemWiki',
			memberName: 'wrench',
			description: 'Replies with a link to the Wrench wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/wrench.html');
	}
};