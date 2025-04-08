/*
  문자를 숫자로 형변환 처리
  parseInt(문자화된 숫자) : 정수 변환
  parseFloat(문자화된 숫자) : 실수 변환
*/

let num = "3.5";
console.log(typeof num); //string

//문자화된 숫자값을 정수로 형변환해서 다시 num변수에 재할당
//num = parseInt(num);

//문자화된 숫자값을 실수로 형변환해서 다시 num변수에 재할당
num = parseFloat(num);
console.log(typeof num);
console.log(num);