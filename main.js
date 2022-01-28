// 산술 연산자(arithmetic operator)

//console.log(1 + 2)
//console.log(5 - 7)
//console.log(3 * 4)
//console.log(10 / 2)
//console.log(7 % 5) // 나머지 값을 구할 때


// 할당 연산자(assignment operator)

//const a = 2 // const 는 재할당이 불가능함
//let a = 2

//a = a + 1 // a 값 재할당, 3
//a += 1 // 위 코드와 값이 같음, 3

//a = a - 1 // a 값 재할당, 1
//a -= 1 // 위 코드와 값이 같음, 1

//a = a * 1 // a 값 재할당, 2
//a *= 1 // 위 코드와 값이 같음, 2

//a = a / 1 // a 값 재할당, 2
//a /= 1 // 위 코드와 값이 같음, 2

//a = a % 1 // a 값 재할당, 0
//a %= 1 // 위 코드와 값이 같음, 0

//console.log(a)


// 비교 연산자(comparison operator)

//const a = 1
//const b = 1

//console.log(a === b) // true, === : 일치 연산자, a와 b가 일치하는가?

// 함수 생성
//function isEqual(x, y) {
//  return x === y
//}


//console.log(isEqual(1, 1)) // true
//console.log(isEqual(2, '2')) // 숫자와 문자이기 때문에 false 값


//console.log(a !== b) // ralse, !== : 불일치 연산자, a와 b가 서로 다른가?

//console.log(a < b) // a가 b보다 작은가?, false
//console.log(a > b) // a가 b보다 큰가?, false
//console.log(a >= b) // true, a가 b 보다 크거나 같은가?
//console.log(a <= b) // true, a가 b 보다 작거나 같은가?


// 논리 연산자(logical operator)

//const a = 1 === 123
//const b = 'AB' === 'ABC'
//const c = false

//console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&: ', a && b && c) // &&: 그리고 And, true and trud and false, false (하나라도 false가 있으면 false)
// console.log('||: ', a || b || c) // ||: 또는 Or, true or true or false, true (하나라도 true가 있으면 true)
// console.log('!: ', !a) // !: 부정연산자, NOT 의미함 (결과가 false인데 앞에 !을 붙으면 true가 출력된다)


// 삼항 연산자(ternary operator)

// const a = 1 < 2 // true

// if (a) {
//     console.log('참')
// } else {
//     console.log('거짓')
// }

// // 위 함수를 삼항연산자로 간단하게 쓸 수 있다
// console.log(a ? '참' : '거짓') // ?앞에있는 값이 참이면 : 앞쪽을 표시, 거짓이면 : 뒷쪽을 표시


// 조건문 (If statement)

// import random from './getRandom'

// const a = random()

//기본 조건문
// if (a === 0) {
//   console.log('a is 0')
// } else {
//   console.log('rest...')
// }

// else if 조건문
// if (a === 0 ) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }// 참이면 앞에조건 거짓이면 else if 구문으로, else if 도 거짓이면 else 구문으로


// 조건문 (Switch statement)

// import random from './getRandom'

// const a = random()

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default: // If문의 else 조건에 해당하는 부분
//     console.log('rest...')
// }


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화 조건) {}

// for (let i = 0; i < 3; i += 1) {// 시작조건 -> 변화조건 -> 종료조건, 종료조건이 false가 될때까지 반복된다
//   console.log(i)
// }

//변수 생성
// const ulEl = document.querySelector('ul')// querySelector 메소드를 실행해 ul 태그를 찾겠다

// addEventListener 추가했을 때
// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')// createElement 메소드를 실행해 메모리상에 li 태그를 만들어 li 변수에 연결한다
//   li.textContent = `list-${i + 1}`// 메모리상의 li 태그에 textContent 속성을 통해 ``기호 안에 문자데이터를 할당한다, ${} : 보관처리
//   li.addEventListener('click', function () {// addEventListener를 통해 li를 클릭하면 li가 갖고있는 textContent를 보여준다
//     console.log(li.textContent)
//   })
//   ulEl.appendChild(li)// li 태그를 appendChild 메소드를 통해 ul 태그 안에 넣어준다
// }

