const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "remove-role",
  aliases: ["removerole"],
  description: "Remove a specific role from mentioned user.",
  UserPerms: ["MANAGE_ROLES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
        /**
         * @param {Message} message
         */
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified') 
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role specified')

        await target.roles.remove(role)
        const embed = new MessageEmbed().setTitle("Role removed").addField("From", `${target.user.username}`,true).addField("Role", `${role}`, true)
        message.channel.send({embeds: [embed]})
  }, 
};
