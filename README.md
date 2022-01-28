# JavaScript Essentials 👩🏻‍💻 - PART1. Node.js

JavaScript Essentials Node.js 개념 정리
<br /><br />

## 1. 개요 및 설치
<br />

### [개요]

- Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임(프로그래밍 언어가 동작하는 환경)
- JavaScript 프로그래밍 언어는 컴퓨터와 웹브라우저(크롬)에서 동작함
- Node.js를 배운다는 것은 컴퓨터를 제어하는 것을 배우는 것과 같다

<br />

### [설치]

1. 설치유형 1

- [Node.js 홈페이지](https://nodejs.org/ko/)에서 다운로드 받는다
- 짝수 버전을 사용하는 것을 권장
- 프론트엔드 개발에서는 노드버전매니저(nvm)을 사용하는 것이 좋다

2. 설치유형 2 - nvm(Node.js version manager) `ios` 설치방법

    1. 구글에서 nvm 검색
    1. [Node Version Manager - GitHub](https://github.com/nvm-sh/nvm) 접속
    1. 하단에 [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) 클릭
    1. 하단 내용 복사 (`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`)
    1. VsCode - Terminal

        ```bash
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        $ nvm --version
        ```

        - `nvm --version` : 설치 된 nvm 버전 확인 가능

<br />

3. 설치유형 2 - nvm(Node.js version manager) `windows` 설치방법

    1. 구글에서 nvm-windows 검색
    1. [nvm-windows](https://github.com/coreybutler/nvm-windows) 접속
    1. 하단에 [Download Now](https://github.com/coreybutler/nvm-windows/releases) 클릭
    1. 하단에 `nvm-setup.zip` 클릭
    1. 압축풀고 설치
    1. VsCode - Terminal (powershell 로 오픈)

        ```bash
        $ nvm --version
        ```

        - `nvm --version` : 설치 된 nvm 버전 확인 가능
<br /><br />

## 2. NVM(Node.js Version Manager) 사용법
<br />

### [nvm으로 원하는 버전의 node.js 설치하기]

1. VsCode - Terminal

```bash
$ nvm ls
$ nvm install 12.14.1
$ nvm ls
```

- `nvm ls` : ls는 list의 약자
- `nvm install 12.14.1` : node.js 12.14.1 버전을 설치하겠다
- `nvm ls` : 설치 된 버전 확인 가능

2. 다른 버전 설치

```bash
$ nvm install 12.21.0
$ nvm ls
```

3. 사용할 버전 선택

```bash
$ nvm use 12.14.1
$ nvm ls
$ node --version
```

- `nvm use 12.14.1` : 사용할 버전 명시
- `nvm ls` : 사용될 버전이 선택됐는지 확인 가능
- `node --version` : node 버전 확인

4. nvm 명령어 확인하기

```bash
$ nvm --help
```

- `nvm --help` : 명령어와 설명 확인가능
<br /><br />

## 3. NPM(Node Package Manager) 개요
<br />

### [개요]

- `NPM(Node Package Manager)` : 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리
- 학습 난이도가 증가하지만, 프로젝트를 효율적으로 관리할 수 있다

<br />

### [npm으로 프로젝트 만들기]

1. 프로젝트 파일 만들기 `데스크탑-test` 파일 생성
2. VsCode 에서 test 폴더 열기
3. VsCode - Terminal

```bash
$ npm init -y
```

- `npm init -y` : package.json 파일 생성됨

4. package.json 파일에서 이름, 버전, 설명 등 옵션 확인 가능
5. VsCode - Terminal

```bash
$ npm install parcel-bundler -D
```

- `npm install parcel-bundler -D` : 설치가 진행된다. package-lock.json 생성됨, node_modules 폴더 생성됨

6. VsCode Terminal 실행

```bash
$ npm install lodash
```

- `npm install lodash` : lodash 모듈 설치

7. 한 번 설치한 패키지는 package.json 파일에 내역으로 남게 된다

<br />

### [삭제했던 모듈 다시 설치하기]

1. node_modules 삭제 (다시 설치가능)
2. 재설치하기
3. VsCode - Terminal

```bash
$ npm install
```
또는
```bash
$ npm i
```

- `npm install` or `npm i` : 삭제됐던 node_modules 폴더가 다시 생성됨

<br />

### [차이점 비교]

1. `package.json` : 직접 관리하는 파일

2. `package-lock.json` : 자동으로 관리되는 파일 
- `package-lock.json`는 package.json 에 설치된 모듈이 내부적으로 쓰는 또다른 모듈 또는 패키지의 정보가 들어가있다
- 두 개 모두 절대 삭제되면 안되는 파일

3. 개발용 의존성 패키지 설치

- 설치한 패키지들이 개발할때만 필요하고 웹브라우저 동작시에는 필요하지 않음

```dash
$ npm install XXX -D, --save-dev
```

예시

```dash
$ npm install parcel-bundler -D
```

- devDependencies 에 설치됨

4. 일반 의존성 설치

- 설치한 패키지들이 웹브라우저에서 동작할 수도 있다

```bash
$ npm install XXX
```

예시

```bash
$ npm install lodash
```

- dependencies에 설치됨
<br /><br />

## 4. 개발 서버 실행과 빌드
<br />

### [개발용 서버 접근하기]

1. index.html 파일 생성
2. 기존에는 html에서 Open with Live Server 로 접근했지만 유용한 방법은 아님

<br />

### [개발용 의존성 패키지 설치]

1. VsCode - Terminal

```bash
$ parcel index.html
```
- `parcel index.html` : parcel 명령어를 아직 모르기 때문에 terminal에서 동작하지 않음

2. package.json 파일로 이동
3. scripts 옵션에 test 스크립트는 필요없으니 지워준다

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1" // 삭제
}
```

4. 아래와 같이 작성한다

```javascript
"scripts": {
  "dev": "parcel index.html" // 개발용으로 서버가 열린다
}
```

5. VsCode - Terminal

```bash
$ npm run dev
```

- `npm run dev` : npm을 통해 dev 스크립트를 실행시킨다

6. 엔터를 누르면 `localhost:1234` 링크가 나타난다
7. 클릭하면 브라우저로 이동 가능

<br />

### [일반 의존성 패키지(lodash) 설치]

1. main.js 파일로 이동해 import 내용을 입력한다

```javascript
import _ from ‘lodash’;

console.log(‘hello world’); // hello world
console.log(_.camelCase(‘hello world’)); // helloWorld
```
- 웹브라우저의 콘솔창에 출력된다

2. package.json 의 “scripts” 부분에 내용추가
3. “dev”아래에 입력

```javascript
"scripts": {
  "dev": "parcel index.html" // 개발용으로 서버가 열린다
  "build": "parcel build index.html" // 사용자들이 실제로 보는 서버가 열림
}
```

4. VsCode - Terminal

```bash
$ npm run build
```

- dist 폴더 생성됨
<br />

> dist 폴더
> - 코드가 난독화 되어있음
> - 빌드된 결과(제품)는 브라우저에서 해석되는 용도
> - 용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋음

5. main.js 파일도 난독화가 되어있다
- Parcel-bundler 패키지가 lodash를 포함한 패키지까지 같이 묶어 번들되어 결과를 보여줌
- 번들(Bundle) : 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업을 말한다
<br /><br />

## 5. 유의적 버전(Semantic Versioning, SemVer)
<br />

### [유의적 버전의 개념]

1. VsCode - Terminal

```bash
$ node --version
$ npm —version
```

- `node --version` : 설치된 node 버전 확인 0.00.0
- `npm —version` : npm 버전 확인 0.00.00

2. 유의적 버전이란?
- Semantic Versioning, SemVer
- 유의적 : 의미가 있다

3. 기본 개념

    > ex) node.js 12.14.1 (Major.Minor.Patch)

- Major : 기존 버전과 호환되지 않는 새로운 버전 (=호환되지 않는 버전이 12개 있다)
- Minor : 기존 버전과 호환되는 새로운 기능이 추가된 버전 (=14번 새로운 기능이 추가됐다)
- Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전 (= 1번의 버그수정이 있었다)

4. 참고 내용

    > ex) ^12.14.1 (^Major.Minor.Patch)

- Major 버전 안에서 가장 최신 버전으로 업데이트 가능
- Major는 바뀌지 않고 Minor, Patch는 최신 버전으로 업데이트 가능하다는 뜻

5. 설치 및 업데이트

    1. VsCode - Terminal

    ```bash
    $ npm info lodash
    $ npm install lodash@4.17.20
    $ npm update lodash
    ```

    - `npm info lodash` : lodash 정보 확인
    - `npm install lodash@4.17.20` : 해당 버전으로 패키지 설치
    - `npm update lodash` : loadash 패키지 최신으로 업데이트

    2. 캐롯 기호 (^) 를 제거하면 업데이트가 해당 버전으로 업데이트 된다
<br /><br />

## 6. NPM 프로젝트의 버전 관리 (.gitignore)
<br />

### [npm으로 프로젝트를 관리할 때 주의사항]

- `₩.cache`, `dist`, `node_modules`와 같은 폴더는 자동으로 생성되는 폴더이다
- `npm install`, `npm run build` 와 같이 후작업으로 만드는 폴더들은 따로 버전관리를 하지 않아도 된다
- 따로 버전관리를 할 필요 없는 파일, 폴더들은 언제든지 다시 똑같은 구조로 생성할 수 있다
- 따라서 따로 버전관리를 할 필요는 없다

<br />

### [GitHub 으로 프로젝트 push]

1. git init을 입력하기 전에, 프로젝트 root 경로에서 버전관리가 필요없는 파일을 선언해준다
2. VsCode - 새로운 파일 생성 - `.gitignore` - 파일생성

- .gitignore 파일에 아래 내용 입력
- 입력한 내용은 버전관리 파일에 나타나지 않는다

```bash
.cache/
dist/
node_modules/
```

3. VsCode - Terminal

```bash
$ git init
$ git status
$ git add .
$ git status
$ git commit -m ‘프로젝트 생성’
$ git log
```

4. GitHub 저장소 생성 - 저장소 주소 복사
5. VsCode - Terminal

```bash
$ git remote add origin 복사한 링크
$ git push origin master
```

6. 브라우저 확인, Push 완료
<br /><br /><br />

# JavaScript Essentials 👩🏻‍💻 - PART2. JS 시작하기

JavaScript 개념 정리
<br /><br />

## 1. 개요(ECMAScript) 및 프로젝트 초기화
<br />

### [ECMA(에크마)스크립트 개념]

- ES 로 부를 수 있음
- ECMA : 유럽컴퓨터 제조협회의 약어, 자바스크립트를 표준화 해주는 국제표준화 기구
- `JAVASCRIPT` = `JS` = `ECMASCRIPT` = `ES` 
- 2015년 이후로 많은 발전을 보임

<br />

### [자바스크립트 코딩환경 셋팅]

1. 바탕화면에 js-test 폴더 생성
2. VsCode 에서 폴더 열고 Terminal 실행

```bash
$ npm init -y : package.json 파일 생성됨
$ npm install parcel-bundler --save-dev
또는
$ npm install parcel-bundler -D
또는
$ npm i parcel-bundler -D
```

- `npm init -y` : package.json 파일 생성됨
- `npm install parcel-bundler --save-dev` 또는
- `npm install parcel-bundler -D` 또는
- `npm i parcel-bundler -D` : package-lock.json 파일 생성됨

3. 개발용 및 결과물로 쓸 수 있도록 스크립트 명령 추가
4. package.json 파일에 “script” 내용 수정
- “test” 내용 삭제

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1" // 삭제
}
```

- “dev”: “”parcel index.html” 입력
- “build”: “parcel build index.html” 입력

```javascript
"scripts": {
  “dev”: “”parcel index.html”,
  “build”: “parcel build index.html”
}
```

5. root 경로에 index.html 파일 생성
- title 아래 `script 태그` 추가

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./main.js"></script>
</head>
<body>
    
</body>
</html>
```

- Body 태그 안에 h1 태그 추가 (test)

```html
<body>
  <h1>Hello world!</h1>
</body>
```

6. root 경로에 `main.js` 파일 생성

- console.log('Hello world!'); 입력

```javascript
console.log('Hello world!');
```

7. parcel-bundler 를 통해 index.html 을 기준으로 local에 내부서버를 생성
- VsCode - terminal

```bash
$ npm run dev : 개발서버가 열림
```

- `npm run dev` : 개발서버가 열림
- `Localhost:1234` 포트가 열림
<br /><br />

## 2. 데이터 타입 확인
<br />

### [자바스크립트 내용 작성해보기]

자바스크립트를 작성할 때 업무의 효율을 위해 세미콜론(`;`)을 쓰지 않아도 된다

1. `getType.js` 파일 생성

```javascript
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
```

2. `import`를 통해 다른 js 파일에 함수를 적용할 수 있다
3. `main.js` 파일 실행

```javascript
import getType from './getType'
```

4. import로 적용하면 main.js 에서도 `getType` 함수가 실행된다
<br /><br />

## 3. 산술, 할당 연산자
<br />

### [산술 연산자(arithmetic operator)]

```javascript
// 산술 연산자(arithmetic operator)

console.log(1 + 2) // 더하기
console.log(5 - 7) // 빼기
console.log(3 * 4) // 곱하기
console.log(10 / 2) // 나누기
console.log(7 % 5) // 나머지 값을 구할 때
```

<br />

### [할당 연산자(assignment operator)]

```javascript
// 할당 연산자(assignment operator)

const a = 2 // const는 재할당이 불가능함
let a = 2

a = a + 1 // a 값 재할당, 3
a += 1 // 위 코드와 값이 같음, 3

a = a - 1 // a 값 재할당, 1
a -= 1 // 위 코드와 값이 같음, 1

a = a * 1 // a 값 재할당, 2
a *= 1 // 위 코드와 값이 같음, 2

a = a / 1 // a 값 재할당, 2
a /= 1 // 위 코드와 값이 같음, 2

a = a % 1 // a 값 재할당, 0
a %= 1 // 위 코드와 값이 같음, 0

console.log(a)
```
<br /><br />

## 4. 비교, 논리 연산자
<br />

### [비교 연산자(comparison operator)]

```javascript
// 비교 연산자(comparison operator)

const a = 1
const b = 1

console.log(a === b) // true, === : 일치 연산자, a와 b가 일치하는가?

//함수 생성
function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1)) // true
console.log(isEqual(2, '2')) // false, 숫자와 문자이기 때문에 false 값


console.log(a !== b) // false, !== : 불일치 연산자, a와 b가 서로 다른가?

console.log(a < b) // false, a가 b보다 작은가?
console.log(a > b) // false, a가 b보다 큰가?
console.log(a >= b) // true, a가 b 보다 크거나 같은가?
console.log(a <= b) // true, a가 b 보다 작거나 같은가?
```

<br />

### [논리 연산자(logical operator)]

```javascript
// 논리 연산자(logical operator)

const a = 1 === 1
const b = 'AB' === 'ABC'
const c = false

console.log(a) // true
console.log(b) // false
console.log(c) // false

// &&: 그리고 And(하나라도 false가 있으면 false)
console.log('&&: ', a && b && c) // false, true and false and false

// ||: 또는 Or(하나라도 true가 있으면 true)
console.log('||: ', a || b || c) // true, true or false or false

// !: 부정연산자, NOT
console.log('!: ', !a) // false, 결과가 true인데 앞에 !을 붙으면 false가 출력된다
```
<br /><br />

## 5. 삼항 연산자
<br />

### [삼항 연산자(ternary operator)]

```javascript
// 삼항 연산자(ternary operator)

const a = 1 < 2 // true

if (a) {
    console.log('참')
} else {
   console.log('거짓')
}

// 위 함수를 간단하게 삼항연산자로 나타낼 수 있다
console.log(a ? '참' : '거짓') // ?앞에있는 값이 참이면 앞쪽을 표시, 거짓이면 뒷쪽을 표시
```
<br /><br />

## 6. 조건문 If Else
<br />

### [조건문 (If statement)]

```javascript
// 조건문 (If statement)

import random from './getRandom'

const a = random()

// 기본 조건문
if (a === 0) {
  console.log('a is 0')
} else {
  console.log('rest...')
} // 랜덤으로 숫자가 0이 나올때 a is 0 이 콘솔창에 출력된다

// else if 조건문
if (a === 0 ) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
} // 참이면 앞에조건 거짓이면 else if 구문으로, else if 도 거짓이면 else 구문으로
```
<br /><br />

## 7. 조건문 Switch
<br />

### [조건문 (Switch statement)]

```javascript
// 조건문 (Switch statement)

