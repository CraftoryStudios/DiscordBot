const { Command } = require('discord.js-commando');

const waterEmbed  = {
  "description": "The Water Wheel is a passive generator. Like the Windmill you need to place a Rotary Generator and attach the windmill to the side of it. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/waterwheel.html",
  "color": 4886754,
  "author": {
    "name": "Water Wheel",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'water-wheel',
			aliases: ['water'],
			group: 'wiki-machines',
			memberName: 'water-wheel',
			description: 'Replies with a link to the Water Wheel wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: waterEmbed });
	}
};