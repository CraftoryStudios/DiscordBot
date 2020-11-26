const { Command } = require('discord.js-commando');

const generatorEmbed  = {
  "description": "The Solid Fuel Generator burns fuel like a furnace to generate energy, this can be used to power machines, stored in cells, or distributed across a Power Grid. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/solid-fuel-generator.html",
  "color": 4510943,
  "author": {
    "name": "Solid Fuel Generator",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Solid%20Fuel%20Generator.png"
  }
};


module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'generator',
			aliases: ['generator'],
			group: 'wiki-machines',
			memberName: 'solid-fuel-generator',
			description: 'Replies with a link to the Solid Fuel Generator wiki.',
			throttling: {
				usages: 1,
				duration: 10,
			}
		});
	}

	run(message) {
		return message.say({ embed: generatorEmbed });
	}
};