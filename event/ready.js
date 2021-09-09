const client = require('../index')

client.on('ready', () => {
    client.user.setPresence({activities: [{name: `${client.guilds.cache.size} Servers | ${client.prefix}help`, type: "WATCHING"}]})
    client.user.setStatus("dnd")
    console.log(`🟢 ${client.user.tag} is online!`)
})
