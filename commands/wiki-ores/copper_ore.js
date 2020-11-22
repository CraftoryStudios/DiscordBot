const { Command } = require('discord.js-commando');

const copperEmbed = {
  "description": "Copper Ore naturally generates around the world, it can be smelted into Copper Ingots or Macerated into Copper Dust. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/copper-ore.html",
  "color": 16098851,
  "author": {
    "name": "Copper Ore",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Copper%20Ore.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'copper-ore',
			aliases: ['copper'],
			group: 'wiki-ores',
			memberName: 'copper-ore',
			description: 'Replies with a link to the Copper Ore wiki.'
		});
	}

	run(message) {
		return message.say({ embed: copperEmbed });
	}
};