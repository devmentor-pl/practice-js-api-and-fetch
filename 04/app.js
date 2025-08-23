document.addEventListener("DOMContentLoaded", init);
const API_KEY = "1b52412b23054d089f9fdb7574fc589e";
function init() {
  console.log("DOM");
}

const form = document.querySelector(".form");

form.addEventListener("submit", checkWeather);

function checkWeather(e) {
  e.preventDefault();
  const latitude = document.querySelector(".form__field--lat").value;
  const longitude = document.querySelector(".form__field--lng").value;
  const longitudeStrong = document.querySelector(".weather__lng");
  const latitudeStrong = document.querySelector(".weather__lat");
  longitudeStrong.textContent = longitude;
  latitudeStrong.textContent = latitude;
  const weatherSummary = document.querySelector(".weather__summary");
  const weatherTemperature = document.querySelector(".weather__temperature");
  const link = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${latitude}&lon=${longitude}&units=I&lang=pl`;
  const promise = fetch(link);
  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      console.log("data: ", data);
      weatherSummary.textContent = data.data[0].weather.description;
      weatherTemperature.textContent = data.data[0].temp;
      return data;
    })
    .catch((err) => console.error(err))
    .finally("Pobieranie danych z API zakończone");
}
