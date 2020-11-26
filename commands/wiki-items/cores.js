const { Command } = require('discord.js-commando');

const coresEmbed = {
  "description": "Cores are a crafting component allowing you to upgrade machines to a higher level. This allows your machines to run faster and use less energy. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/cores.html",
  "color": 4456703,
  "author": {
    "name": "Cores",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Cores.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'cores',
			aliases: ['cores'],
			group: 'wiki-items',
			memberName: 'cores',
			description: 'Replies with a link to the Cores wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: coresEmbed });
	}
};