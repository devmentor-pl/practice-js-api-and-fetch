class Users {
	constructor(api) {
		this.apiService = api;
	}
	load() {
		this.apiService
			.loadData()
			.then((data) => {
				this.insert(data);
			})
			.catch((err) => console.log(err));
	}
	insert(data) {
		const ulElement = document.querySelector(".users");
		ulElement.innerHTML = "";
		data.forEach((user) => {
			const liElement = document.createElement("li");
			liElement.innerText = `${user.firstName} ${user.lastName}`;

			ulElement.appendChild(liElement);
		});
	}
	add() {
		const form = document.querySelector("form");

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const { firstName, lastName } = e.target.elements;
			const data = {
				firstName: firstName.value,
				lastName: lastName.value,
			};
			this.apiService
				.addData(data)
				.catch((err) => console.log(err))
				.finally(this.load());
		});
	}
}
export default Users;
