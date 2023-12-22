document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM loaded');
    document.getElementById('ipButton').addEventListener('click', fetchIPAddress);
}


function fetchIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipDisplay').textContent = `Twój adres IP: ${data.ip}`;
        })
        .catch(error => {
            console.error('Błąd podczas pobierania IP:', error);
            document.getElementById('ipDisplay').textContent = 'Nie udało się pobrać adresu IP';
        });
}


