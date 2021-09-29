const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "uptime",
  aliases: [],
  UserPerms: ["SEND_MESSAGES"],
  description: "Uptime of da bot.",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;
    const date = moment().format("dddd, MMMM Do YYYY");
    const embed = new MessageEmbed()
      .setTitle(`${client.user.username}'s **__Uptime:__**`)
      .setDescription(
        "```" + `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds` + "```"
      )
      .addField("Date Launched", date, false)
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setColor("DARK_PURPLE")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
  },
};
