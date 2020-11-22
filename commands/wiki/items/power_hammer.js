const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'powerHammer',
			aliases: ['hammer'],
			group: 'itemWiki',
			memberName: 'powerHammer',
			description: 'Replies with a link to the Power Hammer wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/power-hammer.html');
	}
};