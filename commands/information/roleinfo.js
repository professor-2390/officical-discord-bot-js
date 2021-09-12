const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "roleinfo",
  aliases: [],
  description: "Gives info about a role.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    if (!args[0]) return message.channel.send("**Please Enter A Role!**");
    const role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!role) return message.channel.send("**Please Enter A Valid Role!**");

    const status = {
      false: "No",
      true: "Yes",
    };

    const embed = new MessageEmbed()
      .setColor("DARK_PURPLE")
      .setAuthor("Role Info")
      .setThumbnail(message.guild.iconURL())
      .addField("**ID**", `\`${role.id}\``, false)
      .addField("**Name**", `\`${role.name}\``, false)
      .addField("**Hex**", `\`${role.hexColor}\``)
      .addField("**Members**", `\`${role.members.size}\``)
      .addField("**Mentionable**",`\`${status[role.mentionable]}\``)
      .setFooter(message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp();

    message.channel.send({embeds: [embed]});
  },
};
