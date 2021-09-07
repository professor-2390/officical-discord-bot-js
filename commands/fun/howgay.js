module.exports = {
    name: "howgay",
    aliases: [],
    description: "How gay, wait what.",
    UserPerms: ["SEND_MESSAGES"],
    run: async (client, message, args, Discord) => {
      try {
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
          ) ||
          message.member;
        const simprate = Math.floor(Math.random() * 100);
        const embed = new Discord.MessageEmbed() // Prettier
          .setTitle(`:rainbow_flag: How gay?`)
          .setDescription(`${user.user.username} You're \`${simprate}% gay.\``)
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
  