document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(divList[0], "red", setBlueColor);

  function setGreenColor() {
    setBorderColorAsync(divList[2], "green", () => console.log("finish"));
  }
  function setBlueColor() {
    setBorderColorAsync(divList[1], "blue", setGreenColor);
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
