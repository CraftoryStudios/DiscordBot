const { Command } = require("discord.js-commando");
const admin = require("firebase-admin");
const { MessageEmbed } = require('discord.js');
const trelloNode = require("trello-node-api")(
  process.env.apiKey,
  process.env.oauthToken
);

module.exports = class WikiLink extends Command {
  constructor(client) {
    super(client, {
      name: "suggest",
      aliases: ["suggestion", "idea"],
      group: "suggestions",
      memberName: "suggest",
      description: "Allows users to make feature suggestions",
      args: [
        {
          key: "title",
          prompt: "What is the title of your suggestion?",
          type: "string"
        },
        {
          key: "description",
          prompt: "What is the description of your suggestion?",
          type: "string"
        }
      ]
    });
  }

  run(message, { title, description }) {
    const embed = new MessageEmbed()
            .setTitle(title + "  [Pending]")
            .setDescription(description)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor(0x00AE86)
            .setTimestamp();
    message.embed(embed).then((sentMessage) => {
      const sentEmbed = sentMessage.embeds[0];
      const sentEmbedCopy = new MessageEmbed(sentEmbed);
      
      sentEmbedCopy.setFooter("ID:" + sentMessage.id);
      sentMessage.edit(sentEmbedCopy).then(msg => {
        msg.react("⬆️");
        msg.react("⬇️");
      });
      
      var data = {
        name: title,
        desc: description,
        pos: 'top',
        idList: '5fbbe28f30271622a6de89e4'
      };
      trelloNode.card.create(data).then(function (response) {
          console.log('response ', response);
      }).catch(function (error) {
          console.log('error', error);
      });
      
    });
  }
};
