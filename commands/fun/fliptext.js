const { MessageEmbed } = require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  aliases: [],
  description: "Flips some text.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      if (!args[0]) {
        return message.channel.send({
          embed: {
            color: 16734039,
            description: `✉ | You must provide a text!\n\n**Usage:** \`${client.prefix} fliptext <text>\``,
          },
        });
      }
      if (args.lenght > 50)
        return message.channel.send({
          embed: {
            color: 16734039,
            description: `✉ | The text can't be longer than 50 characters!`,
          },
        });
      var flipped = [];
      args.forEach((arg) => {
        flipped.push(flip(arg));
      });
      const embed = new MessageEmbed() // Prettier
        .setColor("RANDOM")
        .addField(`🔙 | Flipped text`, "```" + flipped.join(" ") + "```")
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        )
        .setTimestamp();
      await message.channel.send({ embeds: [embed] });
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
