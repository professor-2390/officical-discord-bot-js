const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "add-role",
  aliases: ["addrole"],
  description: "Add a specific role to mentioned user.",
  UserPerms: ["MANAGE_ROLES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
       //lets use parameters (optional)
        /**
         * @param {Message} message
         */

        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role specified')

        await target.roles.add(role) // adding the role to the user
        message.channel.send(`${target.user.username} has obtained a role`)
  }, 
};
