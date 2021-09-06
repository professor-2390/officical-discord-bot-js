const { MessageEmbed } = require("discord.js");
const axios = require("axios").default;
module.exports = {
  name: "panda",
  aliases: [],
  description: "Gives some cute panda pics.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const options = {
        method: "GET",
        url: "https://some-random-api.ml/img/panda",
      };
      axios.request(options).then((response) => {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `Requested by ${message.author.username} • (Cuteee)`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTitle(`:panda_face: Panda`)
          .setImage(response.data.link);
        message.channel.send({embeds: [embed]});
      });
    } catch (err) {
      message.channel.send({
        embed: {
          color: 16734039,
          description: `Something went wrong... :sob:`,
        },
      });
    }
  },
};
