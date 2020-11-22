const { Command } = require('discord.js-commando');

const configuratorEmbed = {
  "description": "The configurator has one function and that’s to copy the output side configs from one machine to the other, allowing mass placement of machines. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/configurator.html",
  "color": 16645948,
  "author": {
    "name": "Configurator",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Configurator.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'configurator',
			aliases: ['config'],
			group: 'wiki-items',
			memberName: 'configurator',
			description: 'Replies with a link to the Configurator wiki.'
		});
	}

	run(message) {
		return message.say({ embed: configuratorEmbed });
	}
};