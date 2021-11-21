const content = {
	// data
	data() {
		return {
			name: 'Sarah',
			email: 'sarah@gmail.com',
			contact: {
				phone: '6334567456',
				address: 'Somewhere'
			}
		};
	},

	// method/functions
	methods: {
		update() {
			this.name = 'Maria';
		}
	}
};

const app = Vue.createApp(content);

app.mount('#app');

// Conditionals
// Loops!