const { MessageEmbed, MessageButton } = require("discord.js");
const paginationEmbed = require("../../functions/paginatorembed");
const Pokemon = require("pokemon.js");
Pokemon.setLanguage("english");
module.exports = {
  name: "pokeinfo",
  aliases: [],
  description: "poekinfo.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const text = args;
    if (!text) {
      message.channel.send({
        content: "Tell a pokemon you want to know about...",
      });
    } else {

      Pokemon.getPokemon(`${text}`).then(async (response) => {
        if (!response) return message.channel.send("No pokemon found");
  
        const embed1 = new MessageEmbed()
          .setTitle(`${response.name}`)
          .setDescription(`Type: ${response.types[0].name}`)
          .setThumbnail(response.sprites.front_shiny)
          .addField("Hp:", `${response.stats.hp}`, true)
          .addField("Height:", `${response.height}`, true)
          .addField("Attack:", `${response.stats.attack}`, true)
          .addField("Defense:", `${response.stats.defense}`, true)
          .addField("Speed:", `${response.stats.speed}`, true);
  
        const embed2 = new MessageEmbed()
          .setTitle("Moves")
          .setDescription(`${response.moves}`);
  
        const embed3 = new MessageEmbed()
          .setTitle(`${response.name}`)
          .setImage(response.sprites.front_shiny);
  
        const button1 = new MessageButton()
          .setCustomId("previousbtn")
          .setLabel("◀")
          .setStyle("SUCCESS");
  
        const button2 = new MessageButton()
          .setCustomId("nextbtn")
          .setLabel("▶")
          .setStyle("SUCCESS");
  
        // Create an array of embeds
        pages = [embed1, embed2, embed3];
  
        //create an array of buttons
  
        buttonList = [button1, button2];
  
        paginationEmbed(message, pages, buttonList);
        // console.log(response);
      });
    }

  },
};