import random from './getRandom'

const a = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default: // If문의 else 조건에 해당하는 부분
    console.log('rest...')
}
```
<br /><br />

## 8. 반복문 For
<br />

### [반복문 (For statement)]

```javascript
// 반복문 (For statement)

for (시작조건; 종료조건; 변화 조건) {}

for (let i = 0; i < 3; i += 1) { // 시작조건 -> 변화조건 -> 종료조건, 종료조건이 false가 될때까지 반복된다
  console.log(i)
}
```

1. 변수생성

```javascript
// 변수생성

const ulEl = document.querySelector('ul') // querySelector 메소드를 실행해 ul 태그를 찾아라
}
```

2. addEventListener 추가했을 때

```javascript
// addEventListener 추가했을 때

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li') // createElement 메소드를 실행해 메모리상에 li 태그를 만들어 li 변수에 연결한다
  li.textContent = `list-${i + 1}` // 메모리상의 li 태그에 textContent 속성을 통해 ``기호 안에 문자데이터를 할당한다, ${} : 보관처리
  li.addEventListener('click', function () { // addEventListener를 통해 li를 클릭하면 li가 갖고있는 textContent를 보여준다
    console.log(li.textContent)
  })
  ulEl.appendChild(li) // li 태그를 appendChild 메소드를 통해 ul 태그 안에 넣어준다
}
```

3. If 조건문 추가했을 때

```javascript
// If 조건문 추가했을 때

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li') // createElement 메소드를 실행해 메모리상에 li 태그를 만들어 li 변수에 연결한다
  li.textContent = `list-${i + 1}` // 메모리상의 li 태그에 textContent 속성을 통해 ``기호 안에 문자데이터를 할당한다, ${} : 보관처리
  if ((i + 1) % 2 === 0) { // i가 짝수인 경우에면 출력되도록 설정
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li) // li 태그를 appendChild 메소드를 통해 ul 태그 안에 넣어준다
}
```
<br /><br />

## 9. 변수 유효범위
<br />

### [변수 유효범위 (Variable Scope)]

```javascript
// 변수 유효범위 (Variable Scope)

