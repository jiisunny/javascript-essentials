# JavaScript Essentials π©π»βπ» - PART1. Node.js

> κ°λ μ λ¦¬ μ¬μ΄νΈ : [λͺ¨λ JavaScript νν λ¦¬μΌ](https://ko.javascript.info/)

<br />

JavaScript Essentials Node.js κ°λ μ λ¦¬

<br />

## 1. κ°μ λ° μ€μΉ
<br />

### [κ°μ]

- Node.jsλ Chrome V8 JavaScript μμ§μΌλ‘ λΉλλ JavaScript λ°νμ(νλ‘κ·Έλλ° μΈμ΄κ° λμνλ νκ²½)
- JavaScript νλ‘κ·Έλλ° μΈμ΄λ μ»΄ν¨ν°μ μΉλΈλΌμ°μ (ν¬λ‘¬)μμ λμν¨
- Node.jsλ₯Ό λ°°μ΄λ€λ κ²μ μ»΄ν¨ν°λ₯Ό μ μ΄νλ κ²μ λ°°μ°λ κ²κ³Ό κ°λ€

<br />

- Node.jsλ JavaScriptλ₯Ό μλ²μμλ μ¬μ©ν  μ μλλ‘ λ§λ  νλ‘κ·Έλ¨μ΄λ€.
- Node.jsλ V8μ΄λΌλ JavaScript μμ§ μμμ λμνλ μλ°μ€ν¬λ¦½νΈ λ°νμ(νκ²½)μ΄λ€.
- Node.jsλ μλ²μ¬μ΄νΈ μ€ν¬λ¦½νΈ μΈμ΄κ° μλλ€. νλ‘κ·Έλ¨(νκ²½)μ΄λ€.
- Node.jsλ μΉμλ²μ κ°μ΄ νμ₯μ± μλ λ€νΈμν¬ νλ‘κ·Έλ¨μ μ μνκΈ° μν΄ λ§λ€μ΄μ‘λ€.

<br />

### [μ€μΉ]

1. μ€μΉμ ν 1

- [Node.js ννμ΄μ§](https://nodejs.org/ko/)μμ λ€μ΄λ‘λ λ°λλ€
- μ§μ λ²μ μ μ¬μ©νλ κ²μ κΆμ₯
- νλ‘ νΈμλ κ°λ°μμλ λΈλλ²μ λ§€λμ (nvm)μ μ¬μ©νλ κ²μ΄ μ’λ€

2. μ€μΉμ ν 2 - nvm(Node.js version manager) `ios` μ€μΉλ°©λ²

    β  κ΅¬κΈμμ nvm κ²μ <br />

    β‘ [Node Version Manager - GitHub](https://github.com/nvm-sh/nvm) μ μ <br />

    β’ νλ¨μ [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) ν΄λ¦­ <br />

    β£ νλ¨ λ΄μ© λ³΅μ¬ (`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`) <br />

    β€	 VsCode - Terminal <br />

    ```bash
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    $ nvm --version
    ```

    - `nvm --version` : μ€μΉ λ nvm λ²μ  νμΈ κ°λ₯

<br />

3. μ€μΉμ ν 2 - nvm(Node.js version manager) `windows` μ€μΉλ°©λ²

    β  κ΅¬κΈμμ nvm-windows κ²μ <br />

    β‘ [nvm-windows](https://github.com/coreybutler/nvm-windows) μ μ <br />

    β’ νλ¨μ [Download Now](https://github.com/coreybutler/nvm-windows/releases) ν΄λ¦­ <br />

    β£ νλ¨μ `nvm-setup.zip` ν΄λ¦­ <br />

    β€ μμΆνκ³  μ€μΉ <br />

    β₯ VsCode - Terminal (powershell λ‘ μ€ν) <br />

    ```bash
    $ nvm --version
    ```

    - `nvm --version` : μ€μΉ λ nvm λ²μ  νμΈ κ°λ₯
<br /><br />

## 2. NVM(Node.js Version Manager) μ¬μ©λ²
<br />

### [nvmμΌλ‘ μνλ λ²μ μ node.js μ€μΉνκΈ°]

1. VsCode - Terminal

```bash
$ nvm ls
$ nvm install 12.14.1
$ nvm ls
```

- `nvm ls` : lsλ listμ μ½μ
- `nvm install 12.14.1` : node.js 12.14.1 λ²μ μ μ€μΉνκ² λ€
- `nvm ls` : μ€μΉ λ λ²μ  νμΈ κ°λ₯

2. λ€λ₯Έ λ²μ  μ€μΉ

```bash
$ nvm install 12.21.0
$ nvm ls
```

3. μ¬μ©ν  λ²μ  μ ν

```bash
$ nvm use 12.14.1
$ nvm ls
$ node --version
```

- `nvm use 12.14.1` : μ¬μ©ν  λ²μ  λͺμ
- `nvm ls` : μ¬μ©λ  λ²μ μ΄ μ νλλμ§ νμΈ κ°λ₯
- `node --version` : node λ²μ  νμΈ

4. nvm λͺλ Ήμ΄ νμΈνκΈ°

```bash
$ nvm --help
```

- `nvm --help` : λͺλ Ήμ΄μ μ€λͺ νμΈκ°λ₯
<br /><br />

## 3. NPM(Node Package Manager) κ°μ
<br />

### [κ°μ]

- `NPM(Node Package Manager)` : μ  μΈκ³μ κ°λ°μλ€μ΄ λ§λ  λ€μν κΈ°λ₯(ν¨ν€μ§, λͺ¨λ)λ€μ κ΄λ¦¬
- νμ΅ λμ΄λκ° μ¦κ°νμ§λ§, νλ‘μ νΈλ₯Ό ν¨μ¨μ μΌλ‘ κ΄λ¦¬ν  μ μλ€

<br />

### [npmμΌλ‘ νλ‘μ νΈ λ§λ€κΈ°]

1. νλ‘μ νΈ νμΌ λ§λ€κΈ° `λ°μ€ν¬ν-test` νμΌ μμ±
2. VsCode μμ test ν΄λ μ΄κΈ°
3. VsCode - Terminal

```bash
$ npm init -y
```

- `npm init -y` : package.json νμΌ μμ±λ¨

4. package.json νμΌμμ μ΄λ¦, λ²μ , μ€λͺ λ± μ΅μ νμΈ κ°λ₯
5. VsCode - Terminal

```bash
$ npm install parcel-bundler -D
```

- `npm install parcel-bundler -D` : μ€μΉκ° μ§νλλ€. package-lock.json μμ±λ¨, node_modules ν΄λ μμ±λ¨

6. VsCode Terminal μ€ν

```bash
$ npm install lodash
```

- `npm install lodash` : lodash λͺ¨λ μ€μΉ

7. ν λ² μ€μΉν ν¨ν€μ§λ package.json νμΌμ λ΄μ­μΌλ‘ λ¨κ² λλ€

<br />

### [μ­μ νλ λͺ¨λ λ€μ μ€μΉνκΈ°]

1. node_modules μ­μ  (λ€μ μ€μΉκ°λ₯)
2. μ¬μ€μΉνκΈ°
3. VsCode - Terminal

```bash
$ npm install
```
λλ
```bash
$ npm i
```

- `npm install` or `npm i` : μ­μ λλ node_modules ν΄λκ° λ€μ μμ±λ¨

<br />

### [μ°¨μ΄μ  λΉκ΅]

1. `package.json` : μ§μ  κ΄λ¦¬νλ νμΌ

2. `package-lock.json` : μλμΌλ‘ κ΄λ¦¬λλ νμΌ 
- `package-lock.json`λ package.json μ μ€μΉλ λͺ¨λμ΄ λ΄λΆμ μΌλ‘ μ°λ λλ€λ₯Έ λͺ¨λ λλ ν¨ν€μ§μ μ λ³΄κ° λ€μ΄κ°μλ€
- λ κ° λͺ¨λ μ λ μ­μ λλ©΄ μλλ νμΌ

3. κ°λ°μ© μμ‘΄μ± ν¨ν€μ§ μ€μΉ

- μ€μΉν ν¨ν€μ§λ€μ΄ κ°λ°ν λλ§ νμνκ³  μΉλΈλΌμ°μ  λμμμλ νμνμ§ μμ

```dash
$ npm install XXX -D, --save-dev
```

μμ

```dash
$ npm install parcel-bundler -D
```

- devDependencies μ μ€μΉλ¨

4. μΌλ° μμ‘΄μ± μ€μΉ

- μ€μΉν ν¨ν€μ§λ€μ΄ μΉλΈλΌμ°μ μμ λμν  μλ μλ€

```bash
$ npm install XXX
```

μμ

```bash
$ npm install lodash
```

- dependenciesμ μ€μΉλ¨
<br /><br />

## 4. κ°λ° μλ² μ€νκ³Ό λΉλ
<br />

### [κ°λ°μ© μλ² μ κ·ΌνκΈ°]

1. index.html νμΌ μμ±
2. κΈ°μ‘΄μλ htmlμμ Open with Live Server λ‘ μ κ·Όνμ§λ§ μ μ©ν λ°©λ²μ μλ

<br />

### [κ°λ°μ© μμ‘΄μ± ν¨ν€μ§ μ€μΉ]

1. VsCode - Terminal

```bash
$ parcel index.html
```
- `parcel index.html` : parcel λͺλ Ήμ΄λ₯Ό μμ§ λͺ¨λ₯΄κΈ° λλ¬Έμ terminalμμ λμνμ§ μμ

2. package.json νμΌλ‘ μ΄λ
3. scripts μ΅μμ test μ€ν¬λ¦½νΈλ νμμμΌλ μ§μμ€λ€

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1" // μ­μ 
}
```

4. μλμ κ°μ΄ μμ±νλ€

```javascript
"scripts": {
  "dev": "parcel index.html" // κ°λ°μ©μΌλ‘ μλ²κ° μ΄λ¦°λ€
}
```

5. VsCode - Terminal

```bash
$ npm run dev
```

- `npm run dev` : npmμ ν΅ν΄ dev μ€ν¬λ¦½νΈλ₯Ό μ€νμν¨λ€

6. μν°λ₯Ό λλ₯΄λ©΄ `localhost:1234` λ§ν¬κ° λνλλ€
7. ν΄λ¦­νλ©΄ λΈλΌμ°μ λ‘ μ΄λ κ°λ₯

<br />

### [μΌλ° μμ‘΄μ± ν¨ν€μ§(lodash) μ€μΉ]

1. main.js νμΌλ‘ μ΄λν΄ import λ΄μ©μ μλ ₯νλ€

```javascript
import _ from βlodashβ;

console.log(βhello worldβ); // hello world
console.log(_.camelCase(βhello worldβ)); // helloWorld
```
- μΉλΈλΌμ°μ μ μ½μμ°½μ μΆλ ₯λλ€

2. package.json μ βscriptsβ λΆλΆμ λ΄μ©μΆκ°
3. βdevβμλμ μλ ₯

```javascript
"scripts": {
  "dev": "parcel index.html" // κ°λ°μ©μΌλ‘ μλ²κ° μ΄λ¦°λ€
  "build": "parcel build index.html" // μ¬μ©μλ€μ΄ μ€μ λ‘ λ³΄λ μλ²κ° μ΄λ¦Ό
}
```

4. VsCode - Terminal

```bash
$ npm run build
```

- dist ν΄λ μμ±λ¨

  > dist ν΄λ
  > - μ½λκ° λλν λμ΄μμ
  > - λΉλλ κ²°κ³Ό(μ ν)λ λΈλΌμ°μ μμ ν΄μλλ μ©λ
  > - μ©λμ μΆμνκ³  μ½κΈ° μ΄λ ΅κ² λ§λλ λ±μ μ΅μ νλ₯Ό κ±°μΉλ κ²μ΄ μ’μ

5. main.js νμΌλ λλνκ° λμ΄μλ€
- Parcel-bundler ν¨ν€μ§κ° lodashλ₯Ό ν¬ν¨ν ν¨ν€μ§κΉμ§ κ°μ΄ λ¬Άμ΄ λ²λ€λμ΄ κ²°κ³Όλ₯Ό λ³΄μ¬μ€
- λ²λ€(Bundle) : νλ‘μ νΈ κ°λ°μ μ¬μ©ν μ¬λ¬ λͺ¨λ(ν¨ν€μ§)μ νλλ‘ λ¬Άμ΄λ΄λ μμμ λ§νλ€
<br /><br />

## 5. μ μμ  λ²μ (Semantic Versioning, SemVer)
<br />

### [μ μμ  λ²μ μ κ°λ]

1. VsCode - Terminal

```bash
$ node --version
$ npm βversion
```

- `node --version` : μ€μΉλ node λ²μ  νμΈ 0.00.0
- `npm βversion` : npm λ²μ  νμΈ 0.00.00

2. μ μμ  λ²μ μ΄λ?
- Semantic Versioning, SemVer
- μ μμ  : μλ―Έκ° μλ€

3. κΈ°λ³Έ κ°λ

    > ex) node.js 12.14.1 (Major.Minor.Patch)

- Major : κΈ°μ‘΄ λ²μ κ³Ό νΈνλμ§ μλ μλ‘μ΄ λ²μ  (=νΈνλμ§ μλ λ²μ μ΄ 12κ° μλ€)
- Minor : κΈ°μ‘΄ λ²μ κ³Ό νΈνλλ μλ‘μ΄ κΈ°λ₯μ΄ μΆκ°λ λ²μ  (=14λ² μλ‘μ΄ κΈ°λ₯μ΄ μΆκ°λλ€)
- Patch : κΈ°μ‘΄ λ²μ κ³Ό νΈνλλ λ²κ·Έ λ° μ€ν λ±μ΄ μμ λ λ²μ  (= 1λ²μ λ²κ·Έμμ μ΄ μμλ€)

4. μ°Έκ³  λ΄μ©

    > ex) ^12.14.1 (^Major.Minor.Patch)

- Major λ²μ  μμμ κ°μ₯ μ΅μ  λ²μ μΌλ‘ μλ°μ΄νΈ κ°λ₯
- Majorλ λ°λμ§ μκ³  Minor, Patchλ μ΅μ  λ²μ μΌλ‘ μλ°μ΄νΈ κ°λ₯νλ€λ λ»

5. μ€μΉ λ° μλ°μ΄νΈ

    β  VsCode - Terminal <br />

    ```bash
    $ npm info lodash
    $ npm install lodash@4.17.20
    $ npm update lodash
    ```

    - `npm info lodash` : lodash μ λ³΄ νμΈ
    - `npm install lodash@4.17.20` : ν΄λΉ λ²μ μΌλ‘ ν¨ν€μ§ μ€μΉ
    - `npm update lodash` : loadash ν¨ν€μ§ μ΅μ μΌλ‘ μλ°μ΄νΈ

    β‘	 μΊλ‘― κΈ°νΈ (^) λ₯Ό μ κ±°νλ©΄ μλ°μ΄νΈκ° ν΄λΉ λ²μ μΌλ‘ μλ°μ΄νΈ λλ€
<br /><br />

## 6. NPM νλ‘μ νΈμ λ²μ  κ΄λ¦¬ (.gitignore)
<br />

### [npmμΌλ‘ νλ‘μ νΈλ₯Ό κ΄λ¦¬ν  λ μ£Όμμ¬ν­]

- `β©.cache`, `dist`, `node_modules`μ κ°μ ν΄λλ μλμΌλ‘ μμ±λλ ν΄λμ΄λ€
- `npm install`, `npm run build` μ κ°μ΄ νμμμΌλ‘ λ§λλ ν΄λλ€μ λ°λ‘ λ²μ κ΄λ¦¬λ₯Ό νμ§ μμλ λλ€
- λ°λ‘ λ²μ κ΄λ¦¬λ₯Ό ν  νμ μλ νμΌ, ν΄λλ€μ μΈμ λ μ§ λ€μ λκ°μ κ΅¬μ‘°λ‘ μμ±ν  μ μλ€
- λ°λΌμ λ°λ‘ λ²μ κ΄λ¦¬λ₯Ό ν  νμλ μλ€

<br />

### [GitHub μΌλ‘ νλ‘μ νΈ push]

1. git initμ μλ ₯νκΈ° μ μ, νλ‘μ νΈ root κ²½λ‘μμ λ²μ κ΄λ¦¬κ° νμμλ νμΌμ μ μΈν΄μ€λ€
2. VsCode - μλ‘μ΄ νμΌ μμ± - `.gitignore` - νμΌμμ±

- .gitignore νμΌμ μλ λ΄μ© μλ ₯
- μλ ₯ν λ΄μ©μ λ²μ κ΄λ¦¬ νμΌμ λνλμ§ μλλ€

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
$ git commit -m βνλ‘μ νΈ μμ±β
$ git log
```

4. GitHub μ μ₯μ μμ± - μ μ₯μ μ£Όμ λ³΅μ¬
5. VsCode - Terminal

```bash
$ git remote add origin λ³΅μ¬ν λ§ν¬
$ git push origin master
```

6. λΈλΌμ°μ  νμΈ, Push μλ£
<br /><br /><br />

# JavaScript Essentials π©π»βπ» - PART2. JS μμνκΈ°

JavaScript κ°λ μ λ¦¬
<br /><br />

## 1. κ°μ(ECMAScript) λ° νλ‘μ νΈ μ΄κΈ°ν
<br />

### [ECMA(μν¬λ§)μ€ν¬λ¦½νΈ κ°λ]

- ES λ‘ λΆλ₯Ό μ μμ
- ECMA : μ λ½μ»΄ν¨ν° μ μ‘°ννμ μ½μ΄, μλ°μ€ν¬λ¦½νΈλ₯Ό νμ€ν ν΄μ£Όλ κ΅­μ νμ€ν κΈ°κ΅¬
- `JAVASCRIPT` = `JS` = `ECMASCRIPT` = `ES` 
- 2015λ μ΄νλ‘ λ§μ λ°μ μ λ³΄μ

<br />

### [μλ°μ€ν¬λ¦½νΈ μ½λ©νκ²½ μν]

1. λ°ννλ©΄μ js-test ν΄λ μμ±
2. VsCode μμ ν΄λ μ΄κ³  Terminal μ€ν

```bash
$ npm init -y : package.json νμΌ μμ±λ¨
$ npm install parcel-bundler --save-dev
λλ
$ npm install parcel-bundler -D
λλ
$ npm i parcel-bundler -D
```

- `npm init -y` : package.json νμΌ μμ±λ¨
- `npm install parcel-bundler --save-dev` λλ
- `npm install parcel-bundler -D` λλ
- `npm i parcel-bundler -D` : package-lock.json νμΌ μμ±λ¨

3. κ°λ°μ© λ° κ²°κ³Όλ¬Όλ‘ μΈ μ μλλ‘ μ€ν¬λ¦½νΈ λͺλ Ή μΆκ°
4. package.json νμΌμ βscriptβ λ΄μ© μμ 
- βtestβ λ΄μ© μ­μ 

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1" // μ­μ 
}
```

- βdevβ: ββparcel index.htmlβ μλ ₯
- βbuildβ: βparcel build index.htmlβ μλ ₯

```javascript
"scripts": {
  βdevβ: ββparcel index.htmlβ,
  βbuildβ: βparcel build index.htmlβ
}
```

5. root κ²½λ‘μ index.html νμΌ μμ±
- title μλ `script νκ·Έ` μΆκ°

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

- Body νκ·Έ μμ h1 νκ·Έ μΆκ° (test)

```html
<body>
  <h1>Hello world!</h1>
</body>
```

6. root κ²½λ‘μ `main.js` νμΌ μμ±

- console.log('Hello world!'); μλ ₯

```javascript
console.log('Hello world!');
```

7. parcel-bundler λ₯Ό ν΅ν΄ index.html μ κΈ°μ€μΌλ‘ localμ λ΄λΆμλ²λ₯Ό μμ±
- VsCode - terminal

```bash
$ npm run dev : κ°λ°μλ²κ° μ΄λ¦Ό
```

- `npm run dev` : κ°λ°μλ²κ° μ΄λ¦Ό
- `Localhost:1234` ν¬νΈκ° μ΄λ¦Ό
<br /><br />

## 2. λ°μ΄ν° νμ νμΈ
<br />

### [μλ°μ€ν¬λ¦½νΈ λ΄μ© μμ±ν΄λ³΄κΈ°]

μλ°μ€ν¬λ¦½νΈλ₯Ό μμ±ν  λ μλ¬΄μ ν¨μ¨μ μν΄ μΈλ―Έμ½λ‘ (`;`)μ μ°μ§ μμλ λλ€

1. `getType.js` νμΌ μμ±

```javascript
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
```

2. `import`λ₯Ό ν΅ν΄ λ€λ₯Έ js νμΌμ ν¨μλ₯Ό μ μ©ν  μ μλ€
3. `main.js` νμΌ μ€ν

```javascript
import getType from './getType'
```

4. importλ‘ μ μ©νλ©΄ main.js μμλ `getType` ν¨μκ° μ€νλλ€
<br /><br />

## 3. μ°μ , ν λΉ μ°μ°μ
<br />

### [μ°μ  μ°μ°μ(arithmetic operator)]

```javascript
// μ°μ  μ°μ°μ(arithmetic operator)

console.log(1 + 2) // λνκΈ°
console.log(5 - 7) // λΉΌκΈ°
console.log(3 * 4) // κ³±νκΈ°
console.log(10 / 2) // λλκΈ°
console.log(7 % 5) // λλ¨Έμ§ κ°μ κ΅¬ν  λ
```

<br />

### [ν λΉ μ°μ°μ(assignment operator)]

```javascript
// ν λΉ μ°μ°μ(assignment operator)

const a = 2 // constλ μ¬ν λΉμ΄ λΆκ°λ₯ν¨
let a = 2

a = a + 1 // a κ° μ¬ν λΉ, 3
a += 1 // μ μ½λμ κ°μ΄ κ°μ, 3

a = a - 1 // a κ° μ¬ν λΉ, 1
a -= 1 // μ μ½λμ κ°μ΄ κ°μ, 1

a = a * 1 // a κ° μ¬ν λΉ, 2
a *= 1 // μ μ½λμ κ°μ΄ κ°μ, 2

a = a / 1 // a κ° μ¬ν λΉ, 2
a /= 1 // μ μ½λμ κ°μ΄ κ°μ, 2

a = a % 1 // a κ° μ¬ν λΉ, 0
a %= 1 // μ μ½λμ κ°μ΄ κ°μ, 0

console.log(a)
```
<br /><br />

## 4. λΉκ΅, λΌλ¦¬ μ°μ°μ
<br />

### [λΉκ΅ μ°μ°μ(comparison operator)]

```javascript
// λΉκ΅ μ°μ°μ(comparison operator)

const a = 1
const b = 1

console.log(a === b) // true, === : μΌμΉ μ°μ°μ, aμ bκ° μΌμΉνλκ°?

//ν¨μ μμ±
function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1)) // true
console.log(isEqual(2, '2')) // false, μ«μμ λ¬Έμμ΄κΈ° λλ¬Έμ false κ°


console.log(a !== b) // false, !== : λΆμΌμΉ μ°μ°μ, aμ bκ° μλ‘ λ€λ₯Έκ°?

console.log(a < b) // false, aκ° bλ³΄λ€ μμκ°?
console.log(a > b) // false, aκ° bλ³΄λ€ ν°κ°?
console.log(a >= b) // true, aκ° b λ³΄λ€ ν¬κ±°λ κ°μκ°?
console.log(a <= b) // true, aκ° b λ³΄λ€ μκ±°λ κ°μκ°?
```

<br />

### [λΌλ¦¬ μ°μ°μ(logical operator)]

```javascript
// λΌλ¦¬ μ°μ°μ(logical operator)

const a = 1 === 1
const b = 'AB' === 'ABC'
const c = false

console.log(a) // true
console.log(b) // false
console.log(c) // false

// &&: κ·Έλ¦¬κ³  And(νλλΌλ falseκ° μμΌλ©΄ false)
console.log('&&: ', a && b && c) // false, true and false and false

// ||: λλ Or(νλλΌλ trueκ° μμΌλ©΄ true)
console.log('||: ', a || b || c) // true, true or false or false

// !: λΆμ μ°μ°μ, NOT
console.log('!: ', !a) // false, κ²°κ³Όκ° trueμΈλ° μμ !μ λΆμΌλ©΄ falseκ° μΆλ ₯λλ€
```
<br /><br />

## 5. μΌν­ μ°μ°μ
<br />

### [μΌν­ μ°μ°μ(ternary operator)]

```javascript
// μΌν­ μ°μ°μ(ternary operator)

const a = 1 < 2 // true

if (a) {
    console.log('μ°Έ')
} else {
   console.log('κ±°μ§')
}

// μ ν¨μλ₯Ό κ°λ¨νκ² μΌν­μ°μ°μλ‘ λνλΌ μ μλ€
console.log(a ? 'μ°Έ' : 'κ±°μ§') // ?μμμλ κ°μ΄ μ°Έμ΄λ©΄ μμͺ½μ νμ, κ±°μ§μ΄λ©΄ λ·μͺ½μ νμ
```
<br /><br />

## 6. μ‘°κ±΄λ¬Έ If Else
<br />

### [μ‘°κ±΄λ¬Έ (If statement)]

```javascript
// μ‘°κ±΄λ¬Έ (If statement)

import random from './getRandom'

const a = random()

// κΈ°λ³Έ μ‘°κ±΄λ¬Έ
if (a === 0) {
  console.log('a is 0')
} else {
  console.log('rest...')
} // λλ€μΌλ‘ μ«μκ° 0μ΄ λμ¬λ a is 0 μ΄ μ½μμ°½μ μΆλ ₯λλ€

// else if μ‘°κ±΄λ¬Έ
if (a === 0 ) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
} // μ°Έμ΄λ©΄ μμμ‘°κ±΄ κ±°μ§μ΄λ©΄ else if κ΅¬λ¬ΈμΌλ‘, else if λ κ±°μ§μ΄λ©΄ else κ΅¬λ¬ΈμΌλ‘
```
<br /><br />

## 7. μ‘°κ±΄λ¬Έ Switch
<br />

### [μ‘°κ±΄λ¬Έ (Switch statement)]

```javascript
// μ‘°κ±΄λ¬Έ (Switch statement)

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
  default: // Ifλ¬Έμ else μ‘°κ±΄μ ν΄λΉνλ λΆλΆ
    console.log('rest...')
}
```
<br /><br />

## 8. λ°λ³΅λ¬Έ For
<br />

### [λ°λ³΅λ¬Έ (For statement)]

```javascript
// λ°λ³΅λ¬Έ (For statement)

