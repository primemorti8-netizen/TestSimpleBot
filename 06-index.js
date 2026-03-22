import { Client, GatewayBits, Collection } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const clientName = new Client({
intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]
});

clientName.commands = new Collection();

clientName.once('ready', () => {
console.log(`Bot is online - ${clientName.user.tag}`)
});

clientName.login(process.env.DISKORD_TOKEN)