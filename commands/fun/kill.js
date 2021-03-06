const {MessageEmbed} = require('discord.js')
const fetch = require("node-fetch");
const deaths = ["[NAME1] ran over [NAME2] with a School Bus! :bus:", "[NAME1] poisoned [NAME2]’s candy bar", "[NAME2] swallowed a grenade", "[NAME1] sent John Wick to kill [NAME2]!", "[NAME1] pressed Ctrl+Alt+Del deleting [NAME2] from the Universe!", "[NAME1] threw the ban hammer at [NAME2] for spamming", "[NAME2] stepped on a lego brick"];

module.exports = {
    name: 'kill',
    aliases: [],
    description: 'Kills someone for you :knife:.',
    UserPerms: ['SEND_MESSAGES'],
    
    run: async (client, message, args, Discord) => {
        try {
            const member = (await await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase());
            if (!member) {
                const embed = new MessageEmbed().setDescription(`:knife: | You must mention someone to kill!\n\n**Usage:** \`${client.prefix}kill <user>\``).setColor("RED")
                return message.channel.send({embeds: [embed]});
            }
            if (message.author === member || message.member === member) {
                const embed = new MessageEmbed().setDescription(`:knife: | You can't kill yourself...`).setColor("RED")
                return await message.channel.send({embeds: [embed]});
            }
            const pickeddeath = deaths[Math.floor(Math.random() * deaths.length)];
            const change1 = pickeddeath.replace("[NAME1]", "<@" + message.author + ">");
            const change2 = change1.replace("[NAME2]", "<@" + member + ">");
            (async () => {
             const response = await fetch("https://nekos.life/api/v2/img/slap");
             const body = await response.json();
             const embed = await new MessageEmbed() // Prettier
              .setColor("RED")
              .setAuthor(
               "Tombstone of " + member.displayName + "!",
               message.author.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 2048,
               })
              )
              .setFooter(
               `Requested by ${message.author.username}`,
               message.author.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 2048,
               })
              )
              .setImage(body.url)
              .setDescription(change2);
             message.channel.send({embeds: [embed]});
            })();
           } catch (err) {
            message.channel.send({
             embed: {
              color: 16734039,
              description: `Something went wrong... :sob:`,
             },
            });
           }
    }
}