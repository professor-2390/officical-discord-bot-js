const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ban',
    description: "Bans the mentioned user from the guild",
    UserPerms: ["ADMINISTRATOR"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send('Tell me a reason!');

        if (user) {

            await user.ban({
                reason: reason,
            }).then(() => {
                message.channel.send('🟢 Successfully banned the user!')
            })

        } else {
            message.channel.send('🔴 Failed to ban the user, user not found!')
        }

    }
}