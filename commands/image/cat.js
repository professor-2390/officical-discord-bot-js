const fetch = require("node-fetch");
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "cat",
  aliases: ["catto"],
  description: "Gives some cute catto pics.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    (async () => {
      try {
        const response = await fetch("https://nekos.life/api/v2/img/meow");
        const body = await response.json();
        const embed = new MessageEmbed() // Prettier
          .setTitle(
            `:smiley_cat: Random Cat`,
            message.guild.iconURL({
              dynamic: true,
              format: "png",
            })
          )
          .setImage(body.url)
          .setColor("RANDOM")
          .setFooter(
            "Requested by " +
              `${message.author.username}` +
              " • (Aww cute =＾´• ⋏ •`＾=)",
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
            description: `Something went wrong... :sob:}`,
          },
        });
      }
    })();
  },
};