// var(사용을 권장하지 않음), let, const
// var는 함수 레벨의 유효범위를 갖는다 따라서 메모리를 차지하고 메모리 누수를 갖는다(사용권장하지 않음)

function scope() {
  if (true) {
    const a = 123 // let, const는 블록 레벨의 유효범위를 갖는다
    console.log(a) // var를 사용하면 console.log(a)의 위치가 바뀌어도 실행된다(비권장)
  }
}
scope()
```
<br /><br />

## 10. 형변환
<br />

### [형(자료형) 변환 (Type conversion)]

Falsy(거짓 같은 값)는 암기 필요

```javascript
// 형(자료형) 변환 (Type conversion)
// 자료형 = 데이터 타입 : 문자데이터, 숫자데이터, 객체데이터 etc..

// Truthy(참 같은 값)
true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)] - 암기 필요
false, '', null, undefined, 0, -0, NaN(Not a Number)

if (true) {
  console.log(123) // 출력됨
}
```

<br />

### [동등연산자를 쓰면 안되는 이유]

```javascript
// 동등연산자를 쓰면 안되는 이유
const a = 1 // 숫자데이터
const b = '1' // 문자데이터

console.log(a == b) // == : 동등연산자(권장하지 않음)
```
<br /><br /><br />

# JavaScript Essentials 👩🏻‍💻 - PART3. JS 함수

JavaScript 함수 개념 정리
<br /><br />

## 1. 함수복습
<br />

### [함수 복습]

```javascript
// 함수 복습

