const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'test',
    aliases: ['say'],
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    description: "Test.",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
    */
    run: async (client, message, args) => {
        const text = args
        if (!text) return message.channel.send({content: 'Tell me something..'})
        message.channel.send({content: `The thing you said me is '${text}'`})
    }
}