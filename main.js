/*
  자바스크립트에서의 형변환
  기본 자료형이 변경되는 현상
  - 문자열 --> 숫자화
  - 숫자 --> 문자화

  실무에서 형변환이 일어나는 대표적 사례
  문자+숫자를 더했을때 더해지는 숫자(변수)값이 자동으로 문자화 되는 현상
*/

//숫자가 문자화되는 대표적인 예시
let str = "1";
let num1 = 1;
let num2 = 2;
console.log(str + num1 + num2);
console.log(num1 + num2 + str);

//변수가 문자화되는 대표적인 예시
let myName = "홍길동";

console.log("제 이름은 myName입니다."); // 제이름은 myName입니다. 변수가 문자화

//위와 같은 문제를 해결하기 위해서는 문자열과 변수를 분리해서 +연산자로 연결
console.log("제 이름은 " + myName + "입니다.");

//위와 같은 번거로움을 개선하고자 ES6에서는 문자열 템플릿 문법이 생김
console.log(`제 이름은 ${myName}입니다.`);