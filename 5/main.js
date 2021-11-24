function getStudents() {
	const studentsAsString = localStorage.getItem('students');
	const students = JSON.parse(studentsAsString);

	return students;
}

const content = {
	data() {
		return {
			id: '',
			name: '',
			grade: '',

			isAdding: false,

			students: getStudents()
		};
	},
	methods: {
		save() {
			this.students.push({
				id: this.id,
				name: this.name,
				grade: this.grade
			});

			this.id = '';
			this.name = '';
			this.grade = '';
			this.isAdding = false;

			const studentsAsString = JSON.stringify(this.students);
			localStorage.setItem('students', studentsAsString);
		},
	}
};

const app = Vue.createApp(content);

app.mount('#app');
