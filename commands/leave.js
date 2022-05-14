module.exports = {
	name: 'leave',
	description: 'Lässt den Musikbot den Channel wieder verlassen',
	execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        if (voiceChannel) {
            voiceChannel.leave();
            message.channel.send('\n Disconnected');
        }
    }
};