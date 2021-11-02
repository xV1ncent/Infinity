const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILD_MEMBERS"] })



client.once('ready', () => {
    console.log('Infinity Music status = online.')
});

client.login('OTA1MTM0MzMyNzY1Njc5NjU2.YYFqCQ.q1JboeaGBaIZz4bAR-4FyJ734nc');
