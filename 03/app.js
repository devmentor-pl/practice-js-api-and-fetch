/*Tym razem Twoim zadaniem jest napisanie kodu, który pozwoli po kliknięciu w <button/> pobrać number IP z jakim łączysz się z Internetem i wstawić go do elementu <span/>.

Do rozwiązanie tego zadania możesz użyć API dostępnego pod tym adresem: https://www.ipify.org. Dane odbierane z API powinny być w formacie JSON.*/

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button');
    button.addEventListener('click', getNumber);
}

const getNumber = () => {
    const promise = fetch('https://api.ipify.org?format=json');

    promise
        .then(resp => {
            if (resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })

        .then(ip => {
            console.log(ip);
            const span = document.querySelector('span');
            span.innerText = ip.ip;
        })

        .catch(err => console.log(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone')
        });

}