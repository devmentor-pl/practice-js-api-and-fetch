document.addEventListener('DOMContentLoaded', init);

function init() {

    console.log('DOM');

    const button = document.querySelector('button')
    const span = document.querySelector('span')


    button.addEventListener('click', () =>{

        let ipInfo = null

        fetch('http://ip-api.com/json/')
        .then(resp => resp.json())
        .then(data =>{

            span.textContent = data.query // query = IP
            ipInfo = data

        })

        .catch(err => console.error('Błąd:', err))
        .finally(() =>{

            console.log('Dane o IP:', ipInfo)

        })

    })
    
        
}

