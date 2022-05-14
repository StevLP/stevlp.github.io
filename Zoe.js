/*
    Zoe - eine angehende Universallösung für Discord-Server
*/

//Import der benötigten Module
const fs = require('fs');
const discord = require('discord.js');
const { prefix, token } = require('./config/config.json');
 
const client = new discord.Client();
client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(token);

//Konsolennachricht wenn der Bot bereit ist
client.once('ready', () => {
    console.log('Verbunden als Zoe');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    const args = message.content.slice(prefix.length).toString().split(/ +/);
    const command = args.shift().toLowerCase();
    //console.log(`${command}`);
    //console.log(`${args}`);

    switch (command) {
        case "help":
            client.commands.get('help').execute(message, args);
            break;
            
        case "join":
            client.commands.get('join').execute(message, args);
            break;

        case "ping":
            client.commands.get('ping').execute(message, args);
            break;

        case "play":
            if (args == "") {
                message.reply('Fehler. Kein Link erkannt.');
                break;
            }
            
            else if (args != "") {
                client.commands.get('play').execute(message, args);
                break;
            }

            else {
                break;
            }

        case "leave":
            client.commands.get('leave').execute(message);
            break;

        default:
            message.reply('Ein Fehler ist aufgetreten. Das ganze wurde protokolliert und irgendjemand schaut sich das bestimmt mal an');
            break;
    }
});