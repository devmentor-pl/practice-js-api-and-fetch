document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  const btnEl = document.querySelector("button");
  const spanEl = document.querySelector("span");

  btnEl.addEventListener("click", setIp);

  function setIp() {
    fetch("https://api.ipify.org?format=json")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        spanEl.innerText = data.ip;
      });
  }
}
