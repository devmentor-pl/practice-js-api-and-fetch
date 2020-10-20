document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", onSubmitForm);
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  const latInputElem = document.querySelector(".form__field--lat");
  const lngInputElem = document.querySelector(".form__field--lng");

  if (latInputElem && lngInputElem) {
    const lat = latInputElem.value;
    const lng = lngInputElem.value;

    if (lat.length === 0 || isNaN(lat)) {
      alert("Proszę podać prawidłową szerokość geograficzną");
      return;
    }

    if (lng.length === 0 || isNaN(lng)) {
      alert("Proszę podać prawidłową długość geograficzną");
      return;
    }

    fetchWeather(lat, lng);
  }
}

function fetchWeather(latitude, longitude) {
  const apiKey = "cc10888f25a345349699fbb10686855f";
  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl&units=I`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => showWeatherInfo(json))
    .catch((err) => console.error(err));
}

function showWeatherInfo({ data }) {
  if (data.length > 0) {
    const {
      lat,
      lon,
      weather: { description },
      temp,
    } = data[0];

    showData(".weather__lat", lat);
    showData(".weather__lng", lon);
    showData(".weather__summary", description);
    showData(".weather__temperature", temp);
  }
}

function showData(selector, value) {
  const elem = document.querySelector(selector);

  if (elem) {
    elem.innerText = value;
  }
}
