document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const button = document.querySelector('button')
    const span = document.querySelector('span')

    const promise = fetch('https://api.ipify.org?format=json')

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }

            return Promise.reject()
        })
        .then(ip => {
            button.addEventListener('click', e => {
                span.innerText = ip.ip
            })
        })
        .catch(err => console.error(err))

}