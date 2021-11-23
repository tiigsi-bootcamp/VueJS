const content = {
	// Application data and state.
	data() {
		return {
			day: '',
			isVisible: false,
			notes: ['Note 1', 'Note 2', 'Note 3']
		};
	},

	// Events and functionality.
	methods: {
		removeNoteOld(note) {
			const position = this.notes.findIndex(n => n === note);
			this.notes.splice(position, 1);
		},

		removeNote(notePosition) {
			this.notes.splice(notePosition, 1);
		},
	}
};

const app = Vue.createApp(content);

app.mount('#app');
