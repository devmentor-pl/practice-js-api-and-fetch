document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const form = document.querySelector("form");
  form.addEventListener("submit", getLocationData);
}

function getWeatherForecast(lat, lon) {
  const apiKey = `e9b8d60355fd426e98d5afccad5c9454`;
  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}&units=I`;
  const promise = fetch(apiUrl);
  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        return Promise.reject(resp.status);
      }
    })
    .then((data) => {
      console.log(data);
      showWeatherForecast(data);
    })
    .catch((err) => console.error("Something went wrong:", err));
}

function showWeatherForecast(data) {
  const weatherCity = document.querySelector(".weather__city");
  const weatherLatitude = document.querySelector(".weather__lat");
  const weatherLongitude = document.querySelector(".weather__lng");
  const weatherSummary = document.querySelector(".weather__summary");
  const weatherTemp = document.querySelector(".weather__temperature");
  const weatherData = data.data[0];
  weatherCity.innerText = weatherData.city_name;
  weatherTemp.innerText = weatherData.app_temp;
  weatherLatitude.innerText = weatherData.lat;
  weatherLongitude.innerText = weatherData.lon;
  weatherSummary.innerText = weatherData.weather.description;
}

function getLocationData(event) {
  event.preventDefault();
  const latitude = document.querySelector(".form__field--lat").value;
  const longitude = document.querySelector(".form__field--lng").value;
  if (latitude && longitude) {
    getWeatherForecast(latitude, longitude);
  } else {
    alert("Uzupełnij pola, żeby sprawdzić pogodę.");
  }
}
