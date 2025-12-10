// Write a JavaScript function to find the largest of three numbers: a = 10, b = 25, c = 15.

// function largestNmuber(a, b, c) {
//     if (a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else {
//         return c;
//     }
// }
// console.log(`${"The largest number is"} = ${largestNmuber(10, 25, 15)} `);

//--------------/

//  Write a function to check if a number is even or odd.

// function checkevenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }
// console.log(checkevenOdd(4))

//--------------/

// Write a function to reverse a string. Example: "hello" → "olleh"

// ====

// function reverse(name) {
//     return name.split("").reverse().join("");
// }

// console.log(reverse("Farooq"));

//--------------/

//  Write a function to find the sum of all numbers in an array.

// ====

// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

//--------------/

// for loops logic bulding-------/

//  Print numbers from 1 to 10

// for (let i = 0; i <= 10; i++) {
//     console.log(i);


// }



//--------------/

// //  Print even numbers from 1 to 20

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);

// }
// //  Print Odd numbers from 1 to 20

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);

// }

//--------------/

//  Print numbers from 10 to 1 (reverse order)

// for (let i = 10; i >= 1; i--) {
//     console.log(i)

// }
// }

// -------------- /

// print a student result for javascript logic bulding

// function resultStudent(num) {
//     if (num >= 80 && num <= 100) {
//         return "Very Good A Gread";
//     } else if (num >= 60 && num <= 80) {
//         return "Good B Gread";
//     } else if (num >= 33 && num <= 60) {
//         return "Bad C Gread";
//     } else {
//         return "You Are Failed";
//     }
// }
// console.log(resultStudent(32));

// -------------- /

// calculatar Example ----- /

// function calculator(x, y, op) {
//     if (op === "+") {
//       return x + y;
//     }

//     if (op === "-") {
//       return x - y;
//     }

//     if (op === "*") {
//       return x * y;
//     }

//     if (op === "/") {
//       return x / y;
//     }

//     if (op === "max") {
//       return x > y ? x : y;
//     }

//     if (op === "min") {
//       return x < y ? x : y;
//     }
//   }

// let calculatorFn = (x, y, fn) => fn(x, y);

// const sum = (x, y) => x + y;
// const mul = (x, y) => x * y;
// const sub = (x, y) => x - y;
// const max = (x, y) => (x > y ? x : y);
// const min = (x, y) => (x < y ? x : y);

// console.log(calculatorFn(2, 4, mul));

// ----------- /

// var a =3;
// var b =5;
// var c = a+b
// console.log("The Sum is",c)

//  ----------------   /

// function minNumber(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     }
//     if (b <= a && b <= c) {
//         return b;
//     }
//     if (c <= b && c <= a) {
//         return c;
//     }
// }
// console.log(minNumber(2, 3, 1));

// function minNumber(a, b, c) {
//     let minNumber = c;
//     if (b < minNumber) {
//         minNumber = b
//     }
//     if (c < minNumber) {
//         minNumber = c
//     }
//     return minNumber ;
// }
// console.log(minNumber("farooq", -3, "faroq"))

// ------- /

// function reverString(input) {
// //     for (let i = input.length - 1; i >= 0; i--)
//         console.log(input[i]);
// // }
// reverString("SoftwareDevelopment");

// ------- /
// function studentResult(num) {
//     if (num >= 80 && num <= 100) {
//         return "A Gread";
//     }
//     else if (num >= 60 && num <= 80) {
//         return "B Gread";
//     }
//     else if (num >= 33 && num <= 60) {
//         return "C Gread";
//     }
//     else if(num <= 33) {
//         return "Failed";
//     }
// }
// console.log(studentResult(32));

// --------/

// var products = [
//     {
//         id: 101,
//         title: "Sony LED 40 inch",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ];

// function totalQuantity() {
//     let sum = 0;
//     for (var j = 0; j < products.length; i++) {
//         for (var i = 0; i < products[i].variations.length; i++) {
//             sum += products[j].variations[i].quantity
//         }
//     }
//     return sum;
// }
// console.log(`The total quantity is : ${totalQuantity()}`);

// --------/

// Q  Check if a Number is Positive, Negative, or Zero
// function checkNum(num) {
//     if (num > 0) {
//         return "Positive";
//     }else if (num < 0) {
//         return "Negative";
//     }else{
//         return "Zero";
//     }
// }
// console.log(checkNum(0));

// --------/

// Q Check  even and odd

// function evenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     }else if (num % 3 === 0) {
//         return "Odd";
//     }
// }
// console.log(evenOdd(555555));

// --------/

// Q Write a JavaScript program that asks for a user's age and determines if they are eligible to vote (age should be 18 or above).

// function voteAge(num) {
//     if (num > 18) {
//         return "Your are eligible to vote"
//     }else{
//         return "Your are not eligible to vote"
//     }
// }
// console.log(voteAge(16));

// --------/

// Q Find the Largest of Two Numbers

// function addTwoNum(a, b) {
//     if (a > b) {
//         return "Ture"
//     }else{
//         return "False"
//     }
// }
// console.log(addTwoNum(20, 120));

// --------/

// Q  Check If a Person is Eligible for a Discount

// function disEligible(age) {
//     if (age <= 60 ) {
//         return "Youe are Eligible"
//     }else{
//         return "Your are not Eligible"
//     }
// }
// console.log(disEligible(60.1));

