document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  
  const button = document.querySelector("button");

  button.addEventListener("click", showIp);
}

function showIp() {
  const span = document.querySelector("span");
  fetchIp().then(resp => placeId(resp, span));
}

function fetchIp() {
  return fetch("https://api.ipify.org?format=json").then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
  });
}

function placeId(data, place) {
  place.innerText = data.ip;
}