const { Command } = require('discord.js-commando');

const pluginEmbed = {
  "description": "Craftory sets out to extend and push the boundaries of vanilla Minecraft, offering features only thought possible before with Modded Minecraft. After installing the plugin, your players can join without having to install or do anything and experience all the amazing features Craftory has to offer.\n\nhttps://www.spigotmc.org/resources/craftory-tech.81151/",
  "color": 5035758,
  "author": {
    "name": "Craftory Spigot Page",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'plugin-link',
			aliases: ['plugin'],
			group: 'plugin',
			memberName: 'plugin-link',
			description: 'Replies with a link to the plugins spigot page.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: pluginEmbed });
	}
};