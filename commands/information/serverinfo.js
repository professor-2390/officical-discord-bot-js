const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "serverinfo",
  aliases: ["sinfo"],
  description: "Gives you info about the guild.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
      .setTitle(message.guild.name, message.guild.iconURL)
      .setDescription(message.guild.description || "No description found")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setImage(message.guild.bannerURL({ dynamic:true }))
      .addField("Verification Level:", `**${message.guild.verificationLevel}**`, true)
      .addField("Server Created At:",
      `${moment(message.guild.createdAt).format(
          "MMMM Do YYYY, h:mm:ss a"
          )}\n**-** ${moment(message.guild.createdAt).startOf("day").fromNow()}`, true
          )
      .addField("Total Members:", `**${message.guild.memberCount}**`, true)
      .addField("NSFW Level:", `**${message.guild.nsfwLevel}**`, true)
      .addField("Server Owner:", `**<@${message.guild.ownerId}>**`, true)
      .addField("Server ID:", `${message.guild.id}`, true)
      .addField("Highest Role:", `${message.guild.roles.highest}`, true)
      .addField(`Total Roles:`,`${message.guild.roles.cache.size - 1}`, true)
      .setColor("DARK_PURPLE")
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({
         dynamic: true,
         format: "png",
         size: 2048,
        })
       )
       .setTimestamp();
    
    message.reply({ embeds: [embed] });
  },
};
