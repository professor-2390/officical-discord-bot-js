const { Client, Message, MessageEmbed } = require("discord.js");
const warndb = require("../../models/warndb");

module.exports = {
  name: "warn",
  UserPerms: ["MANAGE_MESSAGES"],
  description: "Warns the mentioned user.",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!user) return message.reply("Mention a valid user");
    const reason = args.slice(1).join(" ");
    if (!reason) return message.reply("Tell me a reason");

    warndb.findOne(
      {
        guild: message.guild.id,
        user: user.user.id,
      },
      async (err, data) => {
        if (err) throw err;
        if (!data) {
          data = new warndb({
            guild: message.guild.id,
            user: user.user.id,
            content: [
              {
                moderator: message.author.id,
                reason: reason,
              },
            ],
          });
        } else {
          const object = {
            moderator: message.author.id,
            reason: reason,
          };
          data.content.push(object);
        }
        data.save();
      }
    );

    const embed = new MessageEmbed()
      .setTitle(`Warned the user!`)
      .addField(`Reason`, `${reason}`, true)
      .addField(`User`, `${user.user.username}`, true);

    message.channel.send({ embeds: [embed] });
    userEmbed = new MessageEmbed().setTitle(`You have been warned from __${message.guild.name}__ | **Reason: ${reason}**`)
    user.send({ embeds: [userEmbed] });
  },
};
