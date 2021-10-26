const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip",
  aliases: ["skp"],
  description: "Skip the current music.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    let queue = client.distube.getQueue(message.guildId);
    if (!queue.length) return message.channel.send(`❌ | There is nothing in the queue right now!`)
    try {
        const song = queue.skip()
        message.channel.send(`⏭ | Skipped! Now playing:\n${song.name}`)
    } catch (e) {
        message.channel.send(`❌ | ${e}`)
    }
  },
};
