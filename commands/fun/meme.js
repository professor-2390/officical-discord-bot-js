const { Random } = require("something-random-on-discord")


module.exports = {
    name: 'meme',
    aliases: ['lol'],
    description: 'Shows a random meme to make you laugh.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        let data = await Random.getMeme()
        message.channel.send({embeds: [data.embed]})
    }
}