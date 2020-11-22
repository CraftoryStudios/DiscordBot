const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'magnatisationTable',
			aliases: ['magTable'],
			group: 'machineWiki',
			memberName: 'magnatisationTable',
			description: 'Replies with a link to the Magnatisation Table wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/magnatisation-table.html');
	}
};