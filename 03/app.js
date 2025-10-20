document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button');
    const span = document.querySelector('span');

    button.addEventListener('click', () => {
        fetch('https://api.ipify.org?format=json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd sieci!');
                }
                return response.json();
            })
            .then(data => {
                span.textContent = data.ip;
            })
            .catch(err => {
                console.error(err);
                span.textContent = 'błąd pobierania';
            });
    });
}