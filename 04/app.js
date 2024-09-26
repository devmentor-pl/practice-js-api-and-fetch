document.addEventListener("DOMContentLoaded", init);
const latInput = document.querySelector(".form__field--lat");
const longInput = document.querySelector(".form__field--lng");
const submitBtn = document.querySelector(".form__submit");
const spanElLatitude = document.querySelector(".weather__lat");
const spanElLongtitude = document.querySelector(".weather__lng");
const spanElSummary = document.querySelector(".weather__summary");
const spanElTemp = document.querySelector(".weather__temperature");

function init() {
  console.log("DOM");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const latitude = getData(latInput);
    const longtitude = getData(longInput);
    changeText(spanElLatitude, latitude);
    changeText(spanElLongtitude, longtitude);
    const api = `https://api.weatherbit.io/v2.0/current?key=920326822a194b6dbb55c547ad94b3b2&lat=${latitude}&lon=${longtitude}&lang=pl`;
    getWeatherData(api);
  });
}

function getData(element) {
  const display = element.value;
  return display;
}

function changeText(element, display) {
  element.textContent = display;
}

function getWeatherData(apiAdress) {
  fetch(apiAdress)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    //.then((resp) => console.log(resp))
    .then((resp1) => getWeatherInfo(resp1))
    .catch((err) => console.error(err))
    .finally(() => console.log("Dane o pogodzie są pobrane"));
}

function getWeatherInfo(api) {
  getWeatherDescription(api);
  getTemperature(api);
}

function getWeatherDescription(api) {
  const { weather } = api["data"][0];
  console.log(api["data"][0]);
  spanElSummary.textContent = weather;
}

function getTemperature(api) {
  const { description } = api["data"][0]["weather"];
  spanElTemp.textContent = description;
}