// 복습 1
function sum(x, y) { // x, y : 매개변수
  console.log(x + y)
}

sum(1, 3) // 4, 1, 3 : 인수
sum(4, 12) // 16

// 복습 2
function sum(x, y) { // x, y : 매개변수
  return x + y
}

const a = sum(1, 3) // 1, 3 : 인수
const b = sum(4, 12)

console.log(a) // 4
console.log(b) // 16
console.log(a + b) // 20

// 복습 3
function sum() {
  console.log(arguments) // 따로 매개변수를 지정하지 않아도 사용가능함
  return arguments[0] + arguments[1] // 매개변수 수가 많을 때 사용 권장
}

console.log(sum(7, 3))
```
<br /><br />

## 2. 화살표 함수
<br />

### [화살표 함수]

```javascript
// 화살표 함수
// () =>  vs  function () {}

// 기본 함수 유형
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7)) // 14

// 화살표 함수 예시 1
const doubleArrow = (x) => { // 화살표 함수 : 기본적 로직을 축약형으로 줄여나갈 수 있다
  return x * 2 // return 키워드 이전에 특정코드가 들어있으면 축약형으로 만들 수 없다
}
console.log('doubleArrow', doubleArrow(7)) // 14


// 화살표 함수 예시 2
const doubleArrow2 = (x) => x * 2 // 생략가능
console.log('doubleArrow2', doubleArrow2(7)) // 14


