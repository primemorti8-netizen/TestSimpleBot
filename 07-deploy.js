import { REST, Routes } from "discord.js";
import dotenv from 'dotenv';
dotenv.config();

const commands = [

];

const rest = new REST({ version: '10'}).setToken(process.env.DISKORD_TOKEN);

try {
    console.log('register commands...')
    await rest.put(
        Routes.applicationCommands(process.env.DISCORD_CLIENT, process.env.SERVER_ID),
        { body: commands }
    );
    console.log(' commands is register !');
 } catch (error) {
  console.error(error);
 }
 
