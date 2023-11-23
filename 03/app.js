document.addEventListener('DOMContentLoaded', init);


function init() {
    const button = document.querySelector('.button')
    const ipSpan = document.querySelector('.ipSpan')

    button.addEventListener('click', () => {

        const promise = fetch('https://api.ipify.org?format=json');
        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                return Promise.reject(resp);
            })
            .then(data => {
                const idData = data.ip
                ipSpan.textContent = idData
            })
            
            .catch(err => {
                console.error(err);
                ipSpan.textContent = 'Błąd podczas pobierania IP';
            })
                
            .finally(() => {
                console.log('Odpytywanie API zakończone!')
            });
    
    
    
        console.log('DOM');

    })

  
}