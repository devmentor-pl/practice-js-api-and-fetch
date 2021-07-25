document.addEventListener("DOMContentLoaded", init);

/*

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}



// original code
function init() {
    const divList = document.querySelectorAll("div");

    setBorderColorAsync(divList[0], "red", function () {
        setBorderColorAsync(divList[1], "blue", function () {
            setBorderColorAsync(divList[2], "green", function () {
                console.log("finish");
            });
        });
    });
}



// functions as callbacks

function init() {
    const divList = document.querySelectorAll("div");

    setBorderColorAsync(divList[0], "red", firstCallback);

    function firstCallback() {
        setBorderColorAsync(divList[1], "blue", secondCallback);
    }

    function secondCallback() {
        setBorderColorAsync(divList[2], "green", thirdCallback);
    }

    function thirdCallback() {
        console.log("finish");
    }
}

*/

// promises

function init() {
    const divList = document.querySelectorAll("div");

    const setBorderColorAsync = (element, color) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve();
            }, Math.random() * 3000);
        });
        return promise;
    };

    setBorderColorAsync(divList[0], "red")
        .then(() => setBorderColorAsync(divList[1], "blue"))
        .then(() => setBorderColorAsync(divList[2], "green"));
}
