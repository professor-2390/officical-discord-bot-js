const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "hug",
  aliases: ["hg"],
  description: "Hug mentioned user.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
      try {
        const user = message.mentions.users.first();
        if (!user) {
          return message.channel.send({
            embed: {
              color: 16734039,
              description: `${client.bot_emojis.error} | You must mention someone to hug!\n\n**Usage:** \`${process.env.PREFIX} hug <user>\``,
            },
          });
        }
        if (user == message.author) {
          return message.channel.send({
            embed: {
              color: 5294200,
              description: `${client.bot_emojis.grin} | You can't hug yourself but... Ok, get the hug from me ＼( ^o^ )／ !`,
            },
          });
        }
        if (user == client.user) {
          return message.channel.send({
            embed: {
              color: 5294200,
              description: `${client.bot_emojis.grin} | Oh, you tried to hug me but u can't... Im not real... But I can hug you ＼( ^o^ )／`,
            },
          });
        }
        const response = await fetch("https://nekos.life/api/v2/img/cuddle");
        const body = await response.json();
        const embed = new MessageEmbed() // Prettier
          .setTitle(
            user.username + " Just got a hug from " + message.author.username,
            message.guild.iconURL({
              dynamic: true,
              format: "png",
            })
          )
          .setImage(body.url)
          .setURL(body.url)
          .setColor("RANDOM")
          .setDescription(
            user.toString() + " got a hug from " + message.author.toString()
          )
          .setFooter(
            "Requested by " +
              `${message.author.username}` +
              " • (this is so cute ＼( ^o^ )／)",
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setTimestamp()
          .setURL(body.url);
        message.channel.send({ embeds: [embed] });
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
