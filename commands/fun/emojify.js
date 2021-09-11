const emoji = require("discord-emoji-convert");
const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "emojify",
    aliases: [],
    description: "Emojify command from dankmemer.",
    UserPerms: ["SEND_MESSAGES"],
  
    run: async (client, message, args, Discord) => {
        try {
            const emojis = args.join(" ");
            if (!emojis) {
             return message.reply({
              embed: {
               color: 16734039,
               description: `:x: | Please enter text to convert!`,
              },
             });
            }
            if (args.join(" ").lenght > 30) {
             return message.reply({
              embed: {
               color: 16734039,
               description: `:x: | Please enter shorter string, maximum length is 30 characters!`,
              },
             });
            }
            const converted = emoji.convert(emojis);
            if (!converted) {
             return message.reply({
              embed: {
               color: 16734039,
               description: `:x: | I cannot convert the text`,
              },
             });
            }
            const embed = new MessageEmbed() // Prettier
             .setColor("RANDOM")
             .setTitle(`Text To Emoji`)
             .addField("Converted text", converted)
             .addField("Converted text (Code)", "```" + converted.toString().substr(0, 1000) + "```")
             .setFooter(
              `Requested by ${message.author.username}`,
              message.author.displayAvatarURL({
               dynamic: true,
               format: "png",
               size: 2048,
              })
             ).setTimestamp();
            message.reply({embeds: [embed]});
           } catch (err) {
            console.log(err);
            message.reply({
             embed: {
              color: 16734039,
              description: `Something went wrong... :sob:`,
             },
            });
           }
    }
}