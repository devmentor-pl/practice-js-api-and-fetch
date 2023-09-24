document.addEventListener("DOMContentLoaded", init);
const formEl = document.querySelector("form");

function init() {
  console.log("DOM");
  if (formEl) {
    formEl.addEventListener("submit", setInputsValue);
  }
}

const setInputsValue = (e) => {
  e.preventDefault();
  const [lat, long] = formEl.elements;
  const latValue = parseInt(lat.value);
  const longValue = parseInt(long.value);
  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=c96fe0de2bc548d99a18986150ccb993&lat=${latValue}&lon=${longValue}&units=I&lang=pl`;
  fetch(apiUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => displayDataFromApi(data.data))
    .catch((err) => console.log(err));
};

const displayDataFromApi = (data) => {
  const weatherInfo = document.querySelectorAll("strong");
  const [lat, long, weather, temp] = weatherInfo;
  data.forEach((element) => {
    lat.innerText = `${element.lat}`;
    long.innerText = `${element.lon}`;
    weather.innerText = `${element.weather.description}`;
    temp.innerText = `${element.app_temp}`;
  });
  console.log(data)
};
