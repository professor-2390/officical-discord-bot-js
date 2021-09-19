const { MessageEmbed } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "affect",
  aliases: [],
  description: "It will not affect my child.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
	const DIG = require('discord-image-generation');
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
	const avatar = member.user.displayAvatarURL({ format: 'jpg' });
	const img = await new DIG.Affect().getImage(avatar);
	const attachment = new Discord.MessageAttachment(img, 'affect.png');
	message.channel.send({ files: [attachment] });
  },
};
