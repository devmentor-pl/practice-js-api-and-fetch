document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const btn = document.querySelector('button');
    btn.addEventListener('click', getIP);
}

async function getIP() {
    const res = await fetch("https://api64.ipify.org?format=json");
    const resInJson = await res.json();
    displayIp(resInJson.ip);
}

function displayIp(ip) {
    const span = document.querySelector('span');
    span.textContent = ip;
}