document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')

    const button = document.querySelector('button')
    button.addEventListener('click', getAddress)

    function getAddress() {
        console.log('click')
        fetch('https://www.ipify.org')
            .then(response => {
                console.log(response)
                if(reponse.ok) {
                    return reponse.json()
                } 
            })
            .then(val => console.log(val))
            .catch(err => console.log('Problem: ',err))
    }

    const span = document.querySelector('span')
    span.innerHTML = '0.0.0.1'


}