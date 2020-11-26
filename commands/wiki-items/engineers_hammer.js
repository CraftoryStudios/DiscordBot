const { Command } = require('discord.js-commando');

const engHammerEmbed = {
  "description": "A Engineers Hammer currently has one use, making Magnetised Iron. Craft it and hit a magnetisation table with iron on to forge magnetised iron! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/engineers-hammer.html",
  "color": 9079434,
  "author": {
    "name": "Engineers Hammer",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Engineers%20Hammer.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'engineers-hammer',
			aliases: ['enghammer'],
			group: 'wiki-items',
			memberName: 'engineers-hammer',
			description: 'Replies with a link to the Engineers Hammer wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: engHammerEmbed });
	}
};