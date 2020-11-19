const { Command } = require('discord.js-commando');

module.exports = class TestCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'test',
			group: 'first',
			memberName: 'test',
			description: 'Replies with a test.',
		});
	}

	run(message) {
		return message.say('Test!');
	}
};