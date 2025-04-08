/*
  DOM스크립트

  DOM (Document Object Model)
  -html태그를 브라우저가 해석해서 자바스크립트가 제어 가능한 형태로 변환된 객체

  DOM선택
  DOM 정보 출력
  DOM 텍스트 정보 변경
  DOM 스타일 정보 변경
  DOM 속성 정보 변경
  DOM에 이벤트 연결
*/

//h1태그 요소를 돔스크립트로 선택
const h1 = document.querySelector("h1");
const link = document.querySelector("a");
console.log(h1);
console.dir(h1);
console.dir(link);

//DOM의 텍스트 변경
//h1.innerText = "김영희";

//DOM의 html 구조 변경
//h1.innerHTML = "<span>김판섭</span>";

//DOM스타일 변경
h1.style.color = "aqua";

//DOM 속성 변경
link.href = "https://www.nate.com";
link.innerText = "네이트";