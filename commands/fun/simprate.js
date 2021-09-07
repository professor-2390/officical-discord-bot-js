module.exports = {
  name: "simprate",
  aliases: ["srate"],
  description: "Measures your simprate.",
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
      const simprate = Math.floor(Math.random() * 226);
      const embed = new Discord.MessageEmbed() // Prettier
        .setTitle(`:stuck_out_tongue_winking_eye: Simprate Test`)
        .setDescription(`${user.user.username} Your simprate: \`${simprate}%\``)
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
