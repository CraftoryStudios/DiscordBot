const { Command } = require('discord.js-commando');

const powerHammerEmbed = {
  "description": "A Power Hammer is a powered tool used to quickly break a 3x3 area of stone like blocks. Each Power Hammer is slower than their pick-axe equivalent as they break 9 blocks at once. They do not break as they use energy rather than durability. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/power-hammer.html",
  "color": 12390624,
  "author": {
    "name": "Power Hammer",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Power%20Hammer.png"
  }
};


module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'power-hammer',
			aliases: ['hammer'],
			group: 'wiki-items',
			memberName: 'power-hammer',
			description: 'Replies with a link to the Power Hammer wiki.'
		});
	}

	run(message) {
		return message.say({ embed: powerHammerEmbed });
	}
};