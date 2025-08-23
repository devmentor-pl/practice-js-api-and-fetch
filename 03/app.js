document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
}

const btn = document.querySelector("button");
btn.addEventListener("click", checkIP);

function checkIP() {
  const promise = fetch("https://api.ipify.org?format=json");
  const ipSpan = document.querySelector("span");
  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      const ip = data.ip;
      ipSpan.textContent = ip;
    })
    .catch((err) => console.error(err))
    .finally("Zakończone odczytywanie z API");
}
