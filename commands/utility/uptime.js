const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'uptime',
    aliases: [],
    UserPerms: ["SEND_MESSAGES"],
    description: "Uptime of da bot.",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
    */
    run: async (client, message, args) => {
        const days = Math.floor(client.uptime / 86400000);
        const hours = Math.floor(client.uptime / 3600000) % 24;
        const minutes = Math.floor(client.uptime / 60000) % 60;
        const seconds = Math.floor(client.uptime / 1000) % 60;
        message.channel.send({ content: `**__Uptime:__**\nWeky is online since ${days}**d **${hours}**h **${minutes}**m **${seconds}**s**!` });
    }
}