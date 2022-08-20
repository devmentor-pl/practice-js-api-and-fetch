document.addEventListener("DOMContentLoaded", init);

function init() {
	console.log("DOM");
	const formEl = document.querySelector(".form");
	const latEl = document.querySelector(".weather__lat");
	const lngEl = document.querySelector(".weather__lng");
	const summaryEl = document.querySelector(".weather__summary");
	const temperatureEl = document.querySelector(".weather__temperature");
	if (formEl) {
		formEl.addEventListener("submit", handleSubmit);
		function handleSubmit(e) {
			e.preventDefault();

			const [lat, lng] = e.target.elements;

			latEl.innerText = lat.value;
			lngEl.innerText = lng.value;
			const key = "ae0b63340b584138a90b255839091839";
			fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat.value}&lon=${lng.value}&units=I&lang=pl`)
				.then((resp) => {
					if (resp.ok) {
						return resp.json();
					}
				})
				.then((data) => {
					console.log(data);

					summaryEl.innerText = data.data[0].weather.description;
					temperatureEl.innerText = data.data[0].temp;
				})
				.catch((err) => console.log("Nie mogę pobrać danych", err));
		}
	}
}
