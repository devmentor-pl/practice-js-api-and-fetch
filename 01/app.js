document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    const color = ["red", 'blue', 'green']



    setColor(divList, color)
        .then(() => {
            console.log('finish');
        })
        .catch((err) => {
            console.log('err');
        })
}

function setColor(divList, colors) {

    return new Promise((resolve, reject) => {
        function setNextColor(index) {
            if (index < divList.length) {
                setBorderColorAsync(divList[index], colors[index], () => {
                    setNextColor(index + 1);
                });
            } else {
                resolve();
            }
        }
        setNextColor(0);
    });
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}