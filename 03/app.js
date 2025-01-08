document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button');
    const span = document.querySelector('span');

    button.addEventListener('click', getIP);

    async function getIP() {
        try {
            const response = await fetch("http://ip-api.com/json");
            if(!response.ok) throw new Error('Fetching failed');
            
            const data = await response.json();
            span.textContent = data.query;
        } catch (error) {
            console.error(error)
        }
    }
}