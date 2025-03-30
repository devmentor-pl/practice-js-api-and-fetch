document.addEventListener('DOMContentLoaded', init);

function init() {
  const divList = document.querySelectorAll('div');

  setBorderColorAsync(divList[0], 'red', redCallback);

  function redCallback() {
    setBorderColorAsync(divList[1], 'blue', blueCallback);
  }
  function blueCallback() {
    setBorderColorAsync(divList[2], 'green', greenCallback);
  }
  function greenCallback() {
    console.log('finish');
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
