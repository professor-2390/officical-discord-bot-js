const { Random } = require("something-random-on-discord")
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'neko',
    aliases: ['neks'],
    description: 'Shows a neko pic :hot_face:.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        let data = await Random.getNeko()
        if (!message.channel.nsfw) {
            const embed = new MessageEmbed().setTitle(`Not NSFW Channel`).setColor("DARK_PURPLE").setDescription('We cant send nsfw command in text channels you need a **nsfw** channel to run this command').setImage("https://media.discordapp.net/attachments/721019707607482409/855827123616481300/nsfw.gif");;
            message.channel.send({embeds: [embed]})
        }else {
            message.channel.send({embeds: [data.embed]})
        }
    }
}