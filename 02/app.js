document.addEventListener('DOMContentLoaded', init);

function init() {
    
    const divList = document.querySelectorAll('div');
    const setBorderColorAsync = (element, color) => {
        const promise =  new Promise((resolve, reject) => {
            if(element && element instanceof HTMLElement) {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve('jest ok');
                }, Math.random() * 3000);
        
            } else {
                reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
            }
        });
        
        return promise;
    }


    setBorderColorAsync(divList[0], 'red', setBorderColorAsync)
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(()=> console.log('finish'))
        .catch(err => console.log(err))

    
}



