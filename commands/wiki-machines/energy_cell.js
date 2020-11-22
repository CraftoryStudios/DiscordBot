const { Command } = require('discord.js-commando');

const cellEmbed = {
  "description": "Energy Cells are a core part of progression, as you begin to generate energy, you’ll want to store it so you can use it later, or to act as a buffer. This can allow you to build up a surplus of energy to use when you need to smelt on mass or any of action that required energy. They can also Charge up tools!! Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/energy-cell.html",
  "color": 4845196,
  "author": {
    "name": "Energy Cell",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Energy%20Cell.png"
  }
};


module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'energy-cell',
			aliases: ['cell'],
			group: 'wiki-machines',
			memberName: 'energy-cell',
			description: 'Replies with a link to the energy cell wiki.'
		});
	}

	run(message) {
		return message.say({ embed: cellEmbed });
	}
};