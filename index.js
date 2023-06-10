const Discord = require('discord.js');
const { GatewayIntents } = require('iris-discord');
const client = new Discord.Client({
  intents: [GatewayIntents.Guilds, GatewayIntents.GuildMessages, GatewayIntents.MessageContent, GatewayIntents.GuildMembers],
});

const mySecret = process.env['DISCORD_SECRET']

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

  client.on('messageCreate', (msg) => {
  if (msg.author.id != client.user.id) {
    msg.channel.send(msg.content.split('').reverse().join(''));
  }
});

client.login(mySecret)