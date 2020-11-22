const { Command } = require('discord.js-commando');

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'pluginLink',
			aliases: ['plugin'],
			group: 'plugin',
			memberName: 'pluginLink',
			description: 'Replies with a link to the plugins spigot page.'
		});
	}

	run(message) {
		return message.say('https://www.spigotmc.org/resources/craftory-tech.81151/');
	}
};