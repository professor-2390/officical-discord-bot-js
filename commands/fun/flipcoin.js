module.exports = {
  name: "flipcoin",
  aliases: ["fcoin"],
  description: "Flips a coin.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const answers = ["Heads", "Tails"];
      const answer = answers[Math.floor(Math.random() * answers.length)];
      const embed = new Discord.MessageEmbed() // Prettier
        .setColor("RANDOM")
        .setTitle(`:coin: | I got: ${answer}`)
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        )
        .setTimestamp();
      message.channel.send({embeds:[embed]});
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
