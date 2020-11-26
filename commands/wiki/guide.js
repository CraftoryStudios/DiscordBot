const { Command } = require('discord.js-commando');

const guideEmbed = {
  "description": "Need help getting started or just needing to look catch up on the plugin. Here is the official Craftory guide.\n\nhttps://craftory.studio/craftory-tech/wiki/getting-started.html",
  "color": 12314511,
  "author": {
    "name": "Getting Started",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'guide',
			aliases: ['guide'],
			group: 'wiki',
			memberName: 'guide',
			description: 'Replies with a link to the getting stated page.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: guideEmbed });
	}
};