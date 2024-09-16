document.addEventListener("DOMContentLoaded", init);

/*function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });

}*/
function setBorderColorAsync(element, color, callback) {
    if (element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

        if (callback && typeof callback === "function") {
            const promise = new Promise((resolve, reject) => {
                callback(element, color);
                resolve();
            });
            return promise;
        } else {
            alert("Parametr ~callback~ mus być funkcją");
            reject();
        }
    } else {
        alert("Paremetr ~element~ musi być prawidłowym elementem DOM");
        reject();
    }
}

function init() {
    const divList = document.querySelectorAll("div");

    function callback(element, color) {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
        }, Math.random() * 3000);
    }

    setBorderColorAsync(divList[0], "red", callback)
        .then(() => setBorderColorAsync(divList[1], "blue", callback))
        .then(() => setBorderColorAsync(divList[2], "green", callback))
        .then(() => console.log("finish"));
}