// If 조건문 추가했을 때
// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')// createElement 메소드를 실행해 메모리상에 li 태그를 만들어 li 변수에 연결한다
//   li.textContent = `list-${i + 1}`// 메모리상의 li 태그에 textContent 속성을 통해 ``기호 안에 문자데이터를 할당한다, ${} : 보관처리
//   if ((i + 1) % 2 === 0) {// i가 짝수인 경우에면 출력되도록 설정
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)// li 태그를 appendChild 메소드를 통해 ul 태그 안에 넣어준다
// }


// 변수 유효범위 (Variable Scope)
// var(사용을 권장하지 않음), let, const
// var는 함수 레벨의 유효범위를 갖는다 따라서 메모리를 차지하고 메모리 누수를 갖는다(사용권장하지 않음)

// function scope() {
//   if (true) {
//     const a = 123 // let, const는 블록 레벨의 유효범위를 갖는다
//     console.log(a) // var를 사용하면 console.log(a)의 위치가 바뀌어도 실행된다(비권장)
//   }
// }
// scope()


// 형(자료형) 변환 (Type conversion)
// 자료형 = 데이터 타입 : 문자데이터, 숫자데이터, 객체데이터 etc..

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값) - 암기 필요
// false, '', null, undefined, 0, -0, NaN(Not a Number)

// if (true) {
//   console.log(123)//출력됨
// }

// 동등연산자를 쓰면 안되는 이유
// const a = 1 //숫자데이터
// const b = '1' //문자데이터

// console.log(a == b) //== : 동등연산자(권장하지 않음)


// 함수 복습

//복습 1
// function sum(x, y) { // x, y : 매개변수
//   console.log(x + y)
// }

// sum(1, 3) //1, 3 : 인수
// sum(4, 12)

//복습 2
// function sum(x, y) { // x, y : 매개변수
//   return x + y
// }

// const a = sum(1, 3) //1, 3 : 인수
// const b = sum(4, 12)

// console.log(a)
// console.log(b)
// console.log(a + b)

//복습 3
// function sum() {
//   console.log(arguments)// 따로 매개변수를 지정하지 않아도 사용가능함
//   return arguments[0] + arguments[1]// // 매개변수 수가 많을 때 사용 권장
// }

// console.log(sum(7, 3))


// 화살표 함수
// () =>  vs  function () {}

// 기본 함수 유형
// const double = function (x) {
//   return x * 2
// }
// console.log('double: ', double(7))//14

// // 화살표 함수 예시 1
// const doubleArrow = (x) => {//화살표 함수 : 기본적 로직을 축약형으로 줄여나갈 수 있다
//   return x * 2// return 키워드 이전에 특정코드가 들어있으면 축약형으로 만들 수 없다
// }
// console.log('doubleArrow', doubleArrow(7))//14

// // 화살표 함수 예시 2
// const doubleArrow2 = (x) => x * 2// 생략가능
// console.log('doubleArrow2', doubleArrow2(7))//14

// // 화살표 함수 예시 3
// const doubleArrow3 = x => x * 2// 매개변수가 한개이면 소괄호 생략 가능, x => x*2 가 하나의 함수다
// console.log('doubleArrow3', doubleArrow(7))//14

// // 화살표 함수 예시 4
// const doubleArrow4 = x => ({//객체데이터는 대괄호{}를 소괄호()로 감싸서 만들어줘야 콘솔에 출력된다
//   name: 'Heropy'
// })
// console.log('doubleArrow4', doubleArrow4(7))//{name: 'Heropy'}


// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// 기본 함수 구조 예시
// const a = 7
// function double() {
//   console.log(a * 2)
// }
// double();//14

// // 즉시실행함수 예시(함수를 만들자마자 바로 동작하도록 함)
// //유형 1 ()()
// (function () {
//   console.log(a * 2)
// })();//14

// //유형 2 (()) -> 권장하는 방법
// (function () {
//   console.log(a * 2)
// }());//14


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 유용할 때 : 로직이 복잡할 때, 함수 이름을 확인해 해석하기가 좋다

// const a = 7

// double()//14, 함수의 선언부가 유효범위 최상단으로 끌어올려짐 -> 호이스팅 현상으로 오류는 없다

