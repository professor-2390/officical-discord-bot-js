const client = require('../index')

client.on('ready', () => {
    client.user.setPresence({activities: [{name: "v!help", type: "WATCHING"}]})
    console.log(`🟢 ${client.user.tag} is online!`)
})