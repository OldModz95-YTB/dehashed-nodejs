const Discord = require ("discord.js");

// !! ENABLE INTENT DEV DISCORD.COM
const client = new Discord.Client({
  fetchAllMembers: true,
  //restTimeOffset: 0,
  //restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"], 
    repliedUser: true,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [ 
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
      Discord.Intents.FLAGS.GUILD_BANS,
      //Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      //Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
      //Discord.Intents.FLAGS.GUILD_WEBHOOKS,
      //Discord.Intents.FLAGS.GUILD_INVITES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES,
      //Discord.Intents.FLAGS.GUILD_PRESENCES,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      //Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
      Discord.Intents.FLAGS.DIRECT_MESSAGES,
      //Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
      //Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],

  presence: {
    activity: {
      name: `TEST BOT`, 
      type: "LISTENING", 
    },
    status: "dnd"
  }
});

client.queue = new Discord.Collection()
const api = require('./cmd/api')

client.on("ready", () => {
  console.log(`Logged Into ${client.user.tag}`);
  api(client)
})


client.login("TOKEN")