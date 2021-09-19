module.exports = {
  name: "hitler",
  aliases: [],
  description: "Putting your pfp in a hitler meme.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
	const canvacord = require('canvacord');
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
	const avatar = member.user.displayAvatarURL({ format: 'jpg' });
	const image = await canvacord.Canvas.hitler(avatar);
	const attachment = new Discord.MessageAttachment(image, 'hitler.png');
	message.channel.send({ files: [attachment] });
  },
};
