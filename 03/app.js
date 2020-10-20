document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  const button = document.querySelector("button");

  if (button) {
    button.addEventListener("click", () => {
      fetchIPAddress();
    });
  }
}

function fetchIPAddress() {
  const aipUrl = "https://api.ipify.org/?format=json";

  fetch(aipUrl)
    .then((response) => response.json())
    .then((json) => showIPAddress(json.ip))
    .catch((err) => console.error(err));
}

function showIPAddress(ip) {
  const spanElem = document.querySelector("span");

  if (spanElem) {
    spanElem.innerText = ip;
  }
}
