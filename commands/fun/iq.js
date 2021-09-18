const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'iq',
    aliases: ['iqtest'],
    description: 'Test to know someones iq.',
    UserPerms: ['SEND_MESSAGES'],
    
    run: async (client, message, args, Discord) => {
        try {
            const user = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.member;
            const iq = Math.floor(Math.random() * 226);
            const embed = new MessageEmbed() // Prettier
             .setTitle(`:brain: IQ Test:`)
             .setDescription(`:bulb: ${user.user.username} IQ: \`${iq}\``)
             .setColor("RANDOM")
             .setTimestamp()
             .setFooter(
              `Requested by ${message.author.username}`,
              message.author.displayAvatarURL({
               dynamic: true,
               format: "png",
               size: 2048,
              })
             );
            message.channel.send({embeds:[embed]});
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
