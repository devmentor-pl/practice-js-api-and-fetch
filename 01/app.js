document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(divList[0], "red", setBlueBorder);

  function setBlueBorder() {
    setBorderColorAsync(divList[1], "blue", setGreenBorder);
  }

  function setGreenBorder() {
    setBorderColorAsync(divList[2], "green", finishCallBack);
  }

  function finishCallBack() {
    console.log("finish");
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
