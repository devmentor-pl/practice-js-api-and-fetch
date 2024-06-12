document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(divList[0], "red", setRedBorderColor);

  function setRedBorderColor() {
    setBorderColorAsync(divList[1], "blue", setBlueBorderColor);
  }

  function setBlueBorderColor() {
    setBorderColorAsync(divList[1], "blue", setGreenBorderColor);
  }

  function setGreenBorderColor() {
    setBorderColorAsync(divList[2], "green", () => {
      console.log("finish");
    });
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
