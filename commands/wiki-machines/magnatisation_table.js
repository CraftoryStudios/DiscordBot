const { Command } = require('discord.js-commando');

const magTableEmbed = {
  "description": "The Magnetising Table is a manual version that requires no Energy. A Engineers Hammer is used to hit it and progress the crafting. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/magnatisation-table.html",
  "color": 5004670,
  "author": {
    "name": "Magnatisation Table",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Magnatisation%20Table.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'magnatisation-table',
			aliases: ['table'],
			group: 'wiki-machines',
			memberName: 'magnatisation-table',
			description: 'Replies with a link to the Magnatisation Table wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: magTableEmbed });
	}
};