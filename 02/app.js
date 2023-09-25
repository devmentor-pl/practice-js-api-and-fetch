document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");
  const promise = setBorderColorAsync(divList[0], 'red')
  .then(() => setBorderColorAsync(divList[1], 'blue'))
  .then(() => setBorderColorAsync(divList[2],'green'))
  .finally(() => console.log('finish'));
}

function setBorderColorAsync(element, color) {
  return new Promise((resolve, reject) => {
    if (element && element instanceof HTMLElement) { 
            setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();
            }, Math.random() * 3000);
    }
    else {
        reject(alert('Parametr element musi być prawidłowym elementem DOM'));
    }
  });
}
