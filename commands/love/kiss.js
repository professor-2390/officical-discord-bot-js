const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kiss",
  aliases: ["kissing"],
  description: "Kiss mentioned user.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    const user =
      (await message.mentions.members.first()) ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) =>
          r.user.username.toLowerCase().includes() ===
          args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (r) =>
          r.displayName.toLowerCase().includes() ===
          args.join(" ").toLocaleLowerCase()
      );
    if (!user) {
      embed = new MessageEmbed().setDescription(`:broken_heart: | You must mention user to kiss ;-;\n\n**Usage:** \`${client.prefix}kiss <user>\``).setColor('DARK_PURPLE')
      return message.channel.send({embeds: [embed]});
    }
    if (message.author === user || message.member == user) {
      embed = new MessageEmbed().setDescription(`:broken_heart: | You cant kiss yourself ;-; (Try kissing someone else, your love. Maybe you need some help?)`).setColor('DARK_PURPLE')
      return await message.channel.send({embeds: [embed]});
    }
    (async () => {
      try {
        const response = await fetch("https://nekos.life/api/v2/img/kiss");
        const body = await response.json();
        const embed = new MessageEmbed() // Prettier
          .setAuthor(
            user.displayName +
              " Just got a kiss from " +
              message.author.username,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setDescription("So sweeet :3")
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
        message.channel.send({ embeds: [embed] });
      } catch (err) {
        message.channel.send({
          embed: {
            color: 16734039,
            description: `Something went wrong... ${client.bot_emojis.sadness}`,
          },
        });
      }
    })();
  },
};
