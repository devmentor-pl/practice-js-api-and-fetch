document.addEventListener('DOMContentLoaded', init);
// 192.168.0.107
function init() {
  console.log('DOM');
  const btn = document.querySelector('button');
  if (btn) {
    btn.addEventListener('click', onClick);
  }
}

function onClick() {
  getIp();
}

function insertData(data) {
  const span = document.querySelector('span');
  if (span) {
    span.innerText = data;
  }
}

function getIp() {
  fetch('https://api.ipify.org?format=json')
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((data) => insertData(data.ip))
    .catch((err) => console.error('err', err));
}
