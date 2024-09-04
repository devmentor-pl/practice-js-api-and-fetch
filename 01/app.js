let divList;
document.addEventListener("DOMContentLoaded", init);

function init() {
  divList = document.querySelectorAll("div");
  firstCallback();
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}

function firstCallback() {
  setBorderColorAsync(divList[0], "red", secondCallback);
}

function secondCallback() {
  setBorderColorAsync(divList[1], "blue", thirdCallback);
}

function thirdCallback() {
  setBorderColorAsync(divList[2], "green", function () {
    console.log("finish");
  });
}
