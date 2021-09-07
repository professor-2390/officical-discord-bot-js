const axios = require("axios").default;
const Discord = require("discord.js");

module.exports = {
  name: "bottoken",
  aliases: [],
  description: "Discord bot token for this bot",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const options = {
        method: "GET",
        url: "https://some-random-api.ml/bottoken",
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
            `🤖 Discord Bot Token`
          )
          .setDescription(
            "```" +
              response.data.token +
              "\n\n```||Notice: This token is automatically generated, it is not a real token for discord bot! It is only supposed to look like this!||"
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
