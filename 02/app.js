/* W pliku app.js ponownie masz przygotowany kod, który ustawia kolor obramowania dla wyszukanych div-ów. Tym razem jest on zabezpieczony przed podaniem nieprawidłowego elementu czy braku callback-a.

Twoim zadaniem jest przebudować funckję setBorderColorAsync() w taki sposób, aby realizowała to samo przy pomocy obietnic (Promise) tj. powinna zwracać obiekt utworzony przy pomocy new Promise( (resolve, reject) => ...);

Pamiętaj, że resolve to funkcja, która jest uruchamiana w przypadku powodzenia, natomiast reject gdy coś jest nie tak.

Po wprowadzeniu tej zmiany musisz również zmienić wykorzystanie tej funkcji zgodnie z jej obecną implementacją. Pamiętaj, że .then może być wielokrotnie wykorzystane.*/





//document.addEventListener('DOMContentLoaded', init);

//function init() {
//const divList = document.querySelectorAll('div');

//setBorderColorAsync(divList[0], 'red', function () {
// setBorderColorAsync(divList[1], 'blue', function () {
// setBorderColorAsync(divList[2], 'green', function () {
// console.log('finish');
// });
// });
// });

//}


document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((error) => console.log(error))
        .finally(() => console.log('finish'));

}

function setBorderColorAsync(element, color) {


    const promise = new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object


            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve('done');

            }, Math.random() * 3000);
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM, Parametr ~callback~ musi być funkcją');
        }
    });
    return promise;
}
