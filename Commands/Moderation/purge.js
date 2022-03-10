const {MessageEmbed, Collection, Client, Discord, Permissions} = require('discord.js');


module.exports = {
    name: "purge",
    category: "moderation",
    description: "purges a number of messages",
    usage: "[name | number]",
    aliases: ["p"],

    run: async (client, message, args, prefix) => {
  

        if (!message.member.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)) return message.channel.send("**You Do Not Have The Secret! - [PRIORITY_SPEAKER]**");
        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send("**I Do Not Have Permissions To Kick Members! - [MANAGE_MESSAGES]**");
     
            const fetched = message.channel || message.mentions.members.first();
            let messageArray = message.content.split(" ");
            const amount = parseInt(args[0]) + 1;
        
            if (isNaN(amount)) {
              return message.channel.send(
                `${message.author.username}, you can only purge messages from 1-99`
              );
            } else if (amount <= 1 || amount > 100) {
              return message.channel.send(
                `${message.author.username}, you can only purge messages from 1-99`
              );
            }
        
            fetched.bulkDelete(amount, true);
            fetched.bulkDelete(amount);
          
        



}}