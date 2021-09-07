const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "rolldice",
  aliases: [],
  description: "Lets roll a dice 🎲.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const answers = ["1", "2", "3", "4", "5", "6"];
      const dice = answers[Math.floor(Math.random() * answers.length)];
      const dicerolled = new Discord.MessageEmbed() // Prettier
        .setTitle(
          `🎲 | The dice rolled \`${dice}\``
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        );
      message.channel.send({embeds: [dicerolled]});
    } catch (err) {
      message.channel.send({
        embed: {
          color: 16734039,
          description: `Something went wrong... :sob:}`,
        },
      });
    }
  },
};
