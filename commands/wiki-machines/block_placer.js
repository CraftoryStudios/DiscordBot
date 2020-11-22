const { Command } = require('discord.js-commando');

const placerEmbed = {
  "description": "Block Placers are capable of placing blocks in their inventory in front of them. To do this they require energy, a place able block in their inventory and AIR in front of them. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/block-placer.html",
  "color": 6703525,
  "author": {
    "name": "Block Placer",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Block%20Placer.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'block-placer',
			aliases: ['placer'],
			group: 'wiki-machines',
			memberName: 'block-placer',
			description: 'Replies with a link to the block placer wiki.'
		});
	}

	run(message) {
		return message.say({ embed: placerEmbed });
	}
};