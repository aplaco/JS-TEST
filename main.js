/*
  자료형 : 자바스크립트에 다루는 자료의 종류

  원시형 자료 (primitive type) : 메모리 안에 실제 값이 담기는 자료형 
  - 문자열
  - 숫자
  - boolean

  참조형 자료 (reference type) : 메모리에 실제 값이 아닌 값의 위치값이 담기는 자료형
  - 배열
  - 객체
*/

let myName = "Davide"; //문자열 (string)
let myAge = 40; //숫자 (number)
let isFemale = false; //논리형 (boolean)

let myColors = ["red", "green", "blue"]; //배열 (array)
//객체 (Object)
//복잡한 구조의 데이터를 그룹화 할때
let myInfo = {
  name: "David",
  age: 40,
  isFemale: false,
};

//객체의 구조를 활용한 개발 방식 :객체지향 프로그래밍 (OOP: Object Oriendted Programing)

//배열값 추출 : 배열명[순번]
console.log(myColors[0]);

//객체값 추출 : 객체명.프로퍼티명
console.log(myInfo.name);