//Strings
const name1 = 'Zeeshan';
const name2 = new String('Zeeshan');

//We can add properties to name2
// name2.foo = 'bar';

// console.log(name2);

// console.log(typeof name2);
if (name2 === 'Zeeshan') {
  console.log('YES');
} else {
  console.log('NO');
}

//Numbers
const num1 = 2;
const num2 = new Number(2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Objects
const zee1 = { name: 'zee1' };
const zee2 = new Object({ name: 'zee2' });
console.log(zee2);

//Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(arr2);

//Regular expressions
