document.addEventListener("DOMContentLoaded", init);

function init() {
    const divList = document.querySelectorAll("div");
    const colors = ["red", "blue", "green"];

    setBorderColorSequentially(Array.from(divList), colors)
        .then(() => {
            console.log("finish");
        })
        .catch((error) => {
            console.error(error);
        });
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            setTimeout(() => {
                try {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                } catch (error) {
                    reject(error);
                }
            }, Math.random() * 3000);
        } else {
            reject("Parametr ~element~ musi być prawidłowym elementem DOM");
        }
    });
}

function setBorderColorSequentially(elements, colors) {
    return elements.reduce((promise, element, index) => {
        return promise.then(() => {
            return setBorderColorAsync(element, colors[index]);
        });
    }, Promise.resolve());
}
