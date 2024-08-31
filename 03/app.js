document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  showIp();
}

function getIp() {
  return fetch("https://api.ipify.org?format=json")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      Promise.reject(resp);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => console.log("Finish"));
}

function showIp() {
  const button = document.querySelector("button");
  const spanEl = document.querySelector("span");

  button.addEventListener("click", () => {
    getIp().then((data) => {
      spanEl.innerText = data.ip;
    });
  });
}