for (μμμ‘°κ±΄; μ’λ£μ‘°κ±΄; λ³ν μ‘°κ±΄) {}

for (let i = 0; i < 3; i += 1) { // μμμ‘°κ±΄ -> λ³νμ‘°κ±΄ -> μ’λ£μ‘°κ±΄, μ’λ£μ‘°κ±΄μ΄ falseκ° λ λκΉμ§ λ°λ³΅λλ€
  console.log(i)
}
```

1. λ³μμμ±

```javascript
// λ³μμμ±

const ulEl = document.querySelector('ul') // querySelector λ©μλλ₯Ό μ€νν΄ ul νκ·Έλ₯Ό μ°ΎμλΌ
}
```

2. addEventListener μΆκ°νμ λ

```javascript
// addEventListener μΆκ°νμ λ

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li') // createElement λ©μλλ₯Ό μ€νν΄ λ©λͺ¨λ¦¬μμ li νκ·Έλ₯Ό λ§λ€μ΄ li λ³μμ μ°κ²°νλ€
  li.textContent = `list-${i + 1}` // λ©λͺ¨λ¦¬μμ li νκ·Έμ textContent μμ±μ ν΅ν΄ ``κΈ°νΈ μμ λ¬Έμλ°μ΄ν°λ₯Ό ν λΉνλ€, ${} : λ³΄κ΄μ²λ¦¬
  li.addEventListener('click', function () { // addEventListenerλ₯Ό ν΅ν΄ liλ₯Ό ν΄λ¦­νλ©΄ liκ° κ°κ³ μλ textContentλ₯Ό λ³΄μ¬μ€λ€
    console.log(li.textContent)
  })
  ulEl.appendChild(li) // li νκ·Έλ₯Ό appendChild λ©μλλ₯Ό ν΅ν΄ ul νκ·Έ μμ λ£μ΄μ€λ€
}
```

3. If μ‘°κ±΄λ¬Έ μΆκ°νμ λ

```javascript
// If μ‘°κ±΄λ¬Έ μΆκ°νμ λ

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li') // createElement λ©μλλ₯Ό μ€νν΄ λ©λͺ¨λ¦¬μμ li νκ·Έλ₯Ό λ§λ€μ΄ li λ³μμ μ°κ²°νλ€
  li.textContent = `list-${i + 1}` // λ©λͺ¨λ¦¬μμ li νκ·Έμ textContent μμ±μ ν΅ν΄ ``κΈ°νΈ μμ λ¬Έμλ°μ΄ν°λ₯Ό ν λΉνλ€, ${} : λ³΄κ΄μ²λ¦¬
  if ((i + 1) % 2 === 0) { // iκ° μ§μμΈ κ²½μ°μλ©΄ μΆλ ₯λλλ‘ μ€μ 
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li) // li νκ·Έλ₯Ό appendChild λ©μλλ₯Ό ν΅ν΄ ul νκ·Έ μμ λ£μ΄μ€λ€
}
```
<br /><br />

## 9. λ³μ μ ν¨λ²μ
<br />

### [λ³μ μ ν¨λ²μ (Variable Scope)]

```javascript
// λ³μ μ ν¨λ²μ (Variable Scope)

