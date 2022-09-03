document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button')
    button.addEventListener('click', getIP)
}

const getIP = () => {
    const span = document.querySelector('span')
    const promise = fetch('https://api.ipify.org?format=json')
    promise.then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    })
        .then(data => {
            if (span) {
                span.innerText = data.ip
            }
            else {
                console.error('Error')
            }

        })
        .catch(err => {
            console.error('Error')
        })
        .finally(() => console.log('Finished'))


}