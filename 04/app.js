document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');
	const formEl = document.querySelector('form');
	formEl.addEventListener('submit', getWeather);
}

function getWeather(e) {
	e.preventDefault();

	const latEl = document.querySelector('.form__field--lat');
	const lat = latEl.value;
	const lngEl = document.querySelector('.form__field--lng');
	const lng = lngEl.value;
	const latData = document.querySelector('.weather__lat');
	const lngData = document.querySelector('.weather__lng');
	latData.innerText = lat;
	lngData.innerText = lng;
	const weatherEl = document.querySelector('.weather__summary');
	const tempEl = document.querySelector('.weather__temperature');
	const key = '6605418839c74dae93491ed964ff73a0';

	const options = {
		method: 'GET',
	};

	const promise = fetch(
		`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&units=I&lang=pl`,options);

    promise
        .then(resp => {
            if(resp.ok) {return resp.json();}
            return Promise.reject(resp);
        })
        .then(data => {
            (weatherEl.innerText = (data.data[0].weather.description), tempEl.innerText = (data.data[0].temp))
        })
        .catch(err => console.error(err));    

}


