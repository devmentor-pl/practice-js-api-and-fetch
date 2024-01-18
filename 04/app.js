import Api from "./Api.js";
import Weather from "./Weather.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const [lat, long] = e.target.elements;
  const latValue = lat.value;
  const longValue = long.value;
  const areCoordsValid = validateCoords(latValue, longValue);
  if (!areCoordsValid) return alert("Coords data is not valid");

  const api = new Api();
  const weather = new Weather(api);
  weather.load([latValue, longValue]);
}

function validateCoords(lat, long) {
  const regexLat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
  const regexLong =
    /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

  const validLat = regexLat.test(lat);
  const validLong = regexLong.test(long);

  return validLat && validLong;
}
