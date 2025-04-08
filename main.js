const box = document.querySelector(".box");
const btns = document.querySelectorAll("button");
let count = 0;

btns[0].addEventListener("click", () => {
  box.style.transform = `rotate(${30 * --count}deg)`;
});

btns[1].addEventListener("click", () => {
  box.style.transform = `rotate(${30 * ++count}deg)`;
});