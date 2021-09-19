const { MessageEmbed } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "rip",
  aliases: [],
  description: "RIP someone who want you to die.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
	const avatar = member.user.displayAvatarURL({ format: 'jpg' });
	const image = await canvacord.Canvas.rip(avatar);
	const attachment = new Discord.MessageAttachment(image, 'rip.png');
	message.channel.send({ files: [attachment] });
  },
};
