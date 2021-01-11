const { Command } = require('discord.js-commando');

const windmillEmbed(issuedBy)  = {
  "description": "The Windmill is a passive generator. Like the Water Wheel you need to place a Rotary Generator and attach the windmill to the side of it. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/waterwheel.html",
  "color": 16645629,
  "author": {
    "name": "Windmill",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg?1594072221"
  },
  "footer": {
	"text": "Issued by: " + issuedBy  
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'windmill',
			aliases: ['wind'],
			group: 'wiki-machines',
			memberName: 'windmill',
			description: 'Replies with a link to the Windmill wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: windmillEmbed(message.author.username) });
	}
};