// var(μ¬μ©μ κΆμ₯νμ§ μμ), let, const
// varλ ν¨μ λ λ²¨μ μ ν¨λ²μλ₯Ό κ°λλ€ λ°λΌμ λ©λͺ¨λ¦¬λ₯Ό μ°¨μ§νκ³  λ©λͺ¨λ¦¬ λμλ₯Ό κ°λλ€(μ¬μ©κΆμ₯νμ§ μμ)

function scope() {
  if (true) {
    const a = 123 // let, constλ λΈλ‘ λ λ²¨μ μ ν¨λ²μλ₯Ό κ°λλ€
    console.log(a) // varλ₯Ό μ¬μ©νλ©΄ console.log(a)μ μμΉκ° λ°λμ΄λ μ€νλλ€(λΉκΆμ₯)
  }
}
scope()
```
<br /><br />

## 10. νλ³ν
<br />

### [ν(μλ£ν) λ³ν (Type conversion)]

Falsy(κ±°μ§ κ°μ κ°)λ μκΈ° νμ

```javascript
// ν(μλ£ν) λ³ν (Type conversion)
// μλ£ν = λ°μ΄ν° νμ : λ¬Έμλ°μ΄ν°, μ«μλ°μ΄ν°, κ°μ²΄λ°μ΄ν° etc..

