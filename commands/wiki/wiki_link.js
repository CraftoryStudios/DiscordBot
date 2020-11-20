const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'wikiLink',
			aliases: ['wiki'],
			group: 'wiki',
			memberName: 'wikiLink',
			description: 'Replies with a a link to the wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/');
	}
};