const Discord = require('discord.js');


const client = new Discord.Client();

const prefix = ';';

client.once('ready', () => {
    console.log('Villager is online!');
});

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: ";help",  // The message shown
            type: "LISTENING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
 });

ytdl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
}   

count = 0;

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    var voiceChannel = message.member.voice.channel;
    if (command === "hurr") {
        if (!voiceChannel){
            return message.channel.send("You need to join a Voice Channel to make Villager go brrrr!!");
        }
        else{
            message.channel.send('HURR!');
            voiceChannel.join()
            .then(connection =>{
                client.on('message', message =>{
                if(!message.content.startsWith(prefix) || message.author.bot) return;
                const args = message.content.slice(prefix.length).split(/ +/);
                const command = args.shift().toLowerCase();
                if(command === 'hello'){
                    const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
                }
                else if(command === 'hi'){
                    const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
                }
                else if(command === 'gago'){
                    const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
                }
                else if(command === 'angel'){
                    const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
                }
                else if(command === 'steve'){
                    const dispatcher = connection.play(require("path").join(__dirname, './hurr.mp3'));
                }
                else if(command === 'jaron'){
                    const dispatcher = connection.play(require("path").join(__dirname, './fortnite.mp3'));
                }
                })
            client.on('voiceStateUpdate', (oldMember, newMember) => {
                if (count < 10){ 
                    x = Math.floor(Math.random() * 6);
                    const newUserChannel = newMember.voicechannelID;
                    const oldUserChannel = oldMember.voicechannelID;
                    if (x === 0){
                        const dispatcher = connection.play(require("path").join(__dirname, './hurr.mp3'));
                    }
                    else if (x === 1){
                        const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
                    }
                    else if (x === 2){
                        const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
                    }
                    else if (x === 3){
                        const dispatcher = connection.play(require("path").join(__dirname, './jaron.mp3'));
                    }
                    else if (x === 4){
                        const dispatcher = connection.play(require("path").join(__dirname, './shesh.mp3'));
                    }
	   else if (x === 5){
                        const dispatcher = connection.play(require("path").join(__dirname, './fortnite.mp3'));
                    }
                    count++
                }
                else {
                    setTimeout(function(){ 
                        message.channel.send("Wait lang you bitch!!");
                        count = 0;
                    }, 5000);
                }
                })

            }).catch(err => console.log(err));
        }
    }   

    else if (command === "bye") {
        const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
        voiceChannel.leave();
            }
    
    else{
        y = Math.floor(Math.random() * 4);
        if (y==0){
            message.channel.send("Mama mo "+command);
        }
        else if (y==1){
            message.channel.send("Papa mo "+command);
        }
        else if (y==2){
            message.channel.send("Lolo mo "+command);
        }
        else if (y==3){
            message.channel.send("Lola mo "+command);
        }
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
    message.channel.send("; = Default Villager Prefix.\nhurr = Villager joins a Voice Channel.\nhello/hi = Happy Villager Noises.\ngago = Villager in Pain Noises.\nsteve = Default Villager Noise.\nbye = Villager leaves the Voice Channel.");
}
});
client.login(process.env.token);