// Truthy(μ°Έ κ°μ κ°)
true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(κ±°μ§ κ°μ κ°)] - μκΈ° νμ
false, '', null, undefined, 0, -0, NaN(Not a Number)

if (true) {
  console.log(123) // μΆλ ₯λ¨
}
```

<br />

### [λλ±μ°μ°μλ₯Ό μ°λ©΄ μλλ μ΄μ ]

```javascript
// λλ±μ°μ°μλ₯Ό μ°λ©΄ μλλ μ΄μ 
const a = 1 // μ«μλ°μ΄ν°
const b = '1' // λ¬Έμλ°μ΄ν°

console.log(a == b) // == : λλ±μ°μ°μ(κΆμ₯νμ§ μμ)
```
<br /><br /><br />

# JavaScript Essentials π©π»βπ» - PART3. JS ν¨μ

JavaScript ν¨μ κ°λ μ λ¦¬
<br /><br />

## 1. ν¨μλ³΅μ΅
<br />

### [ν¨μ λ³΅μ΅]

```javascript
// ν¨μ λ³΅μ΅

// λ³΅μ΅ 1
function sum(x, y) { // x, y : λ§€κ°λ³μ
  console.log(x + y)
}

sum(1, 3) // 4, 1, 3 : μΈμ
sum(4, 12) // 16

