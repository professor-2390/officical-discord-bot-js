/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log("Bot is ready!");
	setInterval(() => {
		client.user.setPresence({ activities: [{ name: 'VOIDBOT.PY' }]});
		client.user.setStatus('dnd');
	})
});
