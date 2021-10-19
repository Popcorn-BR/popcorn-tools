# Popcorn Tools
![npm](https://img.shields.io/npm/dy/popcorn-tools)


## Installation

```sh
$ npm install popcorn-tools --save
```

## How to use

### ES6

```js
// to import a specific method
import { measureFormat } from 'popcorn-tools';
// using  method
measureFormat(1000);
```

## Methods

> Follow the methods that the library provides.

### measureFormat(value)

> Format numbers according to the unit of measurement.

**Arguments**

| Argument | Type    |
|----------|---------|
|`value`   |*number* |


**Example**

```js
const data = measureFormat(1000);
```

### validateCpf(cpf)

> Valid if the number of a CPF (Individual Taxpayer Registration) is valid.

**Arguments**

| Argument | Type    |
|----------|---------|
|`cpf`     |*string* |


**Example**

```js
const valid = validateCpf(cpf);
```
### mobileCheck()

> checks if the browser is on a mobile device..

**Example**

```js
const check = mobileCheck();
```

### currencyFormat(data)

> Format a number for the desired currency.

**Arguments**

| Argument | Type    |
|----------|---------|
|`value`   |*number* |
|`style`   |*string* |
|`currency`|*string* |


**Example**

```js
  currencyFormat({ currency: 'BRL', style: 'pt-BR', value: 10 })
```

### years(number, number)

> Return an array of years.

**Arguments**

| Argument | Type    |
|----------|---------|
|`after`   |*number* |
|`before`  |*number* |


**Example**

```js
  years(10, 5)
```

### filter(array, value, param)

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
const dataFilter = filter(data, 'mam', 'value');
```

### findOrDefault(value, conditions)

> Return a condition value or default value.

**Arguments**

| Argument     | Type    |
|--------------|---------|
|`value`       |*string* |
|`conditions`  |*object* |


**Example**

```js
  const value = 'error';

  const result = findOrDefault(value, {
    success: 'Successs',
    error: 'Error',
    _: 'Default'
  });
```

```ts
  enum MessagePatterns {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
  }

  const value = 'ERROR';

  const result = findOrDefault(value, {
    [MessagePatterns.SUCCESS]: 'Successs',
    [MessagePatterns.ERROR]: 'Error',
    _: 'Default'
  });

  console.log(result) // Error
```

```ts
  enum MessagePatterns {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
  }

  const value = 'ERROR_MESSAGE';

  const result = findOrDefault(value, {
    [MessagePatterns.SUCCESS]: 'Successs',
    [MessagePatterns.ERROR]: 'Error',
    _: 'Default'
  });

  console.log(result) // Default
```

```ts
  enum MessagePatterns {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
  }

  const value = 'ERROR_MESSAGE';

  const result = findOrDefault(value, {
    [MessagePatterns.SUCCESS]: 'Successs',
    [MessagePatterns.ERROR]: 'Error'
  });

  console.log(result) // false
```

### to(promise)

> Return an array with result and error.

**Arguments**

| Argument  | Type     |
|-----------|----------|
|`promise`  |*Promise* |


**Example**

```js
  const [result, error] = await to(api.getUsers());
```

### toList(list, index)

> Return a list with select index.

**Arguments**

| Argument   | Type    |
|------------|---------|
|`list`      |*Array*  |
|`index`     |*string* |


**Example**

```js
  const list = [{ name: 'Itadori', age: 15 }, { name: 'Megumi', age: 15 }];

  const nameList = toList(list, 'name');

  console.log(nameList) // ['Itadori', 'Megumi']
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
