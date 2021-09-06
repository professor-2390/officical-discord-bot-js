const { Random } = require("something-random-on-discord")


module.exports = {
    name: 'fact',
    aliases: ['facts'],
    description: 'Shows a fact.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        let data = await Random.getFact();
        message.channel.send({embeds: [data.embed]})
    }
}