// function double() {
//   console.log(a * 2)
// }


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

//setTimeout 함수 예시
// setTimeout(function () {
//   console.log('Heropy!')
// }, 3000)// 1000ms = 1초

// //setTimeout 함수 예시 - 화살표 함수
// setTimeout(() => {
//   console.log('Heropy!')
// }, 3000)

// //clearTimeout 함수 예시
// const timer = setTimeout(() => {
//   console.log('Heropy!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {//h1을 클릭하면 함수가 실행되면서
//   clearTimeout(timer)//clearTimeout로 timer 함수 종료
// })

// //setInterval 함수 예시(시간간격 마다 지속적으로 함수 실행)
// const timer = setInterval(() => {
//   console.log('Heropy!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {//h1을 클릭하면 함수가 실행되면서
//   clearInterval(timer)//clearTimeout로 timer 함수 종료
// })


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// function timeout(cb) {
//   setTimeout(() => {
//     console.log('Heropy!')
//     cb()
//   }, 3000)
// }
// timeout(() => {// timeout 인수로 화살표 함수를 넣음, 여기서 쓰이는 화살표 함수 : 콜백 함수
//   console.log('Done!')
// })




// 생성자 함수(prototype)

// const jisunny = {
//   firstName: 'Jisunny',
//   lastName: 'Kim',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(jisunny.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

//위와 같이 같은 로직이 반복되면 데이터가 무거워진다
//메모리의 효율적인 관리를 위해서 자바스크립트의 클래스 개념을 적용해서 작업한다
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const jisunny = new User('Jisunny', 'Kim') // user 라는 함수 : 생성자 함수(하나의 객체데이터가 생성된다)
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')
// // new라는 키워드를 통해서 생성자함수로 실행한 결과가 할당된 jisunny, amy, neo는 인스턴스 함수라고 한다
// // 자바스크립트의 클래스라고 하기도 한다 -> 구분하기 위해 PascalCase(앞에만 대문자)로 작성한다

// console.log(jisunny.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const jisunny = {
//   name: 'Jisunny',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// jisunny.normal() // Jisunny, 일반함수
// jisunny.arrow() // undefined // 화살표(Arrow) 함수, 호출범위 상관없음

// const amy = {
//   name: 'Amy',
//   normal: jisunny.normal,
//   arrow: jisunny.arrow
// }
// amy.normal() // Amy
// amy.arrow() // undefined

// this 예시 1 - 생성자 함수(prototype) 에서 this의 정의

// function User(name) { // User : 생성자 함수
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const jisunny = new User('Jisunny')

// jisunny.normal() // Jisunny
// jisunny.arrow() // undefined

// this 예시 2 - 일반 함수

// const timer = {
//   name: 'Jisunny!!',
//   timeout: function () {
//     // setTimeout(함수, 시간)
//     setTimeout(function () {
//       console.log(this.name) // setTimeout 함수 내부 로직에서 콜백이 들어가 실행됨
//     }, 2000)
//   }
// }
// timer.timeout() // undefined, 2초 뒤에 실행됨

// this 예시 3 - 화살표 함수

// const timer = {
//   name: 'Jisunny!!',
//   timeout: function () {
//     // setTimeout(함수, 시간)
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout() // Jisunny!!, 2초 뒤에 실행됨


// ES6 Classes

// 생략가능한 함수 예시
// 객체데이터 내부에서 일반함수를 사용할 때 ': function ' 키워드 생략가능
// const jisunny = {
//   name: 'Jisunny',
//   //normal: function () { // ': function ' 생략가능함
//   normal() { 
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// jisunny.normal() // Jisunny
// jisunny.arrow() // undefined

// 예시 1 - 기본 유형 예시

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const jisunny = new User('Jisuuny', 'Kim')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(jisunny)
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// 예시 2 - 더 간결하게 작성한 예시
// 생성자 함수를 js 클래스 개념를 통해 간결하게 작성할 수 있다

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const jisunny = new User('Jisuuny', 'Kim')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(jisunny) // User {firstName: 'Jisunny', lastName: 'Kim'}
console.log(amy.getFullName()) // Amy Clarke
console.log(neo.getFullName()) // Neo Smith