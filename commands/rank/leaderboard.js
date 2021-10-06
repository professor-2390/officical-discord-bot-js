const config = require("../../config.json");
const Levels = require("../../functions/DiscordXp");
Levels.setURL(config.mongooseConnectionString);

module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  description: "Get rank leaderboard data.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = await Levels.computeLeaderboard(
      client,
      rawLeaderboard,
      true
    );

    const lb = leaderboard.map(
      (e) =>
        `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${
          e.level + 1
        }\nXP: ${e.xp.toLocaleString()}`
    );

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name}'s Leaderboard:`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`\n\n${lb.join("\n\n")}`)
      .setColor("DARK_PURPLE");

    message.channel.send({ embeds: [embed] });
  },
};
