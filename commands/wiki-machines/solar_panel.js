const { Command } = require('discord.js-commando');

const solarEmbed  = {
  "description": "Solar Panels produce energy from sunlight. To work they need the sun to be up and have direct line of sight to the sky. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/solar-panel.htmls",
  "color": 1466470,
  "author": {
    "name": "Solar Panel",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Solar%20Panel.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'solar-panel',
			aliases: ['solar'],
			group: 'wiki-machines',
			memberName: 'solar-panel',
			description: 'Replies with a link to the Solar Panel wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: solarEmbed });
	}
};