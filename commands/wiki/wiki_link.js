const { Command } = require('discord.js-commando');

const wikiEmbed = {
  "description": "Craftory Tech is a plugin for Spigot Minecraft that brings new exciting mod like technology-based features to the game without any client-side mods. Learn more on our wiki!\n\nhttps://craftory.studio/craftory-tech/",
  "color": 884713,
  "author": {
    "name": "Craftory Wiki",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'wikilink',
			aliases: ['wiki'],
			group: 'wiki',
			memberName: 'wikilink',
			description: 'Replies with a link to the wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: wikiEmbed });
	}
};