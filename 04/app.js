const apiUrl = `https://api.weatherbit.io/v2.0/current?key=2d15c1f36cfb4b6796484745262c485a&include=minutely&lang=pl&units=I`;

const form = document.querySelector(".form");

// weather text elements
const weatherLat = document.querySelector(".weather__lat");
const weatherLng = document.querySelector(".weather__lng");
const weatherSummary = document.querySelector(".weather__summary");
const temperature = document.querySelector(".weather__temperature");

form.addEventListener("submit", init);

function init(e) {
  e.preventDefault();

  setLatLng();
  getWeatherDesc();
  getWeatherTemp();
}

function setLatLng() {
  const latInput = document.querySelector(".form__field--lat");
  const lngInput = document.querySelector(".form__field--lng");

  let latValue = latInput.value;
  let lngValue = lngInput.value;

  weatherLat.innerText = latValue;
  weatherLng.innerText = lngValue;

  const promise = fetch(`${apiUrl}&lat=${latValue}&lon=${lngValue}`);

  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((resp) => console.log(resp));
}

function getWeatherDesc() {
  fetch(`${apiUrl}&lat=${weatherLat.innerText}&lon=${weatherLng.innerText}`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then(
      (resp) =>
        (weatherSummary.innerText = resp["data"][0]["weather"]["description"])
    );
}

function getWeatherTemp() {
  fetch(`${apiUrl}&lat=${weatherLat.innerText}&lon=${weatherLng.innerText}`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((resp) => (temperature.innerText = resp["data"][0]["temp"]));
}
