const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Play music.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    let search = args.join(" ");
    let channel = message.member.voice.channel;
    let queue = client.distube.getQueue(message.guildId);
    if (!channel) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setColor("DARKPURPLE")
            .setDescription(`>>> Please Join a Voice Channel`)
            .setFooter(
              `Requested by ${message.author.username}`,
              message.author.displayAvatarURL({ dynamic: true })
            ),
        ],
      });
    }
    if (!search) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setColor("DARKPURPLE")
            .setDescription(`>>> Please Provide me Song name or Link`)
            .setFooter(
              `Coded By Kabir Singh`,
              message.author.displayAvatarURL({ dynamic: true })
            ),
        ],
      });
    }
    client.distube.play(message, search);
  },
};
