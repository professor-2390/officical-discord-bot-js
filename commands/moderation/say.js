const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: [],
  description: "Say something.",
  UserPerms: ["MANAGE_CHANNELS"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
    const taggedChannel = await message.mentions.channels.first();
    if (taggedChannel) {
      await taggedChannel.send(args.join(" ").replace(taggedChannel, ""));
    } else {
      const saymessage = await args.join(" ");
      if (saymessage.length >= 1) {
        await message.channel.send(
          saymessage + "\n\n~Message sent by <@" + message.author + ">"
        );
      } else {
        await message.lineReply({
          embed: {
            color: 16734039,
            description: `${client.bot_emojis.sparkles} | You need to enter a message!`,
          },
        });
      }
    }
  },
};
