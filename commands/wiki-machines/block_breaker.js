const { Command } = require('discord.js-commando');

const breakerEmbed = {
  "description": "Block Breakers, as the name suggested can be used to automatically break blocks. Great for automation and many other things. When placed they can be trigger by pulsing a redstone signal, as long as there is a valid block in front and they have enough power, they will break it and return the result. Learn more here.\n\n https://craftory.studio/craftory-tech/wiki/block-breaker.html",
  "color": 10197915,
  "author": {
    "name": "Block Breaker",
    "icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
  },
  "thumbnail": {
    "url": "https://craftory.studio/assets/craftory-tech/renders/Block%20Breaker.png"
  }
};

module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			name: 'block-breaker',
			aliases: ['breaker'],
			group: 'wiki-machines',
			memberName: 'block-breaker',
			description: 'Replies with a link to the block breaker wiki.'
		});
	}

	run(message) {
		return message.say({ embed: breakerEmbed });
	}
};