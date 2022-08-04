class API {
	constructor() {
		this.API_KEY = "1afb275531dc4926a413e2161557d1a5";
		this.url = `https://api.weatherbit.io/v2.0/current?key=${this.API_KEY}&lang=pl&units=I`;
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
	}
	get(latValue, lngValue) {
		console.log(latValue, lngValue);
		return this._fetch(latValue, lngValue);
	}
}
export default API;
