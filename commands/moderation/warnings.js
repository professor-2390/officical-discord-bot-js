const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const warndb = require('../../models/warndb')

module.exports = {
    name: 'warnings',
    UserPerms: ["MANAGE_MESSAGES"],
    aliases: ["warns"],
    description: "View all warns of the mentioned user.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first() || message.author.id;

        warndb.findOne({
            guild: message.guild.id, 
            user: user.id
        }, async (err, data) => {
            if (err) throw err
            if (data) {
                const e = data.content.map(
                    (w, i) => `\n\`${i + 1}\` - Moderator: ${message.guild.members.cache.get(w.moderator).user.tag}, Reason: ${w.reason}`
                )
                const embed = new MessageEmbed()
                    .setDescription(e.join(' '))
                message.channel.send({
                    embeds: [embed]
                })
            } else {
                message.channel.send('This user does not have any warnings')
            }
        })

    }
}