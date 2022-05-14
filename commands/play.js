const { Message } = require('discord.js');
const ytdl = require('discord-ytdl-core');

module.exports = {
	name: 'play',
	description: 'Spielt ein Lied mittels YT-Link',
	execute(message, args) {

        const videoLink = args[0];
        const stream = ytdl(videoLink, { filter: 'audioonly'});
        

        
        const voiceChannel = message.member.voice.channel;
        //console.log(`${args[0]}`);
        //console.log(`${args[1]}`);
        
            if (voiceChannel && args[0].includes('http')) {                    

                let stream = ytdl(videoLink, {
                    filter: "audioonly",
                    opusEncoded: true,
                    encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
                    highWaterMark: 1 << 25,
                }).on('error', err => {
                    console.log(err);
                });
                
                voiceChannel.join()
                .then(connection => {
                    let dispatcher = connection.play(stream, {
                        type: "opus"
                    })
                    /*.on("finish", () => {
                        voiceChannel.leave();
                    })*/
                    dispatcher.setVolume(0.1);
                });

                message.channel.send(`Es wird jetzt gespielt: ${args[0]}`);
            }

            else {
                message.reply('Ein Fehler ist aufgetreten. Das ganze wurde protokolliert und irgendjemand schaut sich das bestimmt mal an');
            }
        return;
    }
};