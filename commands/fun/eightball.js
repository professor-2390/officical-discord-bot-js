const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "eightball",
  aliases: ["8ball"],
  description: "Lets play 8ball :8ball:.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      if (!args.length)
        return message.channel.send({
          embed: {
            color: 16734039,
            description: `:8ball: | You need to enter question :/\n\n**Usage:** \`${client.prefix} 8ball <question>\``,
          },
        });
      const fortunes = [
        "Yes.",
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definelty.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now...",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good...",
        "Very doubtful.",
      ];
      const embed = new MessageEmbed() // Prettier
        .setTitle(
          `:8ball: | ${
            fortunes[Math.floor(Math.random() * fortunes.length)]
          }`
        )
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        );
      await message.channel.send({embeds: [embed]});
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
