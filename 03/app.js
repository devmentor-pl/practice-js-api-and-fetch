const api = "https://api.ipify.org?format=json";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const buttonEl = document.querySelector("button");
  if (buttonEl) buttonEl.addEventListener("click", loadApi);
}

function loadApi() {
  fetch(api)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      showApi(data.ip);
    })
    .catch((err) => console.error(err));
}

function showApi(data) {
  const spanEl = document.querySelector("span");
  spanEl.innerText = data;
}
