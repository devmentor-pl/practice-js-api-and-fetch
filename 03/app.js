document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const buttonEl = document.querySelector('button');
    const spanEl = document.querySelector('span');

    // console.log( buttonEl, spanEl)

    buttonEl.addEventListener('click', getIp);

    function getIp() {
        fetch('https://api.ipify.org?format=json')
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
            }).then(data => {
                if(spanEl) {
                    // console.log(data)
                    spanEl.innerText = data.ip
                } else {
                    console.error('brak elementu span')
                }
            }).catch(err => console.error('coś poszło nie tak =>', err))
    }

}