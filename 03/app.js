document.addEventListener("DOMContentLoaded", init);
const btnEl = document.querySelector("button");
const spanEl = document.querySelector("span");

function init() {
  console.log("DOM");
  loadIp();
}

function loadIp() {
  btnEl.addEventListener("click", () => {
    fetch("https://api.ipify.org?format=json")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then((ip) => insertIP(ip))
      .catch((err) => console.error(err))
      .finally(() => {
        console.log("Api zakończyło działanie");
      });
  });
}

function insertIP(ip) {
  spanEl.innerHTML = ip.ip;
}
