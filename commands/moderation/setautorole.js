const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const schema = require('../../models/autorole')

module.exports = {
    name: 'setautorole',
    UserPerms: ["MANAGE_ROLES"],
    description: "Add a specific role to user then joined the guild.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const role = await message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        if (!role) return message.reply('Mention a role');

        schema.findOne({
            guild: message.guild.id
        }, async (err, data) => {
            if (err) throw err
            if (data) {
                message.channel.send('auto role is already setup')
            } else {
                data = new schema({
                    guild: message.guild.id,
                    role: role.id
                })
                await data.save();
                message.channel.send('done!')
            }
        })
    }
}