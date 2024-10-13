document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button');
    const ipDisplay = document.getElementById('ipDisplay')
    console.log('DOM');

    button.addEventListener('click', fetchIP);

    function fetchIP() {
        fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Odpowiedź serwera niepoprawna');
            }
            return response.json();

        })
        .then(data => {
            ipDisplay.textContent = data.ip;

        })
        .catch(error => {
            console.error('Wystąpił problem', error)
        })
    }
}