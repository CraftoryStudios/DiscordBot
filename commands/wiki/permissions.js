const { Command } = require('discord.js-commando');

const permissionsEmbed = {
  "description": "Here is a list of all current permissions that craftory has to offer. \n\nhttps://craftory.studio/craftory-tech/wiki/permissions.html",
  "color": 8156547,
  "author": {
    "name": "Permissions",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'permissions',
			aliases: ['perms'],
			group: 'wiki',
			memberName: 'permissions',
			description: 'Replies with a link to the permissions page.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: permissionsEmbed });
	}
};