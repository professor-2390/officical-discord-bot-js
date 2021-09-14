const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../models/warndb')

module.exports = {
    name: 'remove-warn',
    UserPerms: ["MANAGE_MESSAGES"],
    description: "Remove specific warns for mentioned user.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase())
        if (!user) return message.channel.send('User not found.')
        db.findOne({
            guild: message.guild.id, 
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                let number = parseInt(args[1]) - 1
                if (isNaN(number)) return message.channel.send("Argument is not a number")
                data.content.splice(number, 1)
                message.channel.send('Deleted the warn')
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        }) // Since the video is becoming very long i will copy paste the code since i have already made it before the video.. the code will be in the description

    }
}