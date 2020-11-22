const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'drill',
			aliases: ['drill'],
			group: 'itemWiki',
			memberName: 'drill',
			description: 'Replies with a link to the Drill wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/drill.html');
	}
};