// 화살표 함수 예시 3
const doubleArrow3 = x => x * 2 // 매개변수가 1개 이면 소괄호 생략 가능, x => x*2 가 하나의 함수다
console.log('doubleArrow3', doubleArrow(7)) // 14


// 화살표 함수 예시 4
const doubleArrow4 = x => ({ // 객체데이터는 대괄호{}를 소괄호()로 감싸서 만들어줘야 콘솔에 출력된다
  name: 'Jisunny'
})
console.log('doubleArrow4', doubleArrow4(7)) // {name: 'Jisunny'}
```
<br /><br />

## 3. IIFE (Immediately-Invoked Function Expression)
<br />

### [즉시 실행 함수]

```javascript
// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// 기본 함수 구조 예시
const a = 7
function double() {
  console.log(a * 2)
}
double(); // 14

// 즉시실행함수 예시 (함수를 만들자마자 바로 동작함)
// 유형 1 ()()
(function () {
  console.log(a * 2)
})(); // 14

// 유형 2 (()) -> 권장하는 방법
(function () {
  console.log(a * 2)
}()); // 14
```
<br /><br />

## 4. 호이스팅 (Hoisting)
<br />

### [호이스팅 (Hoisting)]

```javascript
// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 유용할 때 : 로직이 복잡할 때, 함수 이름을 확인해 해석하기가 좋다

