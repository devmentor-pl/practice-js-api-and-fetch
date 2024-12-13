document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    document.querySelector('button').addEventListener('click', getIp);

    function getIp() {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('span').innerText = data.ip;
            })
            .catch((err) => {
                console.error('Błąd podczas pobierania adresu IP:', err);
            });
    }
}