document.addEventListener("DOMContentLoaded", init);

const button = document.querySelector("button");
const span = document.querySelector("span");

function init() {
  console.log("DOM");
  button.addEventListener("click", getIP);
}

function getIP() {
  fetch("https://api.ipify.org?format=json")
    .then((resp) => resp.json())
    .then((data) => renderIP(data.ip));
}

function renderIP(ip) {
  span.textContent = ip;
}
