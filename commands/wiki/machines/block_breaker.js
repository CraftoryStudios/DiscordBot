const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'blockBreaker',
			aliases: ['breaker'],
			group: 'machineWiki',
			memberName: 'blockBreaker',
			description: 'Replies with a link to the block breaker wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/block-breaker.html');
	}
};