// λ³΅μ΅ 2
function sum(x, y) { // x, y : λ§€κ°λ³μ
  return x + y
}

const a = sum(1, 3) // 1, 3 : μΈμ
const b = sum(4, 12)

console.log(a) // 4
console.log(b) // 16
console.log(a + b) // 20

// λ³΅μ΅ 3
function sum() {
  console.log(arguments) // λ°λ‘ λ§€κ°λ³μλ₯Ό μ§μ νμ§ μμλ μ¬μ©κ°λ₯ν¨
  return arguments[0] + arguments[1] // λ§€κ°λ³μ μκ° λ§μ λ μ¬μ© κΆμ₯
}

console.log(sum(7, 3))
```
<br /><br />

## 2. νμ΄ν ν¨μ
<br />

### [νμ΄ν ν¨μ]

```javascript
// νμ΄ν ν¨μ
// () =>  vs  function () {}

// κΈ°λ³Έ ν¨μ μ ν
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7)) // 14

// νμ΄ν ν¨μ μμ 1
const doubleArrow = (x) => { // νμ΄ν ν¨μ : κΈ°λ³Έμ  λ‘μ§μ μΆμ½νμΌλ‘ μ€μ¬λκ° μ μλ€
  return x * 2 // return ν€μλ μ΄μ μ νΉμ μ½λκ° λ€μ΄μμΌλ©΄ μΆμ½νμΌλ‘ λ§λ€ μ μλ€
}
console.log('doubleArrow', doubleArrow(7)) // 14


