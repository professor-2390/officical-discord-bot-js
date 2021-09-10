const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const axios = require('axios') // npm i axios

module.exports = {
    name: 'banner',
    description: 'Gets a users banner',
    options: [{
        name: "member",
        description: "Mention a member",
        type: "USER",
        required: true,
    }],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, options) => {

        const {
            user
        } = interaction.options.get("member");

        axios.get(`https://discord.com/api/users/${user.id}`, {
            headers: {
                Authorization: `Bot ${client.config.TOKEN}`,
            },
        }).then((res) => {
            const {
                banner,
                accent_color
            } = res.data

            if (banner) {
                const extension = banner.startsWith("a_") ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;

                const embed = new MessageEmbed()
                    .setTitle(`${user.username}'s banner`)
                    .setImage(url)
                    .setColor(accent_color || "#2F3136"); // you can put any color

                interaction.followUp({
                    embeds: [embed]
                })
            } else {
                if (accent_color) {
                    const embed2 = new MessageEmbed()
                        .setDescription(`${user.username} does not have a banner! The color if the embed is thier accent color'`)
                        .setColor(accent_color);
                    interaction.followUp({
                        embeds: [embed2]
                    })
                } else {
                    interaction.followUp(`${user.username} does not have a banner nor a accent color`)
                }
            }
        })

    }
}