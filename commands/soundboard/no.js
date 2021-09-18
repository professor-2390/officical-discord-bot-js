const voiceDiscord = require('@discordjs/voice');
module.exports = {
    name: 'no',
    aliases: [],
    description: 'Sound effect of no.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/881575631291314192/888728921154129940/simple-no-male-voice.mp3');

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
