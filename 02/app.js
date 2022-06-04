document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');


    const firstCallback = () => {
        setBorderColorAsync(divList[1], 'blue', secondCallback)
    }

    const secondCallback = () => {
        setBorderColorAsync(divList[2], 'green', thirdCallback)
    }

    const thirdCallback = () => {
        console.log('finish')
    }
    setBorderColorAsync(divList[0], 'red', firstCallback)
        .then(() => secondCallback)
        .then(() => thirdCallback)
        .catch(err => console.error(err))
}

function setBorderColorAsync(element, color, callback) {
    const promise = new Promise((resolve, reject) => {
        const time = 3000
        if (element && element instanceof HTMLElement) {
            setTimeout(() => {
                if (callback && typeof callback == 'function') {
                    resolve(element.style.border = `3px solid ${color}`, callback())
                } else {
                    reject('Parametr ~callback~ mus być funkcją')
                }
            }, time)
        } else {
            alert('Parametr ~element~ musi być prawidłowym elementem DOM')
        }
    })
    return promise
}


