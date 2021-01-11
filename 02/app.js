document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    fireFunctions(divList)
    
    
}

function setBorderColorAsync(element, color) { //usunalem callback, bo nijak mi to pasuje do rozwiazania zadania, jesli chdzilo o inna konmcepcje to niestety moj blad
    
    if(element && element instanceof HTMLElement) {
        
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            
        }, Math.random() * 3000)
        
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }

    
       
}
function fireFunctions(divList) {
    const promise = new Promise((resolve, reject) => {
        if (divList){
            resolve();
        } else {
            reject()
        }
       });
    promise.then(setBorderColorAsync(divList[0], 'red'));
    promise.then(setBorderColorAsync(divList[1], 'blue'));
    promise.then(setBorderColorAsync(divList[2], 'green'));

}