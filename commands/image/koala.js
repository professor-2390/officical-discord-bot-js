const axios = require("axios").default;
const Discord = require("discord.js");

module.exports = {
  name: "koala",
  aliases: [],
  description: "Cute koala pic 🐨.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const options = {
        method: "GET",
        url: "https://some-random-api.ml/img/koala",
      };
      axios.request(options).then((response) => {
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTitle(
            `🐨 KOALA`
          )
          .setImage(
              response.data.link 
          );
        message.reply({embeds : [embed]});
      });
    } catch (err) {
      message.reply({
        embed: {
          color: 16734039,
          description: `Something went wrong... :sob:`,
        },
      });
    }
  },
};
