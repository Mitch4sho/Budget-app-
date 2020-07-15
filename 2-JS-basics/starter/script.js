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

//  Coding challenge #1

// storing marks height and mass 
var markMass, markHeight, markBmi;

markMass = 78;
markHeight = 1.69;
markBmi = markMass / (markHeight * markHeight);


// storing johns height and mass 
var johnMass, johnHeight, johnBmi;

johnMass = 92;
johnHeight = 1.95;
johnBmi = johnMass / (johnHeight * johnHeight);


console.log(johnBmi, markBmi);


var markVsJohn = markBmi > johnBmi;
console.log("is mark\'s BMI higher than john\'s? " + markVsJohn);

//  If/ else statements
var firstName = 'john';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is  single')
}
// using a boolean 
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is  single')
}


//  making the coding challenge better 
var johnMass, johnHeight, johnBmi;

johnMass = 92;
johnHeight = 1.95;
johnBmi = johnMass / (johnHeight * johnHeight);


console.log(johnBmi, markBmi);
if (markBmi > johnBmi) {
    console.log("Marks BMI is way Higher")
} else
    console.log("John your getting fat buddy")

// Boolean Logic 
firstName = 'John';
var age = 30;

if (age <= 12) {
    console.log(firstName + ' is a boy.')
} else if (age <= 19) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age <= 25) {
    console.log(firstName + ' is a young man')
} else {
    console.log(firstName + ' is a man')
}

// The Ternary Operator and Switch Statements

var firstName = 'John';
var age = 16;

// Ternary Operator 
age >= 18 ? console.log(firstName + ' drinks beer') :
    console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(firstName + ' drinks ' + drink);

// switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives drunk people.');
        break;
    case 'designer':
        console.log(firstName + ' design stuff');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// using switch statements instead of if/else

// firstName = 'John';
// var age = 30;

// if (age <= 12) {
//     console.log(firstName + ' is a boy.')
// } else if (age <= 19) {
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age <= 25) {
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man')
// }

lastName = 'Jimmy';
var age = 13;

switch (true) {
    case age <= 12:
        console.log(lastName + ' is a boy');
        break;
    case age <= 19:
        console.log(lastName + ' is a teen');
        break;
    case age <= 25:
        console.log(lastName + ' is a young man');
        break;
    default:
        console.log(lastName + ' is a man');
}