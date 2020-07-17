
# array-ops
A comprehensive library for javascript array operations and manipulation.

## Installation
	npm install array-ops

## Initilization
	var array_ops = require('array-ops')
	var ao = new array_ops()
## Example

    ao.isArray([1,2,3])  // true
	
## API Reference

 1. [validation](#validation)

### **validation**

ao.**isArray(array)** 
*Returns true if the passed value is an array.*

	    ao.isArray([1,2,3])              // true
	    ao.isArray(1)                    // false
---  
ao.**isNumericArray(array)** 
*Returns true if all the elements of the array are numbers (Intergers or Decimal).*

	    ao.isNumericArray([1,2,3])       // true
	    ao.isNumericArray([1,2,4.6])     // true
	    ao.isNumericArray([1,'r',8)      // false
---
ao.**isIntegerArray(array)** 
*Returns true if all the elements of the array are integers.*

	    ao.isIntegerArray([1,2,3])       // true
	    ao.isIntegerArray([1,2,4.6])     // false
---
ao.**isDecimalArray(array)** 
*Returns true if all the elements of the array are decimal.*

	    ao.isDecimalArray([24.3,82.6])   // true
	    ao.isDecimalArray([1,2,3])       // false
---
ao.**isStringArray(array)** 
*Returns true if all the elements of the array are strings.*

	    ao.isStringArray(['foo','bar'])  // true
	    ao.isStringArray(['1','2','3'])  // true
	    ao.isStringArray([1,34])         // false
---
