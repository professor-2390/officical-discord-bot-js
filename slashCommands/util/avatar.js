const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Shows users avatar',
    options: [{
        name: 'target',
        type: 'USER',
        description: 'Select a user',
        required: true,
    }],
    run: async (client, interaction, options) => {
        const user = interaction.options.getUser('target')

        const embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setColor('DARK_PURPLE')
            .setImage(user.displayAvatarURL({
                dynamic: true,
                size: 1024
            }))
            .setDescription(`[Png](${user.avatarURL({ format: 'png' })}) | [Webp](${user.avatarURL({ dynamic: true })}) | [Jpg](${user.avatarURL({ format: 'jpg' })})`)
            .setFooter(`Requested by: ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }));
        
        await interaction.followUp({
            embeds: [embed]
        }); //lets try it now 
    }
}