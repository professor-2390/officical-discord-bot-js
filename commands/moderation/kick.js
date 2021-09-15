const {
    Client,
    Message,
} = require('discord.js');

module.exports = {
    name: 'kick',
    description: `Kicks the mentioned user from the server`,
    UserPerms: ["KICK_MEMBERS"],
    aliases: [],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first();

        if (user) {
            user.kick().then(() => {
                const embed = new Discord.MessageEmbed().setTitle(`🟢 ${user.user.tag} Successfully kicked the user!`).setColor("GREEN")
                message.channel.send({embeds: [embed]})
            })
        } else if(!user){
            const embed = new Discord.MessageEmbed().setTitle(`🔴 Failed to kick the user, mention a user to kick BRUHH!`).setColor("RED")
            message.channel.send({embeds: [embed]})
        } else {
            const embed = new Discord.MessageEmbed().setTitle(`🔴 Failed to kick the user, user not found!`).setColor("RED")
            message.channel.send({embeds: [embed]})
        }

    }
}
