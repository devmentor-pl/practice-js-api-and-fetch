document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const btnEl = document.querySelector('button')
    const spanEl = document.querySelector('span')
    if(btnEl) {
        btnEl.addEventListener(
        'click',
        getIp)
    }

    function getIp() {
        const promise = fetch('https://api.ipify.org?format=json')
    
        promise.then(resp => {
            if(resp.ok) {
                return resp.json()
            }   
        }).then(data => {
            if(spanEl) {
                spanEl.innerText = data.ip
                console.log(data)
            } else {
                console.error('Element not found')
            }
        })
        .catch(err => console.log('I can not download data', err))
    
    }
}