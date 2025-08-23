document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM");

    const getIpButton = document.querySelector("button");
    const ipResult = document.querySelector("span");

    if (getIpButton && ipResult) {
        getIpButton.addEventListener("click", () => {
            // Wywołaj funkcję do pobrania i wyświetlenia numeru IP po kliknięciu przycisku
            getAndDisplayIp(ipResult);
        });
    } else {
        console.error("One or both elements not found");
    }
}

function getAndDisplayIp(ipResultElement) {
    // Wykorzystaj fetch do wykonania zapytania do API ipify.org
    fetch("https://api.ipify.org?format=json")
        .then((response) => response.json()) // Przetwórz odpowiedź na format JSON
        .then((data) => {
            // Ustaw wynik w elemencie <span>
            ipResultElement.textContent = `Your IP: ${data.ip}`;
        })
        .catch((error) => {
            // W przypadku błędu, wyświetl komunikat
            console.error("Error fetching IP:", error);
            ipResultElement.textContent = "Error fetching IP";
        });
}
