document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector("button");
    const span = document.querySelector("span");
    
    const promise = fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => button.addEventListener('click', () => {
        span.innerText = data.ip
    }));
        
    console.log('DOM');
}