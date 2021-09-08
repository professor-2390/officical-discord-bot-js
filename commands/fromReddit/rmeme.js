const { MessageEmbed } = require("discord.js");
const redditFetch = require("reddit-fetch");

module.exports = {
  name: "rmeme",
  aliases: [],
  description: "Memes from reddit that will make you laught :joy:.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    redditFetch({
      subreddit: "meme",
      sort: "hot",
      allowNSFW: true,
      allowModPost: false,
      allowCrossPost: false,
      allowVideo: false,
    }).then((post) => {
      const embed = new MessageEmbed()
        .setTitle(`${post.title}`)
        .setColor("DARK_PURPLE")
        .setURL(post.url)
        .setImage(post.url)
        .addField("Subreddit:", post.subreddit_name_prefixed, true)
        .addField("Author:", post.author, true)
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        )
        .setTimestamp();
        // console.table(post);
      message.channel.send({ embeds: [embed] });
    });
  },
};
