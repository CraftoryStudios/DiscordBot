const { Command } = require('discord.js-commando');

const foundryEmbed = {
  "description": "Foundries are used to combine two materials together. Currently their only use is the production of steel from Iron Ingots and Charcoal or Coal Dust. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/foundry.html",
  "color": 4845196,
  "author": {
    "name": "Foundry",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Foundry.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'foundry',
			aliases: ['foundry'],
			group: 'wiki-machines',
			memberName: 'foundry',
			description: 'Replies with a link to the foundry wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: foundryEmbed });
	}
};