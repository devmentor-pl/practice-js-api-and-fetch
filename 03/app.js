document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const getIpButton = document.querySelector('button')
    const ipAddressSpan = document.querySelector('span')

    if (getIpButton && ipAddressSpan) {
        getIpButton.addEventListener('click', () => {
            console.log('klikniety przycisk');
            ipAddressSpan.textContent = 'Pobieranie adresu...'

            const apiUrl = 'http://ip-api.com/json'

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Błąd sieci: ${response.status}`)
                    }
                    return response.json();
                })
                .then(data => {
                    ipAddressSpan.textContent = data.query
                })
                .catch(error => {
                    console.error('Wystąpił błąd podczas pobierania IP:', error);
                    ipAddressSpan.textContent = 'Błąd!'
                });
        });
    } else {
        console.error('nie znaleziono przycisku lub elementu span');
    }
}