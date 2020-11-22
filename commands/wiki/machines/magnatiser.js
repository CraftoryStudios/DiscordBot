const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'magnatiser',
			aliases: ['magnatiser'],
			group: 'machineWiki',
			memberName: 'magnatiser',
			description: 'Replies with a link to the magnatiser wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/magnatiser.html');
	}
};