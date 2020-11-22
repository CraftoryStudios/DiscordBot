const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'solidFuelGenerator',
			aliases: ['generator'],
			group: 'machineWiki',
			memberName: 'solidFuelGenerator',
			description: 'Replies with a link to the Solid Fuel Generator wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/solid-fuel-generator.html');
	}
};