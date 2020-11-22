const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'sickle',
			aliases: ['sickle'],
			group: 'itemWiki',
			memberName: 'sickle',
			description: 'Replies with a link to the Sickle wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/sickle.html');
	}
};