
document.addEventListener('DOMContentLoaded', init);

const button = document.querySelector('button');
const span = document.querySelector('span');

function init() {
    console.log('DOM');
    button.addEventListener('click', getIP);
}

const getIP = () => {
    fetch('https://api.ipify.org?format=json').then(response => {
        console.log(response.ok)
        if (response.ok === true) {
            return response.json();
        }
    })
    .then(result => span.innerHTML = result.ip)
    .catch(error => console.log(error));
}
