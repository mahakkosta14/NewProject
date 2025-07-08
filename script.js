 let body = document.querySelector("body");

function changeColor(color) {
    body.className = color;
    console.log(color);
}

let White = document.querySelector(".white");
White.addEventListener("click", () => {
    changeColor("white");
});
let black = document.querySelector(".black");
black.addEventListener("click", () => {
    changeColor("black");
});
let red = document.querySelector(".red");
red.addEventListener("click", () => {
    changeColor("red");
});
let green = document.querySelector(".green");
green.addEventListener("click", () => {
    changeColor("green");
});
function applyTheme(theme) {
  document.body.className = '';
  document.body.classList.add(`theme-${theme}`);
}