const a = 7

double() // 14, 함수의 선언부가 유효범위 최상단으로 끌어올려짐 -> 호이스팅 현상으로 오류는 없다

function double() {
  console.log(a * 2)
}
```
<br /><br />

## 5. 타이머 함수
<br />

### [타이머 함수]

```javascript
// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout 함수 예시
setTimeout(function () {
  console.log('Heropy!')
}, 3000) // 1000ms = 1초

// setTimeout 함수 예시 - 화살표 함수
setTimeout(() => {
  console.log('Heropy!')
}, 3000)

// clearTimeout 함수 예시
const timer = setTimeout(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => { // h1을 클릭하면 함수가 실행되면서
  clearTimeout(timer) // clearTimeout로 timer 함수 종료
})

// setInterval 함수 예시 (설정한 시간간격 마다 지속적으로 함수 실행)
const timer = setInterval(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => { // h1을 클릭하면 함수가 실행되면서
  clearInterval(timer) // clearTimeout로 timer 함수 종료
})
```
<br /><br />

## 6. 콜백
<br />

### [콜백(Callback)]

```javascript
// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// 위에서 쓰인 함수를 콜백함수라고 한다

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => { // timeout 인수로 화살표 함수를 넣음, 여기서 쓰이는 화살표 함수 : 콜백 함수
  console.log('Done!')
})
```
<br /><br /><br />

# JavaScript Essentials 👩🏻‍💻 - PART4. JS 클래스

JavaScript 클래스 개념 정리
<br /><br />

## 1. 생성자 함수(prototype)
<br />

### [생성자 함수(prototype)]

```javascript
// 생성자 함수(prototype)

