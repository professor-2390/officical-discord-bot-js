const { Client, Collection } = require("discord.js");
const Distube = require("distube").default;
const { SpotifyPlugin } = require("@distube/spotify");
const config = require("./config.json");

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ],
});
module.exports = client;

// Mongo Connection
const { mongooseConnectionString } = require("./config.json");
const mongoose = require("mongoose");
mongoose
  .connect(mongooseConnectionString, {
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongodb!"));

// Logging System client
const logs = require("discord-logs");
logs(client, {
  debug: true,
});

client.commands = new Collection();
client.config = require("./config.json");
client.prefix = client.config.PREFIX;
client.aliases = new Collection();
client.slash_commands = new Collection();
client.fetchforguild = new Map();
client.snipes = new Collection();
client.editsnipes = new Collection();
client.distube = new Distube(client, {
  emitNewSongOnly: false,
  searchSongs: 0,
  plugins: [new SpotifyPlugin({
    parallel: true,
    emitEventsAfterFetching: false,
    api: {
      clientId: config.sclientID,
      clientSecret: config.sclientSecret,
    },
  })],
});
client.status = (queue) =>
  `Volume: \`${queue.volume}%\` | Filter: \`${
    queue.filter || "Off"
  }\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode == 2
        ? "All Queue"
        : "This Song"
      : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

require("./handler/slash_commands");
require("./handler")(client);

client.login(client.config.TOKEN);
