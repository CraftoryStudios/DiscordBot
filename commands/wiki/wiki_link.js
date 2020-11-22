const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'wikilink',
			aliases: ['wiki'],
			group: 'wiki',
			memberName: 'wikilink',
			description: 'Replies with a link to the wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/');
	}
};