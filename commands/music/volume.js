const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  aliases: [],
  description: "Change volume of the music music.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    let amount = parseInt(args[0]);
    let queue = client.distube.getQueue(message.guild.id);
    queue.setVolume(amount);
    message.channel.send(`>>> Volume set to ${amount}`);
  },
};
