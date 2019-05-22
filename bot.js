const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzkwMTc5MTIwMTc4NTI4MjU2.XOVZeQ._61Lh_j-S5pza8P6pyp-ON-dt9U);
