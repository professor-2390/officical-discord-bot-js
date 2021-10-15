const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  aliases: [],
  description: "Stop the music.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
      try {
          message.react("👋")
          client.distube.stop(message.guild.id)
      }catch(err){
        const embed = new MessageEmbed().setDescription("The queue is empty")
        message.channel.send({embeds: [embed]})
      }
  },
};
