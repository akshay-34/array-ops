
# array-ops
A comprehensive library for javascript array operations and manipulation.

## Installation
	npm install array-ops

## Initilization
```js
var arrayOps = require('array-ops')
var array = new array_ops()
```
## Example
```js	
array.isArray([1,2,3])  // true
```
## API Reference

 1. [Validation](#validation)

## Validation
### `array.isArray(array)`
*Returns true if the passed value is an array.*
```js
array.isArray([1,2,3])              // true
array.isArray(1)                    // false
```
---  
### `array.isNumericArray(array)`
*Returns true if all the elements of the array are numbers (Intergers or Decimal).*
```js
array.isNumericArray([1,2,3])       // true
array.isNumericArray([1,2,4.6])     // true
array.isNumericArray([1,'r',8)      // false
```
---
### `array.isIntegerArray(array)`
*Returns true if all the elements of the array are integers.*
```js
array.isIntegerArray([1,2,3])       // true
array.isIntegerArray([1,2,4.6])     // false
```
---
### `array.isDecimalArray(array)`
*Returns true if all the elements of the array are decimal.*
```js
array.isDecimalArray([24.3,82.6])   // true
array.isDecimalArray([1,2,3])       // false
```
---
### `array.isStringArray(array)`
*Returns true if all the elements of the array are strings.*
```js
array.isStringArray(['foo','bar'])  // true
array.isStringArray(['1','2','3'])  // true
array.isStringArray([1,34])         // false
```
---
### `array.isEmptyArray(array)`
*Returns true if the array is empty.*
```js
array.isStringArray([]) // true
array.isStringArray([1]) // false
```
