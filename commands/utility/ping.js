const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['lag'],
    UserPerms: ["SEND_MESSAGES"],
    BotPerms: ["ADMINISTRATOR"],
    description: "Shows bot latency.",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
    */
    run: async (client, message, args) => {
        const embed = new MessageEmbed().setColor("DARK_PURPLE").setTitle("Ping").setDescription(`🏓 Ping: ${client.ws.ping}`)
        message.channel.send({embeds: [embed]})
    }
}