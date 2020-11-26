const { Command } = require('discord.js-commando');

const drillEmbed = {
  "description": "A drill is a powered tool used to quickly break single blocks like a Pick-axe. Each drill is faster than their pick-axe equivalent and they do not break as they use energy rather than durability. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/drill.html",
  "color": 58367,
  "author": {
    "name": "Drill",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Drill.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'drill',
			aliases: ['drill'],
			group: 'wiki-items',
			memberName: 'drill',
			description: 'Replies with a link to the Drill wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: drillEmbed });
	}
};