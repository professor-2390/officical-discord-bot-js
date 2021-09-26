const config = require("../../config.json");
const Levels = require("../../functions/DiscordXp");
Levels.setURL(config.mongooseConnectionString);

module.exports = {
  name: "leaderboard",
  aliases: [],
  description: "Get rank leaderboard data.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = await Levels.computeLeaderboard(
      client,
      rawLeaderboard,
      true
    ); // We process the leaderboard.

    const lb = leaderboard.map(
      (e) =>
        `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${
          e.level
        }\nXP: ${e.xp.toLocaleString()}`
    ); // We map the outputs.

    const embed = new Discord.MessageEmbed()
      .setTitle("Leaderboard:")
      .setDescription(`\n\n${lb.join("\n\n")}`)
      .setColor("DARK_PURPLE");

    message.channel.send({ embeds: [embed] });
  },
};
