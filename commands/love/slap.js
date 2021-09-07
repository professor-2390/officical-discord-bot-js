const {MessageEmbed} = require('discord.js')
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  aliases: ["slaping"],
  description: "Slap mentioned user.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    try {
      const member =
        (await await message.mentions.members.first()) ||
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
      if (!member) {
        embed = new MessageEmbed().setDescription(`:wave: | Mention someone to slap!\n\n**Usage:** \`${client.prefix}slap <user>\``).setColor('DARK_PURPLE')
        return await message.channel.send({embeds: [embed]});
      }
      if (message.author === member || message.member == member) {
        embed = new MessageEmbed().setDescription(`:expressionless: | Cant slap your self genius \n\n**Usage:** \`${client.prefix}slap <user>\``).setColor('DARK_PURPLE')
        return await message.channel.send({embeds: [embed]});
      }
      (async () => {
        const response = await fetch("https://nekos.life/api/v2/img/slap");
        const body = await response.json();
        const embed = await new MessageEmbed() // Prettier
          .setColor("RANDOM")
          .setTitle(
            member.user.username +
              " just got slapped by " +
              message.author.username
          )
          .setFooter(
            "That must hurt ._. | Requested by " + `${message.author.username}`,
            message.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 2048,
            })
          )
          .setImage(body.url);
        message.channel.send({embeds: [embed]});
      })();
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
