const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'engineersHammer',
			aliases: ['engHammer'],
			group: 'itemWiki',
			memberName: 'engineersHammer',
			description: 'Replies with a link to the Engineers Hammer wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/engineers-hammer.html');
	}
};