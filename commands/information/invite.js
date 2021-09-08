const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "invite",
    aliases: [],
    description: "Want to add the bot add it now ⚜️.",
    UserPerms: ["SEND_MESSAGES"],
    run: async (client, message, args, Discord) => {
        const embed = new MessageEmbed().setTitle("Add the bot now").setURL("https://discord.com/api/oauth2/authorize?client_id=881214410742448179&permissions=8&scope=bot%20applications.commands").setColor('RANDOM')
        message.channel.send({embeds: [embed]})
    }
}