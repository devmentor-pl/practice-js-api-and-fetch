document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", showData);
}

function showData(evt) {
  evt.preventDefault();
  const { latitude, longitude } = getCoordinates();

  fetchAPI(latitude, longitude)
    .then((obj) => extractAPIData(obj))
    .then((weatherAPIData) => showAPIData(weatherAPIData))
    .catch((err) => console.log(`Invalid data. Error type: ${err}`));
}

function getCoordinates() {
  const coordinatesList = Array.from(document.querySelectorAll(".form__field"));
  const clientCoordinates = coordinatesList.map((ele) => {
    return ele.value;
  });
  const latitude = clientCoordinates[0];
  const longitude = clientCoordinates[1];
  return { latitude, longitude };
}

function fetchAPI(latitude, longitude) {
  return fetch(
    `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=ddf7d1e85e1c468b8595edc33a4f75d8&lang=pl&units=I`
  )
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        return Promise.reject(resp);
      }
    })
    .finally(console.log("Fetching Weather ends."));
}

function extractAPIData(obj) {
  const weatherAPIData = obj.data[0];
  return weatherAPIData;
}

function showAPIData(weatherAPIData) {
  const weatherSection = document.querySelector(".weather");
  const latitude = weatherSection.querySelector(".weather__lat");
  const longitude = weatherSection.querySelector(".weather__lng");
  const weatherSummary = weatherSection.querySelector(".weather__summary");
  const temperature = weatherSection.querySelector(".weather__temperature");
  latitude.innerText = weatherAPIData.lat;
  longitude.innerText = weatherAPIData.lon;
  weatherSummary.innerText = weatherAPIData.weather.description;
  temperature.innerText = weatherAPIData.temp;
}
