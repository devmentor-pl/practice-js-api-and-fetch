document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  
  const button = document.querySelector("button");
  const span = document.querySelector("span");

  fetchIp().then((resp) => {
    button.addEventListener("click", () => showIp(resp, span));
  });
}

function showIp(data, place) {
  console.log(place);
  place.innerText = data.ip;
}

function fetchIp() {
  return fetch("https://api.ipify.org?format=json").then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
  });
}