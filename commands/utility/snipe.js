const db = require('quick.db');
const {MessageEmbed}= require('discord.js')
module.exports = {
    name: 'snipe',
    aliases: [],
    description: 'Get Sniped.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        client.on('messageDelete', async (message) => {
            db.set(`snipemsg_${message.channel.id}`, message.content)
            db.set(`snipesender_${message.channel.id}`, message.author.id)
        })

        let msg = db.get(`snipemsg_${message.channel.id}`)
        let senderid = db.get(`snipesender_${message.channel.id}`)
        if (!msg) {
            return message.channel.send(`There is nothing to snipe kiddo. --__--`)
        }
        let embed = new MessageEmbed()
            .setTitle(`GET SNIPED ${client.users.cache.get(senderid).username}`)
            .setDescription(msg)
            .setColor("DARK_PURPLE")
            .setFooter(
                `Requested by ${message.author.username}`,
                message.author.displayAvatarURL({
                 dynamic: true,
                 format: "png",
                 size: 2048,
                })
               )
            .setTimestamp();
        message.channel.send({ embeds: [embed] })
    }
}