document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')

    const button = document.querySelector('button')
    button.addEventListener('click', getAddress)

    const span = document.querySelector('span')

    function getAddress() {
        console.log('click')
        fetch('https://api.ipify.org?format=json')
            .then(response => {
                console.log(response)
                if(response.ok) {
                    return response.json()
                } 
            })
            .then(val => {
                console.log(val)
                span.innerHTML = val.ip
            })
            .catch(err => console.log('Problem: ',err))
    }

    
    


}