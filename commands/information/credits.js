const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "credits",
  aliases: ["devs"],
  description: "Gives you info about the developers.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
      .setTitle("Credits for this project.")
      .setDescription(
        "The credit for this project goes to the wonderful devs.\n**Art and Programming:** Professor.#2390 and Github lol"
      ).setColor("DARK_PURPLE");
    message.channel.send({ embeds: [embed] });
  },
};
