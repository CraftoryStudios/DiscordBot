const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'configurator',
			aliases: ['config'],
			group: 'itemWiki',
			memberName: 'configurator',
			description: 'Replies with a link to the Configurator wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/configurator.html');
	}
};