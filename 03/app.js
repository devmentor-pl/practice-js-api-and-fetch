document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button')
    button.addEventListener('click', handleLoadIpButton)
}

function handleLoadIpButton(e) {
    const url = 'https://api.ipify.org?format=json'

    fetch(url)
        .then(resp => resp.json())
        .then(data => displayIP(data.ip))
        .catch(err => console.log(err))
}

function displayIP(ip) {
    const span = document.querySelector('span')

    span.textContent = ip
}