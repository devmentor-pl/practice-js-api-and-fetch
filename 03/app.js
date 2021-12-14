const checkMyIPBtn = document.querySelector(".ip-btn");
const showMyIPSpan = document.querySelector(".ip-adress");

const showMyIP = () => {
  const getMyIPPromise = fetch("https://api.ipify.org?format=json");

  getMyIPPromise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((ipObject) => (showMyIPSpan.innerText = ipObject["ip"]))
    .catch((err) => console.error(err))
    .finally(() => {
      console.log(`Moje IP to: ${showMyIPSpan.textContent}`);
    });
};

document.addEventListener("click", showMyIP);
