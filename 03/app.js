document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const promise = fetch('https://api.ipify.org?format=json')
 
    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            return Promise.reject(resp)
        })
        .then(ip => getIp(ip))
        .catch(err => console.error(err))
        .finally(() => console.log('done'))


    function getIp(ip) {
        const ipValue = ip.ip
        console.log(ipValue)
        const button = document.querySelector('button')
        button.addEventListener('click', e => {
            e.preventDefault()
            const spanElement = document.querySelector('span')
            spanElement.innerText = ipValue
        })
    }
}