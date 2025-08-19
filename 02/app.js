document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    if(divList.length > 0) {
        console.log(divList);
        setBorderColorAsync(divList[0], 'red')
       
        .then(element1 => {
            console.log('kolor dla', element1);
            if (divList.length > 1) {
                return setBorderColorAsync(divList[1], 'blue')
            }
        })
        .then(element2 => {
            console.log('kolor dla', element2);
            if (divList.length > 2) {
                return setBorderColorAsync(divList[2], 'green')
            }
        })
        .then(element3 => {
            if (element3) {
            console.log('kolor dla', element3);
            }
        console.log('finish')
        })
    }
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`
                resolve(element)
            }, Math.random() * 3000);
        } else {
           reject(new Error('Parametr ~element~ musi być prawidłowym elementem DOM'));
       }
    })
}