const r = require("better-tord");
module.exports = {
  name: "truth",
  aliases: ["t"],
  description: "Truth 😇.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const truth = r.get_truth();
    const embed = new Discord.MessageEmbed()
      .setTitle("😇 Truth")
      .setDescription(`${truth}`)
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
