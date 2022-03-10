const {MessageEmbed, Collection, Client, Discord} = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const {ERROR_LOGS_CHANNEL} = require("./config.json");

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

  process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
  
    const exceptionembed = new MessageEmbed()
    .setTitle("Uncaught Exception")
    .setDescription(`${err}`)
    .setColor("RED")
    client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [exceptionembed] })
  });
  
  process.on("unhandledRejection", (reason, promise) => {
    console.log(
      "[FATAL] Possibly Unhandled Rejection at: Promise ",
      promise,
      " reason: ",
      reason.message
    );
  
     const rejectionembed = new MessageEmbed()
    .setTitle("Unhandled Promise Rejection")
    .addField("Promise", `${promise}`)
    .addField("Reason", `${reason.message}`)
    .setColor("RED")
    client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [rejectionembed] })
  });
  

client.login(config.MyMumIsScary).then(() => {
    console.log(
        ` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `
    )});