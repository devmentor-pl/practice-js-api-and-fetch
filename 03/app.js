document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const btn = document.querySelector('button')
    const span = document.querySelector('span')

    btn.addEventListener('click', () => {
        const options = {
            method: 'GET'
        }
        const promise = fetch('https://api.ipify.org?format=json', options)
    
        promise
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
            }).then(data => {
                // console.log(data.ip);
                span.innerText = data.ip
            }).catch(err => console.error(err))

    })
}
