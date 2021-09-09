const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cuddle",
  aliases: ["cuddling"],
  description: "Cuddles mentioned user.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    (async () => {
      try {
        const user = message.mentions.users.first();
        if (!user) {
          const embed = new MessageEmbed()
          .setDescription(`:grin: | You must mention user to cuddle!\n\n**Usage:** \`${client.prefix} cuddle <user>\``).setColor("DARK_PURPLE")
          return message.channel.send({embeds: [embed]});
        }
        if (user == message.author) {
          const embed = new MessageEmbed()
          .setDescription(`:grin: | You can't cuddle yourself ;-;`).setColor("DARK_PURPLE")
          return message.channel.send({embeds: [embed]});
        }
        if (user == client.user) {
          const embed = new MessageEmbed()
          .setDescription(`:grin: | Oh, you tried to hug me but u can't... Im not real...`).setColor("DARK_PURPLE")
          return message.channel.send({embeds: [embed]});
        }
        const response = await fetch("https://nekos.life/api/v2/img/cuddle");
        const body = await response.json();
        const embed = new MessageEmbed() // Prettier
          .setTitle(
            user.username +
              " Just got a cuddle from " +
              message.author.username,
            message.guild.iconURL({
              dynamic: true,
              format: "png",
            })
          )
          .setImage(body.url)
          .setColor("RANDOM")
          .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTimestamp()
          .setURL(body.url);
        message.channel.send({embeds: [embed]});
      } catch (err) {
        message.channel.send({
          embed: {
            color: 16734039,
            description: `Something went wrong... :sob:`,
          },
        });
      }
    })();
  },
};
