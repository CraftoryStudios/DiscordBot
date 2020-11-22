const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'excavator',
			aliases: ['excavator'],
			group: 'itemWiki',
			memberName: 'excavator',
			description: 'Replies with a link to the Excavator wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/excavator.html');
	}
};