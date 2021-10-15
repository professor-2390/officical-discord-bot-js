const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip",
  aliases: ["skp"],
  description: "Skip the current music.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    try {
        let queue = client.distube.getQueue(message.guildId);
        if (!message.guild.me.voice.channel) {
          return message.reply(`>>> Nothing Playing`);
        }
        if (queue.length <= 0) return message.channel.send("Cant skip lol")
        queue.skip();
    } catch(err){
      if (err) {
      const embed = new MessageEmbed().setDescription("There is no next song to skip to")
      message.channel.send({embeds: [embed]})
      }
    }
  },
};