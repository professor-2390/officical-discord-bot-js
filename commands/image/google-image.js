const { Client, Message, MessageEmbed } = require("discord.js");
const img = require('images-scraper')

module.exports = {
  name: "google-image",
  aliases: [],
  description: ".",
  UserPerms: ["SEND_MESSAGES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, Discord) => {
    const google = new img({
        puppeteer : {
            headless : true,
        }
    })

    const query = args.join(" ")
    if(!query) return message.channel.send('Please enter a search query')

    const results = await google.scrape(query, 1)
    const embed = new MessageEmbed().setImage(results[0].url).setTitle(query)
    message.channel.send({embeds:[embed]});

  },
};
