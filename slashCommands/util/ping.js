module.exports = {
    name: 'ping',
    description: 'Shows ping',
    run: async (client, interaction, options) => {
        await interaction.followUp('Ping is' + client.ws.ping)
    }
}