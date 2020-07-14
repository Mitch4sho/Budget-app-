// Boolean
var fullAge = true;
console.log(fullAge);

var age = 28;
console.log(age);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// variable mutation and type coercion 

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is married? ' + isMarried);

// variable  mutation

age = 'twenty eight';
job = 'driver';

console.log(firstName + ' is married? ' + isMarried);


// var lastName = prompt('whit is his last name');
// console.log(firstName + ' ' + lastName);


// basic javascript operators
var year, yearMark, yearJohn
year = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is the Oldest');

// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; // this is grouping ageJOhn and AgeMark variables together so the precendece first in the order of operation instead of last without the grouping 
console.log(average);