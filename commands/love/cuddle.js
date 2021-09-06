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
          return message.channel.send({
            embed: {
              color: 16734039,
              description: `:grin: | You must mention user to cuddle!\n\n**Usage:** \`${process.env.PREFIX} cuddle <user>\``,
            },
          });
        }
        if (user == message.author) {
          return message.channel.send({
            embed: {
              color: 5294200,
              description: `:grin: | You can't cuddle yourself ;-;`,
            },
          });
        }
        if (user == client.user) {
          return message.channel.send({
            embed: {
              color: 5294200,
              description: `:grin: | Oh, you tried to hug me but u can't... Im not real...`,
            },
          });
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
