document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      fetch("https://api.ipify.org?format=json")
        .then((resp) => resp.json())
        .then((ipContainer) => getIp(ipContainer))
        .then((ip) => showIp(ip))
        .catch((error) => console.log("Błąd: ", error));
    });
  }
}

const getIp = (ipContainer) => {
  const ip = ipContainer.ip;
  return ip;
};

const showIp = (ip) => {
  const span = document.querySelector("span");
  span.textContent = ip;
};