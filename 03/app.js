document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("button").addEventListener("click", getIpFromApi);
}

function getIpFromApi() {
  const apiUrl = "https://api.ipify.org?format=json";
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) return response.json();
      Promise.reject(response);
    })
    .then((data) => {
      document.querySelector("span").innerText = data.ip;
    })
    .catch((error) => console.error(error));
}
