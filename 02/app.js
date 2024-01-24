document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.error(`${err.message}`))
        .finally(() => console.log('Finish'))
};

function setBorderColorAsync(element, color) {
    return new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve();
            }, Math.random() * 3000);
        } else {
            reject(alert('Paremetr ~element~ musi być prawidłowym elementem DOM'))
        };
    });
};

/*
Sprawdzam, czy element istnieje i czy jest instancją HTMLElement przed ustawieniem koloru obramowania. 
pomaga to zminimalizować możliwość wystąpienia błędów.
Używam setTimeout do opóźnienia ustawienia koloru.
Używam resolve do zakończenia sukcesu i reject do obsługi błędów.
Dodatkowo, używam .finally, co pozwala na wykonanie pewnych operacji niezależnie od tego, 
czy obietnica została rozwiązana, czy odrzucona.
Metoda .catch jest używana w kontekście Promise i służy do obsługi błędów.
.catch przekazuje do swojej funkcji zwrotnej (callback) obiekt błędu (err), który zawiera informacje o błędzie

 */