// νμ΄ν ν¨μ μμ 2
const doubleArrow2 = (x) => x * 2 // μλ΅κ°λ₯
console.log('doubleArrow2', doubleArrow2(7)) // 14


// νμ΄ν ν¨μ μμ 3
const doubleArrow3 = x => x * 2 // λ§€κ°λ³μκ° 1κ° μ΄λ©΄ μκ΄νΈ μλ΅ κ°λ₯, x => x*2 κ° νλμ ν¨μλ€
console.log('doubleArrow3', doubleArrow(7)) // 14


// νμ΄ν ν¨μ μμ 4
const doubleArrow4 = x => ({ // κ°μ²΄λ°μ΄ν°λ λκ΄νΈ{}λ₯Ό μκ΄νΈ()λ‘ κ°μΈμ λ§λ€μ΄μ€μΌ μ½μμ μΆλ ₯λλ€
  name: 'Jisunny'
})
console.log('doubleArrow4', doubleArrow4(7)) // {name: 'Jisunny'}
```
<br /><br />

## 3. IIFE (Immediately-Invoked Function Expression)
<br />

### [μ¦μ μ€ν ν¨μ]

```javascript
// μ¦μμ€νν¨μ
// IIFE, Immediately-Invoked Function Expression

// κΈ°λ³Έ ν¨μ κ΅¬μ‘° μμ
const a = 7
function double() {
  console.log(a * 2)
}
double(); // 14

