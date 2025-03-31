// Define an asynchronous function named 'init'
const init = async() => {
    console.log('DOM');

    const btn = document.querySelector('button');
    const span = document.querySelector('span');

    btn.addEventListener('click', async () => {
        fetch('https://api.ipify.org')
            .then(response => response.text())
            .then(ip => {
                span.textContent = ip;
            })
            .catch(error => {
                console.log(error);
                span.textContent = 'Error fetching IP';
            });
    });
}

// Add an event listener for the 'DOMContentLoaded' event to the document
// When the DOM is fully loaded, call the 'init' function
document.addEventListener('DOMContentLoaded', init);