// --------/

// Q Grade System

// function gradeSystem(input) {
//     if (input > 100) {
//         return "This is not Eligible"
//     }
//     else if(input >= 90 && input <= 100) {
//         return "A Grade";
//     }
//     else if (input >= 80 && input <= 89) {
//         return "B Grade";
//     }
//     else if (input >= 70 && input <= 79) {
//         return "C Grade";
//     }
//     else if (input >= 60 && input <= 69) {
//         return "D Grade";
//     }
//     else if (input <= 60 && input >= 33) {
//         return "Very Bad";
//     }
//     else if (input < 33) {
//         return "Failed"
//     }
// }
// console.log(gradeSystem(30))

// let a = 20;
// let b = 30;
// let c = a + b;
// console.log(`The Sum is ${c}`);


// let user = prompt("Enter Your Number");

// function name() {
//     if (user % 2 === 0) {
//         console.log(user + "" + "is Even");

//     } else {
//         console.log(user + "" + "is Odd");

//     }
// }
// name()

// Ek variable max rakho
// Loop chalao
// Har element ko compare karo
// let max = [10, 20, 50, 60, -1, 100, 500];

// let biggest = max[0];

// max.forEach(val => {
//     // console.log(val);

//     if (biggest < val) {
//         biggest = val
//     }
// })

// console.log(biggest);

// let multipl = (a, b) => a + b;
// let result = multipl(10, 20);
// console.log(result)

// function multiply(a, b) {
//     return a + b
// }
// let result = multiply(10, 20);
// console.log(result);

// let multiply = (a, b) => a + b;
// let result = multiply(10, 20);
// console.log(result);

// try {
//     console.log('abc');
//     console.log('def');
// } catch (error) {
//     console.log(error.message); 
// }

// console.log(100 / 10); // -> Infinity
// console.log(100 * "2"); // -> 200
// console.log(100 * "2");

// let sX = prompt("Enter the first number");
// let sY = prompt("Enter the second number");
// let x = Number(sX);
// let y = Number(sY);
// if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
//     console.log(x / y);
// } else {
//     console.log("incorrect arguments");
// }

// let arr = ["farooq", "umer", "ali"];
// arr.push("game");
// console.log(arr);

// let a = 20 + "10";
// let b = 20 + +"10";
// let c = 20 + -"10" + "10";
// let d = "10" - "10" + "100";
// let e = "A" - "B" + 0xA;

// let min = temp[0]

// temp.forEach(e => min = min > e ? e : min);
// console.log(min);

// let x = [10, 20, 30, 40];
// let y = [50, 60];
// x.reverse().push(y);
// console.log(x.length);

// let route = {distance: 131, elevation: 1.4};
// for (let k in route) console.log(k);

// let colors = ['red', 'green', 'blue'];
// for (let c of colors) console.log(c);

// let a = (n) => {
//     return n > 2 ? n * a(n - 1) : 2
// }
// console.log(a(6));

// function execute(todo, a, b) {
// return todo(a, b);
// }
// console.log(execute(power, 3, 2));


// shallow copy and deep copy

let orignalObj = {
    name: "farooq",
    age: 23,
    address: { city: "Karachi" },
}
// console.log(orignalObj);

let shallowCopy = { ...orignalObj }
let deepcopy = JSON.parse(JSON.stringify(orignalObj));

// console.log(shallowCopy);

// orignalObj.address.city = "lahore"
// console.log(orignalObj);
// console.log(shallowCopy);
// console.log(deepcopy);

// ==============================
// LeedCode Question and Answer //

// Reverse an Array

// let arr = [1, 2, 3, 4];
// let reverseArray = arr.reverse();
// console.log(reverseArray); // output is [4, 3, 2, 1]

// Without Method

// function reverse(arr) {
//     let num = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         num.push(arr[i])
//     }
//     return num
// }
// console.log(reverse([1, 2, 3, 4]));


// Sum of all elements in an array

// function arrSum() {
//     let sum = 0;
//     let arr = [1, 2, 3, 4];
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// arrSum()

// Check if a string is palindrome

// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length - 1;

//     while (start < end) {
//         if (str[start] !== str[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }

//     return true;
// }
// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));

// interview question

// function isAnagram(str1, str2) {
//     let one = str1.toLowerCase().split("");
//     let two = str2.toLowerCase().split("");

//     one.sort((a, b) => a.localeCompare(b));
//     two.sort((a, b) => a.localeCompare(b));

//     if (one.join("") === two.join("")) {
//         console.log(true);
//     } else {
//         console.log(false);

//     }
//     return { one, two }
// }
// isAnagram("listen", "silent")
// isAnagram("hello", "world")


// let arr = [10, "amin", "farooq", 8, 7];

// let num = [];
// let str = [];

// arr.forEach((value) => {
//     if (typeof value == "number") num.push(value);
//     else if (typeof value == "string") str.push(value)
// })
// console.log(num);
// console.log(str);

// closure function in javascript

// function createCounter() {
//     let count = 0;
//     function inner() {
//         count += 1
//         return count
//     }
//     return inner
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// String first Char Capital

// let str = "hello iam farooq"
// let result = str[0].toUpperCase() + str.slice(1)
// let change = str.slice(1);
// // console.log(result, str);
// console.log(result);



// ==============================








