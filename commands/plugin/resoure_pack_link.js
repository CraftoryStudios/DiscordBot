const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'resourcePack',
			aliases: ['resourcePack'],
			group: 'wiki',
			memberName: 'resourcePack',
			description: 'Replies with a link to the resource pack.'
		});
	}

	run(message) {
		return message.say('https://github.com/CraftoryStudios/Craftory-TechResources/releases');
	}
};