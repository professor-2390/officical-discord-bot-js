const { Random } = require("something-random-on-discord")


module.exports = {
    name: 'advice',
    aliases: ['ad'],
    description: 'Gives you an advice.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        let data = await Random.getAdvice()
        message.channel.send({embeds: [data.embed]})
    }
}