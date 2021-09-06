const moment = require("moment");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  aliases: ["uinfo", "usrinfo"],
  description: "Gives you info about the mentioned user.",
  UserPerms: ["SEND_MESSAGES"],
  run: async (client, message, args, Discord) => {
    const Target = message.mentions.users.first() || message.author;
    const Member = message.guild.members.cache.get(Target.id);

    const response = new MessageEmbed()
      .setAuthor(
        `${Target.username}`,
        Target.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
      .setColor("DARK_PURPLE")
      .addField("UserID", `${Target.id}`, true)
      .addField(
        "Roles",
        `${Member.roles.cache
          .map((r) => r)
          .join(" ")
          .replace("@everyone", " ")}`, false
      ).addField("Server Member Since",
      `${moment(Member.joinedAt).format(
        "MMMM Do YYYY, h:mm:ss a"
      )}\n**-** ${moment(Member.joinedAt).startOf("day").fromNow()}`, true
    )
     .addField("Discord User Since",
      `${moment(Target.createdAt).format(
        "MMMM Do YYYY, h:mm:ss a"
      )}\n**-** ${moment(Target.createdAt).startOf("day").fromNow()}`, true
    )
    message.channel.send({embeds: [response]})
  },
};
