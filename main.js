const h1 = document.querySelector("h1");
const link = document.querySelector("a");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector("btn3");
const btns = document.querySelectorAll("button");
console.log(btns); //NodeList형태로 반환됨 (유사배열: 배열과 비슷한 데이터 그룹)

//btn1클릭시 h1의 텍스트 변경
btns[0].addEventListener("click", () => {
  h1.innerText = "김영희";
});

//스타일 변경
btns[1].addEventListener("click", () => {
  h1.style.color = "aqua";
});

//속성 변경
btns[2].addEventListener("click", () => {
  link.href = "https://www.nate.com";
  link.innerText = "네이트";
});