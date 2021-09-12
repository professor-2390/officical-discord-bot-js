const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "channelinfo",
    aliases: [],
    description: "Gives info about a channel.",
    UserPerms: ["SEND_MESSAGES"],
    run: async (bot, message, args) => {
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");

        const embed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", `${channel.nsfw}`, false)
            .addField("**Channel ID**", `${channel.id}`, false)
            .addField("**Channel Type**", `${channel.type}`)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("Server Created At:",
            `${moment(channel.createdAt).format(
                "MMMM Do YYYY, h:mm:ss a"
                )}\n**-** ${moment(message.guild.createdAt).startOf("day").fromNow()}`, false
                )
            .setColor("DARK_PURPLE")
        message.channel.send({embeds: [embed]});
    }
}