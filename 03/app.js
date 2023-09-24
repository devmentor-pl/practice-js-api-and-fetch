document.addEventListener("DOMContentLoaded", init);
const sectionEl = document.querySelector("section");

function init() {
  const btn = sectionEl.querySelector("button");
  if (btn) {
    btn.addEventListener("click", getIp);
  }
}

const getIp = () => {
  const apiUrl = "https://api.ipify.org?format=json";
  fetch(apiUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      setIp(data.ip);
    })
    .catch((err) => console.log(err));
};

const setIp = (ip) => {
  const spanEl = sectionEl.querySelector("span");
  spanEl.innerText = `${ip}`;
};
