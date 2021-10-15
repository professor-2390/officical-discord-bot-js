const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "loop",
  aliases: ["repeat"],
  description: "Repeat the queue.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    try {
        client.distube.setRepeatMode(message.guild.id, parseInt(args[0]));
    }catch(err){
      const embed = new MessageEmbed().setDescription("The queue is empty")
      message.channel.send({embeds: [embed]})
    }
  },
};
