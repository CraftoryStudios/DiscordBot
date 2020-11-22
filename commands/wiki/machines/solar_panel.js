const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'solarPanel',
			aliases: ['solar'],
			group: 'machineWiki',
			memberName: 'solarPanel',
			description: 'Replies with a link to the Solar Panel wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/solar-panel.html');
	}
};