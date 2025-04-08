/*
  연산자: 특정 값을 도출하기 위한 식별자 

  대입 연산자
  산술 연산자
  복합 대입 연산자
  비교 연산자
*/

//대입 연산자
let myName = "David"; //=을 기준으로 오른쪽 값이 먼저 해석되서 왼쪽에 대입

//산술 연산자
let result;
result = 2 + 3;
console.log("+", result);

result = 2 - 3;
console.log("-", result);

result = 2 * 3;
console.log("*", result);

result = 2 / 3;
console.log("/", result);

result = 5 % 2; //몫이 아닌 나머지 구하기
console.log("%", result);

let num = 0;
//num = num + 1;
//num += 1;
num++;

//비교 연산자: 복수개의 값을 서로 비교 : true, false값을 얻기 위함

let number = 1;
let text = "1";

//console.log(number === text); //값과 자료형 모두 비교
//console.log(number == text); //값만 비교

console.log(true && true); //2개 모두 참이여야지만 true
console.log(true && false); //&&일때 하나라도 참이 아니면 false
console.log(true || false); //|| 둘중에 하나만 참이여도 true 

