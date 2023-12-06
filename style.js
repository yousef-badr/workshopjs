// Part 1 Q1
// var userName = prompt("Enter your username :");
// var Password = prompt("Enter your password :");
// if(userName == "admin" && Password == "421$$"){
//     alert("Welcome login success");
// }else if (userName != "admin" ){
//     alert("Username is wrong");
// }else if(Password != "421$$"){
//     alert("password is wrong");
// }

// Q2
// var firstNumber = Number(prompt("Enter First Number :"));
// var operation = prompt("Enter an operation");
// var secondNumber = Number(prompt("Enter Second Number :"));
// switch(operation){
//     case "sum":
//         alert("Result = " + (firstNumber + secondNumber));
//         break;
//     case "subtract":
//         alert("Result = " + (firstNumber - secondNumber));
//         break;
//     case "multi":
//         alert("Result = " + (firstNumber * secondNumber));
//         break;
//     case "division":
//         alert("Result = " + (firstNumber / secondNumber));
//         break;
//     case "modulus":
//         alert("Result = " + (firstNumber % secondNumber));
//         break;
//     default:
//         alert("Operator in undefined");
// }

// part 2 Q1
// var x = Number(prompt("How many number you wants to get the sum"));
// var arr = [];
// for(let i = 0 ; i < x ; i++){
//     let y = Number(prompt("Enter value :"));
//     arr.push(y);
// }
// const sum = arr.reduce((a, b) => a + b, 0);
// const average = (sum / arr.length) || 0;
// alert("Sum of entered values " + sum + " and the average " + average);

// Q2
// const contacts = [];
// function addContact() {
//     var name = prompt("Enter the name of the contact:");
//     var phoneNumber = Number(prompt("Enter the phone number:"));
//     const contact = {
//         name: name,
//         phoneNumber: phoneNumber
//     };
//     contacts.push(contact);
//     alert(`Contact ${name} added successfully.`);
// }
// function searchContact() {
//     var search = prompt("Enter the name or phone number to search for:");
//     var searchResult = contacts.find(contact => 
//         contact.name() === search() || 
//         contact.phoneNumber === search
//     );
//     if (searchResult) {
//         alert("Contact found:");
//         alert(searchResult);
//     } else {
//         alert("Contact not found.");
//     }
// }
// while (true) {
//     var operation = prompt("Enter operation (add / search ):");
//     switch (operation.toLowerCase()) {
//         case "add":
//             addContact();
//             break;
//         case "search":
//             searchContact();
//             break;
//         default:
//             alert("Invalid operation. Please enter 'add', 'search', or 'exit'.");
//     }
//     const continuePrompt = prompt("Do you want to perform another operation? (yes / no)");
//     if (continuePrompt === "no") {
//         alert("Exiting phone book app.");
//         break;
//     }
// }

//bouns 
// function circle (r){
//     return Math.PI * r * r;
// }
// function triangle (b,h){
//     return 0.5 * b * h;
// }
// function square (a){
//     return a*a;
// }
// function rectangle(l,w){
//     return l*w;
// }
// function parallelogram(b,h){
//     return b*h;
// }
// function Trapezium (a,b,h){
//     return 0.5 * ( a + b ) * h;
// }
// function Ellipse(a,b){
//     return Math.PI * a * b;
// }
// var shape = prompt("Enter shape name :");
// switch (shape){
//     case "circle" :
//         var raduis = parseFloat(prompt("Enter ther raduis"));
//         var area = circle(raduis);
//         alert("Area of circle = " +  area);
//         break;
//     case "triangle" :
//         var base = parseFloat(prompt("Enter ther base"));
//         var height = parseFloat(prompt("Enter ther height"));
//         var area = triangle(base,height);
//         alert("Area of triangle = " +  area);
//         break;
//     case "square" :
//         var side = parseFloat(prompt("Enter ther length of side"));
//         var area = square(side);
//         alert("Area of square = " +  area);
//         break;
//     case "rectangle" :
//         var length = parseFloat(prompt("Enter ther length"));
//         var width = parseFloat(prompt("Enter ther width"));
//         var area = rectangle(length,width);
//         alert("Area of rectangle = " +  area);
//         break;
//     case "parallelogram" :
//         var base = parseFloat(prompt("Enter ther base"));
//         var height = parseFloat(prompt("Enter ther height"));
//         var area = parallelogram(base,height);
//         alert("Area of parallelogram = " +  area);
//         break;
//     case "Trapezium" :
//         var pa1 = parseFloat(prompt("Enter ther length of parallel sides"));
//         var pa2 = parseFloat(prompt("Enter ther length of parallel sides"));
//         var height = parseFloat(prompt("Enter ther height"));
//         var area = Trapezium(pa1,pa2,height);
//         alert("Area of Trapezium = " +  area);
//         break;
//     case "Ellipse" :
//         var minor = parseFloat(prompt("Enter ther minor"));
//         var major = parseFloat(prompt("Enter ther major"));
//         var area = Ellipse(minor,major);
//         alert("Area of Ellipse = " +  area);
//         break;
//     default:
//         alert("Missed data");
// }

