const { Command } = require('discord.js-commando');

const magnatiserEmbed = {
  "description": "One of the core crafting components is Magnetised Iron, a magnatiser can be used to produce it. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/magnatiser.html",
  "color": 14787310,
  "author": {
    "name": "Magnatiser",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Magnatiser.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'magnatiser',
			aliases: ['magnatiser'],
			group: 'wiki-machines',
			memberName: 'magnatiser',
			description: 'Replies with a link to the magnatiser wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: magnatiserEmbed });
	}
};