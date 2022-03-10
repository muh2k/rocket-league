const {MessageEmbed, Collection, Client, Discord, Permissions} = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
        name: "botinfo",
        aliases: ['stats'],
        category: "OwnerOnly",
        description: "[Botinfo] Shows The Bots Statistics",
        usage: "[Name]",
        run: async (client, message, args, prefix) => {

          const duration = moment
          .duration(client.uptime)
          .format(" D [days], H [hrs], m [mins], s [secs]");
    
          const embed = new MessageEmbed()
          .setAuthor("Site-76_v4 Info", client.user.avatarURL())
          .setColor("RANDOM")
          .setDescription(
            `**Bot Name: **Site-76 \n**Owner: **Muh2k \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
              client.users.cache.size
            } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
              client.channels.cache.size
            }`
          )
          .addField(
            "About Site-76-v4",
            "Site-76 is a bot developed mainly for site-76 but then whos invite was made public to help the community grow their own communitys"
          )
          .addField(
            "Some Useful Links",
            "****Muh has a github who knew?**** https://github.com/muh2k ****Want to join the site-76 server for support?**** https://dsc.gg/site-76-server"
          )
          .setFooter("Thank you from Muh as this bot doesnt have a development team because muh is lonely");
        message.channel.send({ embeds: [embed] });
      },
    };