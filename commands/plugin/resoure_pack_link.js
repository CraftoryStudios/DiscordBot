const { Command } = require('discord.js-commando');

const resourcePackEmbed = {
  "description": "If you are going to use craftory with another resource pack on your server. You will need to merge the two resource packs. Download the Craftory resource pack and learn more here.\n\nhttps://github.com/CraftoryStudios/Craftory-TechResources",
  "color": 3077393,
  "author": {
    "name": "Craftory Resource Pack",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'resource-pack',
			aliases: ['resource-pack'],
			group: 'plugin',
			memberName: 'resource-pack',
			description: 'Replies with a link to the resource pack.'
		});
	}

	run(message) {
		return message.say({ embed: resourcePackEmbed });
	}
};