document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button');
    const span = document.querySelector('span');

    button.addEventListener('click', function() {
        fetch('https://cors-anywhere.herokuapp.com/http://ip-api.com/json')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                span.textContent = data.query;
            })
            .catch(error => {
                console.log('Problem with operation: ', error);
            });
    });
}