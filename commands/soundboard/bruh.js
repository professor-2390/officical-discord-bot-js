const voiceDiscord = require('@discordjs/voice');
module.exports = {
    name: 'bruh',
    aliases: [],
    description: 'Sound effect of bruh.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/877988588233580598/877991781063610439/bruh.mp3');

		const connection = voiceDiscord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

		player.play(resource);
		connection.subscribe(player);

		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
		message.react("🔊")
    }
}