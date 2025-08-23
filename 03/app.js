//DZIAŁA
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const fetchIPButton = document.getElementById('fetchIPButton');
const ipAddressSpan = document.getElementById('ipAddress');

fetchIPButton.addEventListener('click', () => {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => { 
        const ipAddress = data.ip;
        ipAddressSpan.innerText = ipAddress;
    }).catch(error => {
        console.error('Error fetching IP adress:', error);
    });
});