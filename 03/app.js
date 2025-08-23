document.addEventListener("DOMContentLoaded", init);
const API_URL =
  "https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json";

function init() {
  console.log("DOM");

  const btn = document.querySelector("button");
  btn.addEventListener("click", loadData);
}

async function loadData() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    if (data.ip) {
      printIp(data.ip);
    }
  } catch (err) {
    console.error(err);
  }
}

function printIp(ip) {
  const span = document.querySelector("span");
  span.innerText = ip;
}
