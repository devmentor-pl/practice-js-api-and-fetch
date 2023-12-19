document.addEventListener('DOMContentLoaded', init);

const btn = document.querySelector('button')
const spanEl = document.querySelector('span')

function getIp() {
    const promise = fetch('https://api.ipify.org?format=json')
    promise.then(resp => {
        if (resp.ok) {
            return resp.json()
        }
        return Promise.reject(resp)
    })
    promise.then(json => {
        const ip = json.ip;
        spanEl.innerText = ip
    })
    promise.catch(err => console.error(err))
}

btn.addEventListener('click', getIp)

function init() {
    console.log('DOM');
}
// ip jest undefined, nie wiem dlaczego