const { Command } = require('discord.js-commando');

const furnaceEmbed = {
  "description": "Electric Furnaces perform all functions of a normal Minecraft furnace, but require power rather than fuel. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/electric-furnace.html",
  "color": 6703525,
  "author": {
    "name": "Electric Furnace",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Electric%20Furnace.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'electric-furnance',
			aliases: ['furnance'],
			group: 'wiki-machines',
			memberName: 'electric-furnance',
			description: 'Replies with a link to the electric furnace wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: furnaceEmbed });
	}
};