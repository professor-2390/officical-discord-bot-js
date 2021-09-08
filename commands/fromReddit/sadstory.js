const { MessageEmbed } = require("discord.js");
const redditFetch = require("reddit-fetch");

module.exports = {
  name: "sadstory",
  aliases: [],
  description: "Sad breakup stories that can make you cry :sob:.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    redditFetch({
      subreddit: "BreakUps",
      sort: "hot",
      allowNSFW: true,
      allowModPost: false,
      allowCrossPost: false,
      allowVideo: false,
    }).then((post) => {
      const embed = new MessageEmbed()
        .setTitle(`${post.title}`)
        .setDescription(`${post.selftext}`)
        .setColor("DARK_PURPLE")
        .setURL(post.url)
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
      message.channel.send({ embeds: [embed] });
      // console.table(post);
    });
  },
};
