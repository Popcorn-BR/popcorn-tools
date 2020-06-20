# Popcorn Tools
[![Build Status](https://travis-ci.com/Popcorn-BR/popcorn-tools.svg?branch=master)](https://travis-ci.com/Popcorn-BR/popcorn-tools)
[![Coverage Status](https://coveralls.io/repos/github/Popcorn-BR/popcorn-tools/badge.svg?branch=master)](https://coveralls.io/github/Popcorn-BR/popcorn-tools?branch=master)
![npm](https://img.shields.io/npm/dy/popcorn-tools)




## Installation

```sh
$ npm install popcorn-tools --save
```

## How to use

### ES6

```js
// to import a specific method
import popcorn from 'popcorn-tools';
// using  method
popcorn.measureFormat(1000);
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="popcorn-tools.umd.js"></script>

<!-- to import minified version -->
<script src="popcorn-tools.umd.min.js"></script>
```

After that the library will be available to the Global as `PopcornTools`. Follow an example:

```js


const data = popcorn.measureFormat(1000);
```

## Methods

> Follow the methods that the library provides.

### popcorn.measureFormat(value)

> Format numbers according to the unit of measurement.

**Arguments**

| Argument | Type    |
|----------|---------|
|`value`   |*number* |


**Example**

```js
const data = popcorn.measureFormat(1000);
```

### popcorn.cpfValidate(cpf)

> Valid if the number of a CPF (Individual Taxpayer Registration) is valid.

**Arguments**

| Argument | Type    |
|----------|---------|
|`cpf`     |*string* |


**Example**

```js
const valid = popcorn.cpfValidate(cpf);
```
### popcorn.mobileCheck()

> checks if the browser is on a mobile device..

**Example**

```js
const check = popcorn.mobileCheck();
```

### popcorn.currencyFormat(data)

> Format a number for the desired currency.

**Arguments**

| Argument | Type    |
|----------|---------|
|`value`   |*number* |
|`style`   |*string* |
|`currency`|*string* |


**Example**

```js
  popcorn.currencyFormat({ currency: 'BRL', style: 'pt-BR', value: 10 })
```

### popcorn.filter(array, value, param)

> Filter an array of objects based on a string.

**Arguments**

| Argument | Type    |
|----------|---------|
|`array`   |*array*  |
|`value`   |*string* |
|`param`   |*string* |


**Example**

```js
const data = [
  { value: 'Banana' },
  { value: 'Maçã' },
  { value: 'Laranja' },
  { value: 'Morango' },
  { value: 'Abacaxi' },
  { value: 'Mamão' },
];
const dataFilter = popcorn.filter(data, 'mam', 'value');
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Popcorn-BR/popcorn-tools/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Popcorn-BR/popcorn-tools/releases).

## Authors

| ![Denner Rondinely](https://avatars1.githubusercontent.com/u/14242874?s=460&u=bb7141e15c2ce0a34e2ca36ff4398eb774f4c99d&v=4)|
|:---------------------:|
|  [Denner Rondinely](https://github.com/dennerrondinely/)   |

See also the list of [contributors](https://github.com/Popcorn-BR/popcorn-tools/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Popcorn-BR/popcorn-tools/blob/master/LICENCE.md) file for details
