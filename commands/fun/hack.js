const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "hack",
  aliases: [],
  description: "Hacks the mentioned user TRY IT 100% LEGIT.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    try {
      const member =
        (await message.mentions.members.first()) ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          (r) =>
            r.user.username.toLowerCase().includes() ===
            args.join(" ").toLocaleLowerCase()
        ) ||
        message.guild.members.cache.find(
          (r) =>
            r.displayName.toLowerCase().includes() ===
            args.join(" ").toLocaleLowerCase()
        );
      if (!member) {
        return message.reply({
          embed: {
            color: "DARK_PURPLE",
            description: `:x: | You must mention a vaild member\n\n**Usage:** \`${client.prefix} hack <user>\``,
          },
        });
      }
      let randomDelay = Math.floor(Math.random() * (6000 - 2000)) + 2000;
      let ip1 = Math.floor(Math.random() * 255);
      let ip2 = Math.floor(Math.random() * 255);
      let ip3 = Math.floor(Math.random() * 255);
      let ip4 = Math.floor(Math.random() * 255);
      let fails = [
        "I forgot what I was doing.",
        "Oops! Busted!",
        "Wait, what was I doing?",
        "Oof! That didn't work.",
        "Wait, what am I hacking again?",
        "Oh no, I forgot how to hack!",
        `I don't think I can hack ${member.user.username}`,
        `${member.user.username} is unhackable`,
        `${member.user.username} got the biggest antivirus ever.`,
        "I blew the hack! Now the FBI is looking for me...",
      ];
      let hacks = [
        `Found ${member.user.username}'s IP address: ${ip1}.${ip2}.${ip3}.${ip4} ||Jk||`,
        `${member.user.username}'s private data has been sold to the government.`,
        `${member.user.username} has been hacked and will get viruses on their computer forever!`,
        `${member.user.username}'s Fortnite dances have been uploaded to their boss's network!`,
        `${member.user.username} has to pay $${ip1} to get their data back.`,
        `Oh look, ${member.user.username} just lost all their money!`,
      ];
      let chance = Math.random();
      if (chance >= 0.2) {
        const embed = new MessageEmbed()
          .setTitle(`🐱‍💻 Hacking ${member.user.username}...`)
          .setColor("DARK_PURPLE");
        return message
          .reply({
            embeds: [embed],
          })
          .then((msg) => {
            setTimeout(function () {
            const embed = new MessageEmbed().setTitle(`🐱‍💻 I hacked ${member.user.username}!`).setDescription(`:white_check_mark: \`${
                hacks[Math.floor(Math.random() * hacks.length)]
              }\``)
              msg.reply({
                embeds: [embed]
              });
            }, randomDelay);
          })
          .catch(console.error);
      } else {
        const embed = new MessageEmbed()
          .setTitle(`🐱‍💻 Hacking ${member.user.username}...`)
          .setColor("DARK_PURPLE");
        return message
          .reply({
            embeds: [embed],
          })
          .then((msg) => {
            setTimeout(function () {
              msg.edit({
                embed: {
                  color: "DARK_PURPLE",
                  title: `🐱‍💻 I can't hack ${member.user.username}!`,
                  description: `:x: ${
                    fails[Math.floor(Math.random() * fails.length)]
                  }`,
                },
              });
            }, randomDelay);
          });
      }
    } catch (err) {
      console.log(err);
      message.reply({
        embed: {
          color: "DARK_PURPLE",
          description: `Something went wrong... :sob:`,
        },
      });
    }
  },
};
