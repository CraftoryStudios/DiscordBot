const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'electricFurnance',
			aliases: ['furnance'],
			group: 'machineWiki',
			memberName: 'electricFurnance',
			description: 'Replies with a link to the electric furnace wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/electric-furnace.html');
	}
};