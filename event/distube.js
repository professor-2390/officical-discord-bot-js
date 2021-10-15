const client = require("../index");
const Discord = require("discord.js");

client.distube.on("playSong", (queue, song) => {
  let playembed = new Discord.MessageEmbed()
    .setColor("DARK_PURPLE")
    .setTitle(`🎵 Playing `)
    .setThumbnail(song.thumbnail)
    .setDescription(`[${song.name}](${song.url})`)
    .addField("Requested By", `${song.user}`, true)
    .addField("Duration", `${song.formattedDuration.toString()}`, true)
    .setFooter(
      client.status(queue),
      song.user.displayAvatarURL({ dynamic: true })
    );

  queue.textChannel.send({ embeds: [playembed] });
});

client.distube.on("addSong", (queue, song) => {
  let playembed = new Discord.MessageEmbed()
    .setColor("DARK_PURPLE")
    .setTitle(`🎵 Added to Queue `)
    .setThumbnail(song.thumbnail)
    .setDescription(`[${song.name}](${song.url})`)
    .addField("Requested By", `${song.user}`, true)
    .addField("Duration", `${song.formattedDuration.toString()}`, true)
    .setFooter(`ok`, song.user.displayAvatarURL({ dynamic: true }));

  queue.textChannel.send({ embeds: [playembed] });
});

client.distube.on("playList", (queue, playlist, song) => {
  queue.textChannel.send(
    `Play \`${playlist.name}\` playlist (${
      playlist.songs.length
    } songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${
      song.formattedDuration
    }\`\n${client.status(queue)}`
  );
});

client.distube.on("addList", (queue, playlist) => {
  queue.textChannel.send(
    `Added \`${playlist.name}\` playlist (${
      playlist.songs.length
    } songs) to queue\n${client.status(queue)}`
  );
});
