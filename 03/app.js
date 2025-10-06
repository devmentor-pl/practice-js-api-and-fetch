document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const btnEl = document.querySelector('button')
btnEl.addEventListener('click', handleBtn)
// btnEl.addEventListener('click', insertIP)

function handleBtn() {
    const promise = fetch('https://api.ipify.org?format=json');
    promise
        .then(resp => {
            if (resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(resp => {
            console.log(resp)
            const spanEl = document.querySelector('span')
            if (spanEl) {
                spanEl.innerText = resp.ip;
                console.log(spanEl)
            }
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });
}

// function insertIP(e) {
//     const spanEl = document.querySelector('span')
//     if (spanEl) {
//         spanEl.innerText = e.target.ip;
//         console.log(spanEl)
//     }
// }