const url = 'https://api.ipify.org?format=json';
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const btnEl = document.querySelector('button');
    btnEl.addEventListener('click', showIp)
}

function showIp(event) {
    fetch(url)
        .then(response => response.json())
        .then(showInSpan)
        .catch(err => console.error(err))
}

function showInSpan(data) {
    const spanEl = document.querySelector('span');
    spanEl.innerText = data.ip;
}