const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'blockPlacer',
			aliases: ['placer'],
			group: 'machineWiki',
			memberName: 'blockPlacer',
			description: 'Replies with a link to the block placer wiki.'
		});
	}

	run(message) {
		return message.say('https://craftory.studio/craftory-tech/wiki/block-placer.html');
	}
};