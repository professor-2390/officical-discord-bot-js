const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Shows bot`s latency / ping',
    run: async (client, interaction, options) => {
        const embed = new MessageEmbed().setColor("DARK_PURPLE").setTitle("Ping").setDescription(`🏓 Ping: ${client.ws.ping}`)
        await interaction.followUp({embeds: [embed]})
    }
}