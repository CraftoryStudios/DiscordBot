// Imports the discord.js-commando library which is required for commands to work. 
const { Command } = require('discord.js-commando');

const Embed = {
	/* This is the main body of the embedded message. The \n character will
	add new lines for extra space in the command. */
	"description": "React to this message to get the Notify role. \nReact to this message to get the Notify role. \nWe will still Notify all of important updates, but this role will notify you on release of new DevLogs and additional resources!",
	
	// The color of the embed is in a decimal format.
	"color": 3077393,
};

client.on("message", async message => {
    // Checking if the message author is a bot.
    if (message.author.bot) return false;

    // Getting the role by ID.
	let channel = message.guild.channels.cache.get("732162017955414057");
    const role1 = message.guild.roles.cache.get(channel);

    // Creating a filter.
    const filter = (reaction, user) => user.id == message.author.id;

    // Awaiting for the embed message to be sent.
    const reactionMessage = await message.channel.get(channel).send(Embed);

    // Reacting to the embed message.
    await reactionMessage.react("📢");

    // Awaiting a reaction to the embed message. Time is measured in ms. (3000 ms - 3 seconds)
    reactionMessage.awaitReactions(filter, {max: 1, time: 3000, errors: ["time"]}).then(collected => {
        // Getting the first reaction in the collection.
        const reaction = collected.first();
        
        // Creating a switch statement for reaction.emoji.name.
        switch (reaction.emoji.name) {
            case "📢":
                // Checking if the member already has the role.
                if (message.member.roles.cache.has(role1.id)) {return user.send("You already subscribed to the Notify role in Craftory")};
                // Adding the role.
                message.member.roles.add(role1).then(user.send("You are now subscribed to Craftory devlogs!"))
                // Breaking the switch statement to make sure no other cases are executed.
                break
        }
    })
});