module.exports = {
	name: 'join',
	description: 'Lässt den Musikbot den Channel betreten',
	execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        if (voiceChannel) {
            voiceChannel.join();
        }
    }
};