const { MessageEmbed } = require("discord.js");
const progressbar = require("percentagebar");

module.exports = {
  name: "ship",
  aliases: [],
  description: "Find your true love :heart:.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    try {
      const user1 = args[0];
      if (!user1) {
          const embed = new MessageEmbed().setDescription(`:x: | Please mention a first user to ship!\n\n**Usage:** \`${client.prefix}ship <user> <user>\``).setColor("DARK_PURPLE")
          return message.reply({embeds: [embed]});
      }
      const user2 = args[1];
      if (!user2) {
        const embed = new MessageEmbed().setDescription(`:x: | Please mention a secound user to ship!\n\n**Usage:** \`${client.prefix}ship <user> <user>\``).setColor("DARK_PURPLE")
        return message.reply({embeds: [embed]});
      }
      const ship = Math.floor(Math.random() * 100) + 1;
      const bar = progressbar(
        100,
        ship,
        10,
        `:red_square:`,
        `:red_square:`,
        `:broken_heart:`,
        `:heart:`,
        false
      );
      const mehh = new Discord.MessageEmbed() // Prettier
        .setTitle(
          `💔 This isn't a match`,
          message.guild.iconURL({
            dynamic: true,
            format: "png",
          })
        )
        .setThumbnail(
          "https://cdn.discordapp.com/emojis/853644938867769454.gif?v=1"
        )
        .setDescription(
          `I shipped **${user1}** with **${user2}** and it is **${ship}%**\n${bar}`
        )
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        )
        .setTimestamp()
        .setColor("RED");
      const love = new Discord.MessageEmbed() // Prettier
        .setTitle(
          `:heart: They are born for each others!`,
          message.guild.iconURL({
            dynamic: true,
            format: "png",
          })
        )
        .setThumbnail(
          "https://cdn.discordapp.com/emojis/797365365595439104.gif?v=1"
        )
        .setDescription(
          `I shipped **${user1}** with **${user2}** and it is **${ship}%**\n${bar}`
        )
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        )
        .setTimestamp()
        .setColor("GREEN");
      if (ship > 50) {
        message.reply({embeds: [love]});
      } else {
        message.reply({embeds: [mehh]});
      }
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
