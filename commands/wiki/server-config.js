const { Command } = require('discord.js-commando');

const configEmded = {
  "description": "You can change several things when looking at the Craftory config file. For example changing the plugins language. Learn more here!\n\nhttps://craftory.studio/craftory-tech/wiki/server-config.html",
  "color": 10579918,
  "author": {
    "name": "Server Config",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'server-config',
			aliases: ['servconfig'],
			group: 'wiki',
			memberName: 'server-config',
			description: 'Replies with a link to the server config page.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: configEmded });
	}
};