const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const admin = require("firebase-admin");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

// --Express Setup --
const trelloNode = require("trello-node-api")(
  process.env.apiKey,
  process.env.oauthToken
);

var app = express();
app.use(bodyParser.json());

// --Database Connection--
admin.initializeApp({
	credential: admin.credential.cert(JSON.parse(Buffer.from(process.env.FIREBASE, 'base64').toString('ascii'))),
	databaseURL: "https://discord-bot-d78e8.firebaseio.com"
  });


// --Discord Bot --

/* Set up the bot to report on the craftory discord and with the ? as a
listener for commands. */
const client = new CommandoClient({
	commandPrefix: '?',
	owner: '197773056557580288',
	invite: 'https://discord.gg/bRCvFy9',
});

/* Register any needed groups for the commands
   NOTE: If you add any folder with commands make sure to
   add the new folder here and a decent description.*/
client.registry
	.registerDefaultTypes()
	.registerGroups([
		// foldername, description
		['command-template','Example command to help with new command creation'],
		['wiki', 'Commands related to wiki actions'],
		['wiki-machines', 'Commands related to machines on the wiki'],
		['wiki-ores', 'Commands related to ores on the wiki'],
		['wiki-items', 'Commands related to itmes on the wiki'],
		['plugin', 'Commands related to general plugin information'],
    ['suggestions', 'Commands related to suggesting features']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

/* Once the bot is initialized report in console and set the bots
   activity as needed. */
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('Crafting Craftory');
});

// Read all incoming messages and remove any message needed
client.on('message', message => {
	// Remove messages that start with ? after 1 second
	if (message.content.startsWith("?")) {
		message.delete({timeout: 1000});
    }
});

// Write any errors to console
client.on('error', console.error);

// Login to the discords using a env 
client.login(process.env.token);


// -- Trello Webhooks --
var membersWithMovePerms = ["5fbbe18d51c6e95712a480b6"];
var lockedLists = ["5fbbe28f30271622a6de89e4"];

//Webhook
app.all("/trello", function(req, res, next) {
  if (
    req.body.action.type === "updateCard" &&
    req.body.action.display.translationKey ===
      "action_move_card_from_list_to_list" &&
    !membersWithMovePerms.includes(req.body.action.idMemberCreator) &&
    (lockedLists.includes(req.body.action.data.listBefore.id) ||
      req.body.action.data.listAfter.id === "5fbbe28f30271622a6de89e4")
  ) {
    var data = {
      idList: req.body.action.data.listBefore.id
    };
    trelloNode.card
      .update(req.body.action.data.card.id, data)
      .then(function(response) {
        //console.log('response ', response);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }
  res.send("OK");
});

//Required to stay awake
app.get('/ping',(req,res) => {
  return res.send('Hello');
  });

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});