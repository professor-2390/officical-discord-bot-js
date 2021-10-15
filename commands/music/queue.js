const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "queue",
  aliases: [],
  description: "The song queue.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    let queue = client.distube.getQueue(message);
    try {
        const embed = new MessageEmbed().setTitle(`Current queue`).setDescription(`${queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n")}`)
        message.channel.send({embeds: [embed]});
    }
    catch(err){
        const embed = new MessageEmbed().setDescription("The queue is empty")
        message.channel.send({embeds: [embed]})
    }
  },
};
