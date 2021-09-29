const r = require("better-tord");
module.exports = {
  name: "dare",
  aliases: ["d"],
  description: "😈 dare.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const dare = r.get_dare();
    const embed = new Discord.MessageEmbed()
      .setTitle("😈 Dare")
      .setDescription(`${dare}`)
      .setColor("DARK_PURPLE")
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 2048,
        })
      )
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