const jisunny = {
  firstName: 'Jisunny',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(jisunny.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())
```

<br />

### [자바스크립트 클래스 개념]

- 위와 같이 동일한 로직이 반복되면 데이터가 무거워진다
- 메모리의 효율적인 관리를 위해서 자바스크립트의 클래스 개념을 적용해서 작업한다

```javascript
// 위와 같이 같은 로직이 반복되면 데이터가 무거워진다
// 메모리의 효율적인 관리를 위해서 자바스크립트의 클래스 개념을 적용해서 작업한다
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const jisunny = new User('Jisunny', 'Kim') // user 라는 함수 : 생성자 함수(하나의 객체데이터가 생성된다)
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')
// new라는 키워드를 통해서 생성자함수로 실행한 결과가 할당된 jisunny, amy, neo는 인스턴스 함수라고 한다
// 자바스크립트의 클래스라고 하기도 한다 -> 구분하기 위해 PascalCase(앞에만 대문자)로 작성한다

console.log(jisunny.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
```
<br /><br />

## 2. This
<br />

### [생성자 함수(prototype)]

```javascript
// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const jisunny = {
  name: 'Jisunny',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
jisunny.normal() // Jisunny, 일반함수
jisunny.arrow() // undefined, 화살표(Arrow) 함수, 호출범위 상관없음

const amy = {
  name: 'Amy',
  normal: jisunny.normal,
  arrow: jisunny.arrow
}
amy.normal() // Amy
amy.arrow() // undefined
```
<br />

### [this 예시 1 - 생성자 함수(prototype) 에서 this의 정의]

```javascript
// this 예시 1 - 생성자 함수(prototype) 에서 this의 정의

function User(name) { // User : 생성자 함수
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const jisunny = new User('Jisunny')

jisunny.normal() // Jisunny
jisunny.arrow() // undefined
```
<br />

### [this 예시 2 - 일반함수]

```javascript
// this 예시 2 - 일반 함수

const timer = {
  name: 'Jisunny!',
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(function () {
      console.log(this.name) // setTimeout 함수 내부 로직에서 콜백이 들어가 실행됨
    }, 2000)
  }
}
timer.timeout() // undefined, 2초 뒤에 실행됨
```
<br />

### [this 예시 3 - 화살표 함수]

```javascript
//  this 예시 3 - 화살표 함수

const timer = {
  name: 'Jisunny!!',
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout() // Jisunny!!, 2초 뒤에 실행됨
```
<br /><br />

## 3. ES6 Classes
<br />

### [생략가능한 함수 예시]

객체데이터 내부에서 일반함수를 사용할 때 ': function ' 키워드 생략가능

```javascript
// 생략가능한 함수 예시
// 객체데이터 내부에서 일반함수를 사용할 때 ': function ' 키워드 생략가능

const jisunny = {
  name: 'Jisunny',
  //normal: function () { // ': function ' 생략가능함
  normal() { 
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

jisunny.normal() // Jisunny
jisunny.arrow() // undefined
```
<br />

### [예시 1 -  기본 유형 예시]

```javascript
// 예시 1 - 기본 유형 예시

function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const jisunny = new User('Jisuuny', 'Kim')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(jisunny)
console.log(amy.getFullName())
console.log(neo.getFullName())
```
<br />

### [예시 2 -  더 간결하게 작성한 예시]

위 예시를 js 클래스 개념를 통해 간결하게 작성할 수 있다

```javascript
// 예시 2 - 위 예시를 더 간결하게 작성한 예시
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

console.log(jisunny)
console.log(amy.getFullName())
console.log(neo.getFullName())
```
