const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "triggered",
  aliases: [],
  description: "Make someone triggered.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
	const DIG = require('discord-image-generation');
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
	const avatar = member.user.displayAvatarURL({ format: 'jpg' });
	const img = await new DIG.Triggered().getImage(avatar);
	const attachment = new Discord.MessageAttachment(img, 'Triggered.gif');
	message.channel.send({ files: [attachment] });
  },
};
