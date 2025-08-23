document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    takeIp()
}


function takeIp() {

    const apiUrl = 'https://api.ipify.org?format=json'
    const button = document.querySelector('button')
    const spanEl = document.querySelector('span')

    button.addEventListener('click', () => {

        fetch(apiUrl)
            .then(resp => resp.json())
            .then(ip => {
                console.log(ip)
                spanEl.innerText = ip.ip

            })
            .catch(err => { console.log(err) })


    })


}