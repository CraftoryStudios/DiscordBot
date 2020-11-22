const { Command } = require('discord.js-commando');

const sickleEmbed = {
  "description": "A Sickle tool can be used to destory large areas of annoy Tall Grass, or harvest crops, plants and flowers. Learn more here. \n\n https://craftory.studio/craftory-tech/wiki/sickle.html",
  "color": 9131818,
  "author": {
    "name": "Sickle",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Sickle.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'sickle',
			aliases: ['sickle'],
			group: 'wiki-items',
			memberName: 'sickle',
			description: 'Replies with a link to the Sickle wiki.'
		});
	}

	run(message) {
		return message.say({ embed: sickleEmbed });
	}
};