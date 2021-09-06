const client = require("../index");
const Discord = require("discord.js");

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;

  const [cmd, ...args] = message.content
    .slice(client.config.PREFIX.length)
    .trim()
    .split(" ");

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) {
    // User Perms
    if (!message.member.permissions.has(command.UserPerms || []))
      return message.channel.send(
        `You need \`${command.UserPerms || []}\` Permissions`
      ); // Added this

    // Bot Perms
    if (!message.guild.me.permissions.has(command.BotPerms || []))
      return message.channel.send(
        `I need \`${command.BotPerms || []}\` Permissions`
      );

    await command.run(client, message, args, Discord);
  }
});
