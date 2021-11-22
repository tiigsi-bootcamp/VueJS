const content = {
	data() {
		return {
			messages: [
				{
					message: 'This is a message',
					notification: 'This is a notification',
					seen: false
				},
				{
					message: 'This is another message',
					notification: 'This is another notification',
					seen: false
				}
			]
		}
	},
	methods: {
		updateAlert() {
			// TODO: Fix this.
			// this.message = 'New message';
			// this.notification = 'A whole new notification';
			// this.seen = true;

			// alert('Button clicked!');
		}
	}
};

const app = Vue.createApp(content);

app.mount('#app');