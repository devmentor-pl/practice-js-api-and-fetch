document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', displayWeather);
}

function displayWeather(e) {
  e.preventDefault();

  const latInput = document.querySelector('.form__field--lat');
  const lngInput = document.querySelector('.form__field--lng');
  const latitude = latInput.value;
  const longitude = lngInput.value;

  getWeatherData(latitude, longitude);
}

function getWeatherData(latitude, longitude) {
  const apiKey = '338f265a980b48e19459c7cf7fb34484';
  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`;
  fetch(apiUrl)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((data) => displayApiData(data, latitude, longitude))
    .catch((err) => console.error(err));
}

function displayApiData(data, latitude, longitude) {
  const weatherLat = document.querySelector('.weather__lat');
  const weatherLng = document.querySelector('.weather__lng');
  const weatherSummary = document.querySelector('.weather__summary');
  const weatherTemp = document.querySelector('.weather__temperature');
  weatherLat.textContent = latitude;
  weatherLng.textContent = longitude;
  weatherSummary.textContent = data.data[0].weather.description;
  weatherTemp.textContent = data.data[0].temp;
}
