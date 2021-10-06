const Levels = require("../functions/DiscordXp");
const config = require("../config.json");
Levels.setURL(config.mongooseConnectionString);
const client = require("../index");
const Discord = require("discord.js");
client.on("message", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
  const hasLeveledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    randomAmountOfXp
  );
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);

    const levelEmbed = new Discord.MessageEmbed()
      .setTitle("New Level!")
      .setDescription(
        `**GG** ${message.author}, you just leveled up to level **${
          user.level + 1
        }**!\n🥳`
      )
      .setColor("DARK_PURPLE");

    await message.channel.send({ embeds: [levelEmbed] }).then((m) => {
      setTimeout(() => {
        m.delete();
      }, 2000);
    });
  }
});
