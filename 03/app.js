document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const button = document.querySelector("button");
    const span = document.querySelector("span");
    button.addEventListener("click", async () => {
        const ip = await getIP()
        span.innerHTML = ip.ip;
    })
}

const getIP = async () => {
    try {
        
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const ip = await response.json();
        return ip;
    } catch (error) {
        console.error(error)
    }
}