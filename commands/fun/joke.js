const fetch = require("node-fetch");

module.exports = {
  name: "joke",
  aliases: ["dad-jk", "dad-joke"],
  description: "Tells a dad joke you make you laugh.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    (async () => {
      try {
        const response = await fetch("http://icanhazdadjoke.com/", {
          method: "get",
          headers: {
            Accept: "application/json",
          },
        });
        const body = await response.json();
        const embed = new Discord.MessageEmbed() // Prettier
          .setTitle("Random Dad joke", message.guild.iconURL())
          .setDescription("Dad said: " + body.joke)
          .setColor("RANDOM")
          .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTimestamp();
        message.channel.send({embeds: [embed]});
      } catch (err) {
        message.channel.send({
          embed: {
            color: 16734039,
            description: `Something went wrong... ${client.bot_emojis.sadness}`,
          },
        });
      }
    })();
  },
};
