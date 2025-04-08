/*
  조건문
  : 조건식을 만들어서 조건식이 true, false인지에 따라서 코드 분기처리하는 식
  
  if(조건식1){
    조건식1이 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
    조건식1이 거짓이면 다음 조건식2로 넘어감
  }else if(조건식2){
    조건식2가 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
    조건식2가 거짓이면 다음 조건식2로 넘어감
  }else {
    만약 위의 조건식이 거짓이면 이곳의 구문을 실행하고 조건문 강제 종료
  }
*/

const calculator = (n1, n2, how) => {
    if (how === "+") {
      console.log(n1 + n2);
    } else if (how === "-") {
      console.log(n1 - n2);
    } else if (how === "*") {
      console.log(n1 * n2);
    } else if (how === "/") {
      console.log(n1 / n2);
    } else {
      console.error("세번째 매개변수 값이 잘못 전달되었습니다.");
    }
  };
  
  calculator(2, 3);
  
  /*
  calculator(2, 3, "+");
  calculator(2, 3, "-");
  calculator(2, 3, "*");
  calculator(2, 3, "/");
  추가 기능 : 사칙연산 4가지 기호 외의 값이 3번째 매개변수로 전달되면 콘솔문으로 오류메세지 출력 
  */