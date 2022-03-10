const {MessageEmbed, Collection, Client, Discord} = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const { ERROR_LOGS_CHANNEL } = require("./config.json");

const client = new Client({
    intents: 32767
});

module.exports = client;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.config = require("./config.json");




["command", "event"].forEach(handler => {
    require(`./Structures/${handler}`)(client);
});

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`)
  })


  


client.login(config.MyMumIsScary).then(() => {
    console.log(
        ` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `
    )});