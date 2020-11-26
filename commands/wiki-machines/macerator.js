const { Command } = require('discord.js-commando');

const maceratorEmbed = {
  "description": "Macerators are used to double ores and create dust! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/macerator.html",
  "color": 13278699,
  "author": {
    "name": "Macerator",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Macerator.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'macerator',
			aliases: ['macerator'],
			group: 'wiki-machines',
			memberName: 'macerator',
			description: 'Replies with a link to the macerator wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: maceratorEmbed });
	}
};