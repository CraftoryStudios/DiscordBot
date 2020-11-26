// Imports the discord.js-commando library which is required for commands to work. 
const { Command } = require('discord.js-commando');

/* Define the contents and structure of embedded message for bot response.
Colour Codes for embed messages are in decimal format, see bellow website for help:
https://leovoel.github.io/embed-visualizer/ 
https://convertingcolors.com/ */
const exampleEmbed = {
	/* This is the main body of the embedded message. The \n character will
	add new lines for extra space in the command. */
	"description": "This is the Craftory Bot command template. If you are wanting to help improve the bot learn more here. \n\nNOTE: This command will be removed in 5 seconds! \n\nhttps://github.com/CraftoryStudios/DiscordBot",
	
	// The color of the embed is in a decimal format.
	"color": 3077393,
	
	// The author is what the smaller icon and name is under.
	"author": {
		
		/* name - Is what is reported when the command is issued.
				  The name much be what the command is about. 
				  
				  For example: Becasue this is the example command the name will be Example Command. */
		"name": "Example Command",
		
		/* icon_url - Is the small icon that appears next to the name field. To change
					  just replace the the link below with the direct image url. 
					  
					  NOTE: The url must end with the image file extension. */
		"icon_url": "https://cdn.discordapp.com/attachments/731820462119714828/780132122055933952/icon.png"
	},
	
	// Thumbnails are the larger image to the right of the embed body.
	"thumbnail": {
		
		/* url - Will be the direct link to the image. It must be related
		         to the command. Which a good default for commands that 
		         dont have a direct image like the plugins permissions you can
		         just use the image from the spigot page. 
				 
		    	 NOTE: The url must end with the image file extension. */
		"url": "https://www.spigotmc.org/data/resource_icons/81/81151.jpg"
	}
};

// Create the command by calling command's client.
// NOTE: All command fields must be in lower case!
module.exports = class WikiLink extends Command {
	constructor(client) {
		super(client, {
			/* name - Command called in discord messages. 
					  For example: ?example-command is how a user will issue this command. */
			name: 'example-command',
			
			/* aliases - Can be set to a shorter version of the commands name
						 For example: ?excmd will issue ?example-command with a shorter name. */
			aliases: ['excmd'],
			
			/* group - Needs to be the same as parent folders name.
					   For example: This command is named command-template so the group needs
									to be command-template. */
			group: 'command-template',
			
			/* memberName - Is just the name of the command when listing the commands
							in a group. Recommend to just set to the same name as the
							command. */
			memberName: 'resource-pack',
			
			/* description - This is what is returned when asking the bot to return all
							 commands. Can be something simple or very detailed. */
      
			description: 'Replies with a link to the resource pack.',
			
			/* throttling - This controlls the amount of times a command can be issued in a
							a row and the amount of time till the command can  be issues again. */
			throttling: {
				// useage - How many times a command can be used in a row
				usages: 1,
				
				// duration - The time a user must wait between issuing the command. In seconds. 
				duration: 10,
			}
		});
	}

	// Once the command is issued this will make the bot return the needed message
	run(message) {
		
		/* Returns the message calling exampleEmbed to have the message with an embed.
					NOTE: You will only need to have:
						  return message.say({ embed: exampleEmbed }); 
						  The .then part after the message.say is only for this template to auto
						  remove the embed because this is not a real command. */
		return message.say({ embed: exampleEmbed }).then(msg => {msg.delete({ timeout: 5000 }) });
	}
};