// μ¦μμ€νν¨μ μμ (ν¨μλ₯Ό λ§λ€μλ§μ λ°λ‘ λμν¨)
// μ ν 1 ()()
(function () {
  console.log(a * 2)
})(); // 14

// μ ν 2 (()) -> κΆμ₯νλ λ°©λ²
(function () {
  console.log(a * 2)
}()); // 14
```
<br /><br />

## 4. νΈμ΄μ€ν (Hoisting)
<br />

### [νΈμ΄μ€ν (Hoisting)]

```javascript
// νΈμ΄μ€ν (Hoisting)
// ν¨μ μ μΈλΆκ° μ ν¨λ²μ μ΅μλ¨μΌλ‘ λμ΄μ¬λ €μ§λ νμ
// μ μ©ν  λ : λ‘μ§μ΄ λ³΅μ‘ν  λ, ν¨μ μ΄λ¦μ νμΈν΄ ν΄μνκΈ°κ° μ’λ€

const a = 7

double() // 14, ν¨μμ μ μΈλΆκ° μ ν¨λ²μ μ΅μλ¨μΌλ‘ λμ΄μ¬λ €μ§ -> νΈμ΄μ€ν νμμΌλ‘ μ€λ₯λ μλ€

function double() {
  console.log(a * 2)
}
```
<br /><br />

## 5. νμ΄λ¨Έ ν¨μ
<br />

### [νμ΄λ¨Έ ν¨μ]

```javascript
// νμ΄λ¨Έ ν¨μ
// setTimeout(ν¨μ, μκ°): μΌμ  μκ° ν ν¨μ μ€ν
// setInterval(ν¨μ, μκ°): μκ° κ°κ²©λ§λ€ ν¨μ μ€ν
// clearTimeout(): μ€μ λ Timeout ν¨μλ₯Ό μ’λ£
// clearInterval(): μ€μ λ Interval ν¨μλ₯Ό μ’λ£

// setTimeout ν¨μ μμ
setTimeout(function () {
  console.log('Heropy!')
}, 3000) // 1000ms = 1μ΄

// setTimeout ν¨μ μμ - νμ΄ν ν¨μ
setTimeout(() => {
  console.log('Heropy!')
}, 3000)

// clearTimeout ν¨μ μμ
const timer = setTimeout(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => { // h1μ ν΄λ¦­νλ©΄ ν¨μκ° μ€νλλ©΄μ
  clearTimeout(timer) // clearTimeoutλ‘ timer ν¨μ μ’λ£
})

// setInterval ν¨μ μμ (μ€μ ν μκ°κ°κ²© λ§λ€ μ§μμ μΌλ‘ ν¨μ μ€ν)
const timer = setInterval(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => { // h1μ ν΄λ¦­νλ©΄ ν¨μκ° μ€νλλ©΄μ
  clearInterval(timer) // clearTimeoutλ‘ timer ν¨μ μ’λ£
})
```
<br /><br />

## 6. μ½λ°±
<br />

### [μ½λ°±(Callback)]

```javascript
// μ½λ°±(Callback)
// ν¨μμ μΈμλ‘ μ¬μ©λλ ν¨μ

// setTimeout(ν¨μ, μκ°)
// μμμ μ°μΈ ν¨μλ₯Ό μ½λ°±ν¨μλΌκ³  νλ€

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => { // timeout μΈμλ‘ νμ΄ν ν¨μλ₯Ό λ£μ, μ¬κΈ°μ μ°μ΄λ νμ΄ν ν¨μ : μ½λ°± ν¨μ
  console.log('Done!')
})
```
<br /><br /><br />

# JavaScript Essentials π©π»βπ» - PART4. JS ν΄λμ€

JavaScript ν΄λμ€ κ°λ μ λ¦¬
<br /><br />

## 1. μμ±μ ν¨μ(prototype)
<br />

### [μμ±μ ν¨μ(prototype)]

```javascript
// μμ±μ ν¨μ(prototype)

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

### [μλ°μ€ν¬λ¦½νΈ ν΄λμ€ κ°λ]

- μμ κ°μ΄ λμΌν λ‘μ§μ΄ λ°λ³΅λλ©΄ λ°μ΄ν°κ° λ¬΄κ±°μμ§λ€
- λ©λͺ¨λ¦¬μ ν¨μ¨μ μΈ κ΄λ¦¬λ₯Ό μν΄μ μλ°μ€ν¬λ¦½νΈμ ν΄λμ€ κ°λμ μ μ©ν΄μ μμνλ€

