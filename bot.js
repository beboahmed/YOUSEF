const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620832912429809697")
setInterval(function() {
channel.send(`king`);
}, 30)
})

client.login(process.env.BOT_TOKEN);