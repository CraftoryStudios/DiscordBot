const { Command } = require('discord.js-commando');

const excavatorEmbed = {
  "description": "A Excavator is a powered tool used to quickly break a 3x3 area of soft blocks. The excavator is slower than a shovel but breaks up to 9 blocks at once. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/excavator.html",
  "color": 12118406,
  "author": {
    "name": "Excavator",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Excavator.png"
  }
};


module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'excavator',
			aliases: ['excavator'],
			group: 'wiki-items',
			memberName: 'excavator',
			description: 'Replies with a link to the Excavator wiki.'
		});
	}

	run(message) {
		return message.say({ embed: excavatorEmbed });
	}
};