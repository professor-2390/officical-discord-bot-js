const fetch = require("node-fetch");
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: "baka",
  aliases: [],
  description: "BAKA!!",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    (async () => {
      try {
        const response = await fetch("https://nekos.life/api/v2/img/baka");
        const body = await response.json();
        const embed = new Discord.MessageEmbed() // Prettier
          .setTitle(
            `:rage: Baka!`,
            message.guild.iconURL({
              dynamic: true,
              format: "png",
            })
          )
          .setImage(body.url)
          .setColor("DARk_PURPLE")
          .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTimestamp()
          .setURL(body.url);
        message.channel.send({embeds: [embed]});
      } catch (err) {
        message.channel.send({
          embed: {
            color: 16734039,
            description: `Something went wrong... :sob:`,
          },
        });
      }
    })();
  },
};