//part3 Q1
//1
// const color = {
//     first : "red",
//     second : "yellow"
// }
// const number = {
//     first : 1 ,
//     third : 3
// } 
// const Result = Object.assign(color,number);
// console.log(Result); // Output: { first : 1 , second : yellow , third : 3}
//copies all key and value from one or more source objects to a target object

//2
// const person = {
//     isHuman: false,
//   };
// const human = Object.create(person);
// human.name = 'omar'; 
// human.isHuman = true;
// console.log(human); // Output: {  name : omar , isHuman : true }
//static method creates a new object, using an existing object as the prototype of the newly created object.

//3
// const object = {
//     a: 'string',
//     b: 50,
//   };
//   for (const [key, value] of Object.entries(object)) {
//     console.log(`${key}: ${value}`);
//   } // Output: a : string b : 50
//static method returns an array of a given object's own enumerable string-keyed property key-value pairs

//4
// const obj = {
//     value: 50,
//   };
//   Object.freeze(obj);
//   obj.value = 33;
//   console.log(obj.value); // Output: 50
//makes existing properties non-writable and non-configurable

//5
// const object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     value: 10,
//   },
//   property2: {},
// });
// console.log(object1.property1); // Output: 10
//static method defines new or modifies existing properties directly on an object, returning the object.

//6
// const car = { make: 'Toyota', model: 'Camry', year: 2022 };
// const keys = Object.keys(car);
// console.log(keys); // Output: ['make', 'model', 'year']
// Returns an array of a given object's own enumerable property names.

//7
// const car = { make: 'Toyota', model: 'Camry', year: 2022 };
// const values = Object.values(car);
// console.log(values); // Output: ['Toyota', 'Camry', 2022]
// Returns an array of a given object's own enumerable property values.

//8
// const sealedObj = Object.seal({ prop: 123 });
// sealedObj.prop = 456; 
// console.log(sealedObj.prop); // Output: 456
// preventing new properties from being added and marking all existing properties as non-configurable.

//9
// const car = { make: 'Toyota', model: 'Camry' };
// console.log(car.hasOwnProperty('make')); // Output: true
//Returns a boolean indicating whether the object has the specified property as its own (not inherited) property.

//10
// console.log(Object.is(5, 5)); // Output: true
// console.log(Object.is(5, '5')); // Output: false
// Determines whether two values are the same value.

//Q2

//1 
// const fruits = ['apple', 'banana'];
// const length = fruits.push('orange', 'grape');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
// console.log(length); // Output: 4
// Adds one or more elements to the end of an array and returns the new length.

// 2
// const fruits = ['banana', 'orange'];
// const length = fruits.unshift('apple', 'grape');
// console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']
// console.log(length); // Output: 4
//Adds one or more elements to the beginning of an array and returns the new length

// 3
// const fruits = ['apple', 'banana', 'orange'];
// const removedElement = fruits.pop();
// console.log(fruits); // Output: ['apple', 'banana']
// console.log(removedElement); // Output: 'orange'
// Removes the last element from an array and returns that element

//4
// const fruits = ['apple', 'banana', 'orange'];
// const removedElement = fruits.shift();
// console.log(fruits); // Output: ['banana', 'orange']
// console.log(removedElement); // Output: 'apple'
// Removes the first element from an array and returns that element.

//5
// const fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'grape', 'kiwi');
// console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']
//Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//6
// const numbers = [1, 2, 3, 4, 5];
// const sliced = numbers.slice(1, 4);
// console.log(sliced); // Output: [2, 3, 4]
// Returns a shallow copy of a portion of an array into a new array object.

//7
// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(30);
// console.log(index); // Output: 2
// Returns the first index at which a given element is present in the array, or -1 if it is not found.

//8
// const fruits = ['apple', 'banana', 'orange'];
// const joinedString = fruits.join(', ');
// console.log(joinedString); // Output: 'apple, banana, orange'
// Joins all elements of an array into a string, separated by the specified separator.

//9
// const numbers = [10, 20, 30, 40, 50];
// const includes = numbers.includes(30);
// console.log(includes); // Output: true
// Determines whether an array includes a certain element, returning true or false

//10
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]
// Reverses the elements of an array in place


// a closure is created when a function is defined within another function,
// and the inner function has access to the outer function's variables and parameters even after the outer function has finished executing.
// function outerFunction(outerVariable) {
//     console.log("Outer variable : " + outerVariable);
//     function innerFunction(innerVariable) {
//       console.log("Inner variable : " + innerVariable);
//       console.log("Outer variable accessible in the inner function: "+ outerVariable);
//     }
//     innerFunction('Inner Value');
//   }
//   outerFunction('Outer Value');
