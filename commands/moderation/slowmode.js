const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "slowmode",
  aliases: [],
  UserPerms: ["MANAGE_CHANNELS"],
  BotPerms: ["MANAGE_MESSAGES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
    try {
      const amount = parseInt(args[0]);
      if (args[0].includes("-")) {
        const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription(
          `:x: tbh you're a dum fuck slowmode cant be in negative numbers.`
        );
      return message.reply({ embeds: [embed] });
      }
      if (amount * 60 * 60 > 21600) {
        const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription(
          `Cant set slowmode above 6 hours sadly.`
        );
      return message.reply({ embeds: [embed] });
      }
      if (isNaN(amount) || !args[0]) {
        const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription(
          `:x: it doesnt look like a valid number this is sus asf.`
        );
      return message.reply({ embeds: [embed] });
      }
      if (args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount);
        if (amount > 1) {
            const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " seconds"
            );
          return message.reply({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " second"
            );
          return message.reply({ embeds: [embed] });
        }
      }
      if (args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60);
        if (amount > 1) {
            const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " minutes"
            );
          return message.reply({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " minute"
            );
          return message.reply({ embeds: [embed] });
        }
      }
      if (args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60);
        if (amount > 1) {

            const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " hours"
            );
          return message.reply({ embeds: [embed] });
        } else {
          const embed = new MessageEmbed()
            .setTitle("Success")
            .setDescription(
              `:white_check_mark: | Slowmode is now set to ` + amount + " hour"
            );
          return message.reply({ embeds: [embed] });
        }
      } else {
        const embed = new MessageEmbed()
          .setTitle("Error")
          .setDescription(
            ":x: | You can only set seconds(s), minutes(min) and hours(h)"
          );
        return message.reply({ embeds: [embed] });
      }
    } catch (err) {
      console.log(err);
      message.reply({
        embed: {
          color: 16734039,
          description: `Something went wrong...:sob:`,
        },
      });
    }
  },
};
