document.addEventListener('DOMContentLoaded', init);

function init() {
  const ipButton = document.querySelector('button');
  ipButton.addEventListener('click', getIpAddress);
}

function getIpAddress() {
  fetch('https://api.ipify.org?format=json')
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((data) => {
      passId(data.ip);
    })
    .catch((err) => console.error(err));
}

function passId(id) {
  const ipDisplay = document.querySelector('span');
  ipDisplay.textContent = id;
}
