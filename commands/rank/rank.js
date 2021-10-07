const config = require("../../config.json");
const Levels = require("../../functions/DiscordXp");
Levels.setURL(config.mongooseConnectionString);
const Canvas = require("canvas");
const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "rank",
  aliases: [],
  description: "Get user rank data.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const target = message.mentions.users.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id);

    if (!user)
      return message.channel.send(
        "Seems like this user has not earned any xp so far."
      );
    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F9bTjZrytydVRK%2Fgiphy.gif&f=1&nofb=1"
    );

    // This uses the canvas dimensions to stretch the image onto the entire canvas
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#4e00a8";

    // Draw a rectangle with the dimensions of the entire canvas
    context.strokeRect(0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(
      target.displayAvatarURL({ format: "jpg" })
    );

    // Draw a shape onto the main canvas
    context.drawImage(avatar, 50, 50, 150, 150);

    const applyText = (canvas, text) => {
      const context = canvas.getContext("2d");

      // Declare a base size of the font
      let fontSize = 70;

      do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${(fontSize -= 10)}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
      } while (context.measureText(text).width > canvas.width - 300);

      // Return the result to use in the actual canvas
      return context.font;
    };

    context.font = applyText(canvas, target.username);
    context.fillStyle = "#ffffff";
    context.fillText(target.username, canvas.width / 2.8, canvas.height / 2.4);

    context.font = applyText(canvas, user.level + 1);
    context.fillStyle = "#fc2a38";
    context.fillText(
      `LEVEL: ${user.level + 1}`,
      canvas.width / 2.8,
      canvas.height / 1.5
    );

    context.font = "28px sans-serif";
    context.fillStyle = "#a5a2a2";
    context.fillText(`XP: ${user.xp}`, canvas.width / 2.8, canvas.height / 1.2);

    // Use the helpful Attachment class structure to process the file for you
    const attachment = new MessageAttachment(
      canvas.toBuffer(),
      "profile-image.png"
    );

    message.reply({ files: [attachment] });
  },
};
