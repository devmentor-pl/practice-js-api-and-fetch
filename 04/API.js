class API {
	constructor() {
		this.API_KEY = "1afb275531dc4926a413e2161557d1a5";
		this.url = `https://api.weatherbit.io/v2.0/current?key=${this.API_KEY}&lang=pl&units=I`;
		// &lat=${getLatValue()}&lon=${getLongValue()}`;
	}

	_fetch(lat = "", long = "", options = { method: "GET" }) {
		const path = `${this.url}&lat=${lat}&lon=${long}`;
		const promise = fetch(path, options);

		return promise
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.then((data) => {
				this.insert(data.data[0].weather.description, data.data[0].temp);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				console.log("odpytywanie zakończone");
			});
	}
	get(latValue, lngValue) {
		console.log(latValue, lngValue);
		return this._fetch(latValue, lngValue);
	}
	insert(summary, temp) {
		const latValue = document.querySelector(".form__field--lat").value;
		const lngValue = document.querySelector(".form__field--lng").value;
		const latText = document.querySelector(".weather__lat");
		const lngText = document.querySelector(".weather__lng");
		const summaryItem = document.querySelector(".weather__summary");
		const tempItem = document.querySelector(".weather__temperature");
		latText.innerText = latValue;
		lngText.innerText = lngValue;
		summaryItem.innerText = summary;
		tempItem.innerText = temp;
	}
}
export default API;
