const {MessageEmbed} = require("discord.js")

module.exports = {
  name: "poll",
  aliases: [],
  description: "Poll for the server.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    if (!args[0]) return message.channel.send("**Please Enter A Query!**");

    const embed = new MessageEmbed()
      .setColor("DARK_PURPLE")
      .setTitle(`Poll For ${message.guild.name} Sever`)
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setDescription(`${args.join(" ")} \n\n 🟢 Yes \n\n 🔴 No`);
    const mesg = await message.channel.send({embeds: [embed]});

    await mesg.react("🟢");
    await mesg.react("🔴");

    message.delete({ timeout: 1000 });
  },
};
