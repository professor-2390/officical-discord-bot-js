const info = require("../../package.json");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const { version: discordjsVersion } = require('discord.js');

module.exports = {
  name: "calculator",
  aliases: [],
  description: "A realtime calculator.",
  UserPerms: ["SEND_MESSAGES"],

  run: async (client, message, args, Discord) => {
    const simplydjs= require("simply-djs")
    simplydjs.calculator(message,{
      embedColor:"DARK_PURPLE"
    })
  },
};
