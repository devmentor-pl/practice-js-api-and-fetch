document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button')
    const span = document.querySelector('span')

    button.addEventListener('click', async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if(!response.ok) {
                throw new Error('Network response failed');
            }
            const data = await response.json();
            span.textContent = data.ip;
        } catch (error) {
            console.error(error);
            span.textContent = 'Error fetching IP';
        }
    });
}