```javascript
// μμ κ°μ΄ κ°μ λ‘μ§μ΄ λ°λ³΅λλ©΄ λ°μ΄ν°κ° λ¬΄κ±°μμ§λ€
// λ©λͺ¨λ¦¬μ ν¨μ¨μ μΈ κ΄λ¦¬λ₯Ό μν΄μ μλ°μ€ν¬λ¦½νΈμ ν΄λμ€ κ°λμ μ μ©ν΄μ μμνλ€
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const jisunny = new User('Jisunny', 'Kim') // user λΌλ ν¨μ : μμ±μ ν¨μ(νλμ κ°μ²΄λ°μ΄ν°κ° μμ±λλ€)
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')
// newλΌλ ν€μλλ₯Ό ν΅ν΄μ μμ±μν¨μλ‘ μ€νν κ²°κ³Όκ° ν λΉλ jisunny, amy, neoλ μΈμ€ν΄μ€ ν¨μλΌκ³  νλ€
// μλ°μ€ν¬λ¦½νΈμ ν΄λμ€λΌκ³  νκΈ°λ νλ€ -> κ΅¬λΆνκΈ° μν΄ PascalCase(μμλ§ λλ¬Έμ)λ‘ μμ±νλ€

console.log(jisunny.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
```
<br /><br />

## 2. This
<br />

### [μμ±μ ν¨μ(prototype)]

```javascript
// this
// μΌλ°(Normal) ν¨μλ νΈμΆ μμΉμμ λ°λΌ this μ μ!
// νμ΄ν(Arrow) ν¨μλ μμ μ΄ μ μΈλ ν¨μ λ²μμμ this μ μ!

const jisunny = {
  name: 'Jisunny',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
jisunny.normal() // Jisunny, μΌλ°ν¨μ
jisunny.arrow() // undefined, νμ΄ν(Arrow) ν¨μ, νΈμΆλ²μ μκ΄μμ

const amy = {
  name: 'Amy',
  normal: jisunny.normal,
  arrow: jisunny.arrow
}
amy.normal() // Amy
amy.arrow() // undefined
```
<br />

### [this μμ 1 - μμ±μ ν¨μ(prototype) μμ thisμ μ μ]

```javascript
// this μμ 1 - μμ±μ ν¨μ(prototype) μμ thisμ μ μ

function User(name) { // User : μμ±μ ν¨μ
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

### [this μμ 2 - μΌλ°ν¨μ]

```javascript
// this μμ 2 - μΌλ° ν¨μ

const timer = {
  name: 'Jisunny!',
  timeout: function () {
    // setTimeout(ν¨μ, μκ°)
    setTimeout(function () {
      console.log(this.name) // setTimeout ν¨μ λ΄λΆ λ‘μ§μμ μ½λ°±μ΄ λ€μ΄κ° μ€νλ¨
    }, 2000)
  }
}
timer.timeout() // undefined, 2μ΄ λ€μ μ€νλ¨
```
<br />

### [this μμ 3 - νμ΄ν ν¨μ]

```javascript
//  this μμ 3 - νμ΄ν ν¨μ

const timer = {
  name: 'Jisunny!!',
  timeout: function () {
    // setTimeout(ν¨μ, μκ°)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout() // Jisunny!!, 2μ΄ λ€μ μ€νλ¨
```
<br /><br />

## 3. ES6 Classes
<br />

### [μλ΅κ°λ₯ν ν¨μ μμ]

κ°μ²΄λ°μ΄ν° λ΄λΆμμ μΌλ°ν¨μλ₯Ό μ¬μ©ν  λ ': function ' ν€μλ μλ΅κ°λ₯

```javascript
// μλ΅κ°λ₯ν ν¨μ μμ
// κ°μ²΄λ°μ΄ν° λ΄λΆμμ μΌλ°ν¨μλ₯Ό μ¬μ©ν  λ ': function ' ν€μλ μλ΅κ°λ₯

const jisunny = {
  name: 'Jisunny',
  //normal: function () { // ': function ' μλ΅κ°λ₯ν¨
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

### [μμ 1 -  κΈ°λ³Έ μ ν μμ]

```javascript
// μμ 1 - κΈ°λ³Έ μ ν μμ

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

### [μμ 2 -  λ κ°κ²°νκ² μμ±ν μμ]

μ μμλ₯Ό js ν΄λμ€ κ°λλ₯Ό ν΅ν΄ κ°κ²°νκ² μμ±ν  μ μλ€

```javascript
// μμ 2 - μ μμλ₯Ό λ κ°κ²°νκ² μμ±ν μμ
// μμ±μ ν¨μλ₯Ό js ν΄λμ€ κ°λλ₯Ό ν΅ν΄ κ°κ²°νκ² μμ±ν  μ μλ€

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
<br /><br />

## 4. μμ(νμ₯)
<br />

### [μμ(νμ₯)]

ν΄λμ€ μμμ μ¬μ©νλ©΄ ν΄λμ€λ₯Ό λ€λ₯Έ ν΄λμ€λ‘ νμ₯ν  μ μλ€. <br />
κΈ°μ‘΄μ μ‘΄μ¬νλ κΈ°λ₯μ ν λλ‘ μλ‘μ΄ κΈ°λ₯μ λ§λ€ μ μλ€.

```javascript
// μμ(νμ₯)

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('μ΄μ‘μλ¨', 2)
console.log(myVehicle)

class Bicycle extends Vehicle { // extends : μμ(νμ₯), μ΄λ―Έ μ μλμ΄ μλ λ΄μ©μ μμ(νμ₯)ν΄μ μ¬μ©κ°λ₯
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('μΌμ²λ¦¬', 2)
const daughtersBicycle = new Bicycle('μΈλ°', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle { // μ΄λ―Έ μ μ λμ΄ μλ λ΄μ©(Vehicle)μ μμν΄μ μ¬μ©κ°λ₯
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('λ²€μΈ ', 4, true)
const daughtersCar = new Car('ν¬λ₯΄μ', 4, false)

console.log(myCar)
console.log(daughtersCar)
```