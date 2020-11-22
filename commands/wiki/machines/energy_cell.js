const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'energyCell',
			aliases: ['cell'],
			group: 'machineWiki',
			memberName: 'energyCell',
			description: 'Replies with a link to the energy cell wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/energy-cell.html');
	}
};