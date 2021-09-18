const voiceDiscord = require('@discordjs/voice');
module.exports = {
    name: 'wtf',
    aliases: [],
    description: 'Sound effect of wtf and BOOM :boom:.',
    UserPerms: ['SEND_MESSAGES'],
    run: async (client, message, args, Discord) => {
        const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/881575631291314192/888739341852102686/WTF-Boom-Original.mp3');

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