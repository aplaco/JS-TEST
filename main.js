/*
  함수 (function)
  : 자주쓰는 구문들을 그룹핑해서 통채로 재활용하기 위한 코드 모음집

  함수 만드는 방법
  - 선언적 함수 : function키워드로 선언방식 (호출위치가 자유로움)
  - 대입형 함수 : 변수에 화살표 함수를 대입하는 방식 (선언 이후에 호출 가능)

  매개변수 (parameter) : 함수외부터 특정 값을 내부로 전달해주는 통로명 
  인자 (argument) : 매개변수를 통해 실제 전달되는 실질적인 값
*/

//함수 호출 : 선언적 함수는 선언되기 전에 호출 가능 (호이스팅 발생 : hoisting)
plus(2, 3);
plus(345, 1234);

// plus란 이름의 선언적 방식으로 함수 선언: 실행할 기능모음을 정의
function plus(n1, n2) {
  let result = n1 + n2;
  console.log(result);
}

// ES5버전의 정의형 함수
const minus = function (num1, num2) {
  let result = num1 - num2;
  console.log(result);
};

minus(5, 3);

// ES6버전의 정의형 함수 (화살표함수: Arrow function)
const divider = (n1, n2) => {
  let result = n1 / n2;
  console.log(result);
};

divider(6, 2);