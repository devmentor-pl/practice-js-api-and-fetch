/* W pliku app.js masz przygotowany kod, który ustawia kolor obramowania dla wyszukanych divów.

Niestety kod ten posiada zagnieżdżenia, co zmniejsza jego czytelność i może doprowadzić do efektu callback hell.

Twoim zadaniem jest przebudowanie kodu w taki sposób, aby zagnieżdzenia nie występowały. Utwórz odpowiednie funkcje, które rozwiążą problem.*/





document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    //  setBorderColorAsync(divList[0], 'red', function() {
    //   setBorderColorAsync(divList[1], 'blue', function() {
    //   setBorderColorAsync(divList[2], 'green', function() {
    //  console.log('finish');
    //   });
    //  });
    //  });


    setBorderColorAsync(divList[0], 'red', firstCallback);
    function firstCallback() {
        setBorderColorAsync(divList[1], 'blue', secondCallback);
    }

    function secondCallback() {
        setBorderColorAsync(divList[2], 'green', thirdCallback);
    }

    function thirdCallback() {
        console.log('finish');
    }
}


function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}

