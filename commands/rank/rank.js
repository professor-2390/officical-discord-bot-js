const config = require("../../config.json");
const Levels = require("../../functions/DiscordXp");
Levels.setURL(config.mongooseConnectionString);

module.exports = {
  name: "rank",
  aliases: [],
  description: "Get user rank data.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const target = message.mentions.users.first() || message.author; // Grab the target.

    const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

    if (!user)
      return message.channel.send(
        "Seems like this user has not earned any xp so far."
      ); // If there isnt such user in the database, we send a message in general.

    const embed = new Discord.MessageEmbed()
      .setTitle(`${target.username}'s Rank Embed`)
      .addField("Current Level:", `${user.level}`, false)
      .setThumbnail(target.avatarURL({dynamic: true}))
      .setColor("DARK_PURPLE")
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 2048,
        })
      )
      .setTimestamp();

    message.channel.send({ embeds: [embed] }); // We show the level.
  },
};
