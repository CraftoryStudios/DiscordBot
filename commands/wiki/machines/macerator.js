const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'macerator',
			aliases: ['macerator'],
			group: 'machineWiki',
			memberName: 'macerator',
			description: 'Replies with a link to the macerator wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/macerator.html');
	}
};