class WeatherAPI {
	constructor() {
		this.KEY_API = '6265f4d03b4b474f88d58705e51823bc';
	}

	_fetch(latitude, longitude) {
		const API = `https://api.weatherbit.io/v2.0/current?key=${this.KEY_API}&lat=${latitude}&lon=${longitude}&units=I`;

		const weatherData = fetch(API);

		return weatherData
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.catch(err => console.error(err))
			.finally(() => {
				console.log(`Odczytywanie API zakończone`);
			});
	}
}
export default WeatherAPI;
