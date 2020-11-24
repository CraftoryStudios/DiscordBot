const { Command } = require('discord.js-commando');

const wrenchEmbed = {
  "description": "A Wrench is a handy tool with multiple functions. It can be used to pick up Energy blocks with Energy inside, connect Power Grids and more. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/wrench.html",
  "color": 9442302,
  "author": {
    "name": "Wrench",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Wrench.png"
  }
};


module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'wrench',
			aliases: ['wrench'],
			group: 'wiki-items',
			memberName: 'wrench',
			description: 'Replies with a link to the Wrench wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: wrenchEmbed });
	}
};