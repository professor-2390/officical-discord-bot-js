const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "80s",
  aliases: [],
  description: "Transforming your pfp with a 80s effect.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
	const avatar = member.user.displayAvatarURL({ format: 'jpg' });
	const att = `https://api.monkedev.com/canvas/80s?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`;
	const attachment = new Discord.MessageAttachment(att, '80s.jpg');
	message.channel.send({ files: [attachment] });
  },
};
