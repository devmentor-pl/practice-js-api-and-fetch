document.addEventListener("DOMContentLoaded", init);
const btnEl = document.querySelector("button");
const spanEl = document.querySelector("span");

function init() {
  console.log("DOM");
  loadIp();
}

function loadIp() {
  fetch("https://api.ipify.org?format=json")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((ip) => insertIp(ip))
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("Api zakończyło działanie");
    });
}

function insertIp(ip) {
  btnEl.addEventListener("click", () => {
    spanEl.innerHTML = ip.ip;
  });
}
