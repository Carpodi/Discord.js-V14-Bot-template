const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');
let prefix = config.prefix;
//client 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });
//Note: In the intents you must select the intents you want to use.

client.once('ready', () => {
	console.log('Client ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} 
});

    client.login(config.token);