const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: [],
    description: "Want to add the bot add it now ⚜️.",
    UserPerms: ["SEND_MESSAGES"],
    run: async (client, message, args, Discord) => {
        const embed = new MessageEmbed().setTitle("Add VoidBot to your server").setDescription("Want to know how to add this wonderful bot to your server? nothing much just press the button.").setColor("DARK_PURPLE")
        const row = new MessageActionRow().addComponents(
            new MessageButton().setLabel("ADD THE BOT").setStyle("LINK").setURL("https://discord.com/api/oauth2/authorize?client_id=881214410742448179&permissions=8&scope=bot%20applications.commands")
        )

        message.reply({embeds: [embed], components: [row]})
    }
}
