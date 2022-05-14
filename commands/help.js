module.exports = {
	name: 'help',
	description: 'Zeigt eine Hilfe für den Bot an',
	execute(message, args) {
		message.channel.send('Hier eine Liste aller Befehle im Bot:\n - !play <youtube-link>: Spielt die Audiospur des Videos\n - !join: Lässt den Bot einen Sprachkanal beitreten (testing purpose only)\n - !leave: Lässt den Bot den Sprachkanal verlassen\n - !ping: Pong');
	},
};