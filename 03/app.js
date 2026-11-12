document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
}

const btn = document.querySelector("button");
btn.addEventListener("click", getIpAddress);

const apiUrl = "http://ip-api.com/json";

function getIpAddress() {
  const promise = fetch(apiUrl);
  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp.status);
    })
    .then((data) => {
      const ipAddress = data.query;
      const span = document.querySelector("span");
      span.innerText = ipAddress;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
