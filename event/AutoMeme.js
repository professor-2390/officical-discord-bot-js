const Schema = require('../models/automeme')
const client = require('../index');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

client.on('ready', () => {
    client.guilds.cache.forEach(guild => {
        if (!guild || !guild.id) return;

        Schema.findOne({ guild: guild.id }, async (err, data) => {
            if (!data) return
            
            setInterval(() => {
                if (!data) return
                if (!data.channel) return;

                if (err) throw err;
                fetch(`https://api.nuggetdev.com/api/meme`)
                    .then(res => res.json())
                    .then(async json => {
                        const embed = new MessageEmbed()
                            .setTitle(json.title)
                            .setURL(json.url)
                            .setImage(json.image)
                        client.channels.cache.get(data.channel).send({embeds: [embed]})
                })
            }, 200000)
        })
    })
})