const info = require("../../package.json");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "botinfo",
  aliases: [],
  description: "Bot info bruhh",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
      .setTitle(`${info.name}`)
      .addField("Bot Version", `\`${info.version}\``, true)
      .addField("Created At:",
      `${moment(client.user.createdAt).format(
          "MMMM Do YYYY, h:mm:ss a"
          )}\n**-** ${moment(message.guild.createdAt).startOf("day").fromNow()}`, false
          )
      .addField("Author", `\`${info.author}\``, true)
      .addField("License", `\`${info.license}\``, true)
      .setColor("DARK_PURPLE")
      .addField(`Node.js:`, `\`\`\`${process.version}\`\`\``)
      .addField(`Guild Count`, `\`${client.guilds.cache.size} guilds\``, true)
      .addField(`User Count`, `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members\``, true)

    message.reply({ embeds: [embed] });
  },
};
