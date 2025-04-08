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