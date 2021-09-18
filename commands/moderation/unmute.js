const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  aliases: ["um"],
  description: "Unmutes the mentioned user.",
  UserPerms: ["MANAGE_MESSAGES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!Member) return message.channel.send('Member not found')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} is now unmuted`)
  }, 
};
