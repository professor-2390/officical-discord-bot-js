const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'kick',
    description: "Kicks the mentioned user from the guild.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first();

        if (user) {
            user.kick().then(() => {
                message.channel.send('🟢 Successfully kicked the user!')
            })
        } else {
            message.channel.send('🔴 Failed to kick the user, user not found!')
        }

    }
}