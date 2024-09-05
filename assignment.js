//----------------------- JS PART1 SOLUTION -----------------------
// --------- Q1 ----------
// alert("Welcome to the webpage!")

// ----------- Q2 ----------
// let userName = "AHMAD MOEED"; 
// let greetingMessage = "A0A, " + userName + " Welcome"; 
// alert(greetingMessage);

// ---------- Q3 ----------
// let number1 = 10;
// let number2 = 10;
// let sum = number1 + number2;
// alert( sum )

// ---------- Q4 ----------
// let myName = "Ahmad Moeed";
// let myAge_new = 20;
// alert(myName )
// alert(myAge_new)

// var 1Name = 1;
// var first-address = "Smit";

// ---------- Q5 ----------
// let num1 = prompt("please inter number one") 
// let num2 =  prompt("please inter number Two") 
// let operation = prompt("enter opration (+,-,%,/,*)")

// let result

// if (operation === '+') {
//     result = num1 + num2
// }
//  else if (operation === '-') {
//     result = num1 - num2
// }
//  else if (operation === '*') {
//     result = num1 * num2
// }
//  else if (operation === '/') {
//     if (num2 !== 0) {
//         result = num1 / num2
//     } else {
//         result = "sorry"
//     }
// }
//  else {
//     result = " enter +, -, *, or /"
// }

// alert( result)

// ---------- Q6 ----------
// let num1 = 15  
// let num2 = 5   
// let remainder = num1 % num2
// alert( remainder )

// let incrementValue = 5
// incrementValue++
// alert( incrementValue )

// var decrementValue = 5
// decrementValue--
// alert( decrementValue )

// ---------- Q7 ----------
// let result = (5 + 2) * 3 - 4 / 2
// 7 * 3 - 2 (21 - 2) (19)
// alert( result )

// ---------- Q8 ----------
// let word1 = "Hello "
// let word2 = "Ahmad Moeed "
// let word3 = "Welcome"
// let combination= word1 + word2 + word3
// alert(combination)

// ---------- Q9 ----------
// let yourName = prompt("Please enter your name:")
// var yourAge = prompt("Please enter your age:")
// var greetingMessage = "AOA " + yourName + " You are going to be webDeveloper insha allah"
// alert(greetingMessage)

// ---------- Q10 ----------
// let userInput = prompt("Please enter a number:")
// let number = userInput
// let result
// if (number % 2 <= 0) {
//     result =  number + " is positive."
// }
//  else if (number % 2 >= 0 ) {
//     result =  number + " is negative."
// } 
//  else {
//     result = "Invalid Error."
// }
// alert(result)

// ---------- Q11 ----------
// let num1 = prompt("Enter the first number:")
// let num2 = prompt("Enter the second number:")
// let comparisonResult = ""
// if (num1 > num2) {
//     comparisonResult = num1 + " > " + num2 + ".";
// } 
// else if (num1 < num2) {
//     comparisonResult = num1 + " < " + num2 + ".";
// }
//  else if (num1 === num2) {
//     comparisonResult = num1 + " = " + num2 + ".";
// }
//  else {
//     comparisonResult = "Invalid comparison.";
// }
// alert(comparisonResult)

// ---------- Q12 ----------
// let percentage =prompt("Enter your exam percentage")

// if (percentage >= 90 && percentage <= 100) {
//     grade = "A+";
// } 
// else if (percentage >= 80 && percentage < 90) {
//     grade = "A";
// } 
// else if (percentage >= 70 && percentage < 80) {
//     grade = "B";
// } 
// else if (percentage >= 60 && percentage < 70) {
//     grade = "C";
// } 
// else if (percentage >= 50 && percentage < 60) {
//     grade = "D";
// } 
// else if (percentage >= 40 && percentage < 50) {
//     grade = "F";
// } 
// else {
//     grade = "Error";
// }
// alert(grade);

// ---------- Q13 ----------
// let age =prompt("Please enter your age:")
// let student = prompt("Are you a student")
// let message

// if (age <= 10 && student) {
//     message = "You are a school going child"
// } 
// else if (age <= 15 && student) {
//     message = "You are college going student"
// }
//  else if (age <= 18 && student) {
//     message = "You have responsibilities to perform"
// }
//  else if (age >= 19 && student) {
//     message = "You play important role in house "
// } 
// else {
//     message = "Invalid input."
// }

// alert(message)

// ---------- Q14 ----------
// let userName = prompt("Enter your username:")
// let passWord = prompt("Enter your password:")

// if (userName == "ahmad") {
//     if (passWord == "abc") {
//         alert("both are correct")
//     }
//      else {
//         alert("incorrect pass")
//         }
// }
//  else {
//     alert("Error try again")
// }

// ---------- Q15 ----------
// let fruits = ["Apple", "Banana", "Cherry", "Date", "anar"];
// for (let i = 0; i < fruits.length; i++) 
//         alert(fruits[i])

// ---------- Q16 ----------
// let fruits = ["Apple", "Banana", "grapes", "mango", "anar"]
// fruits.unshift("dates")  
// fruits.push("orange")        
// fruits.shift() 
// fruits.pop()
// console.log( fruits)
// alert(fruits)

// ---------- Q17 ----------
// nahi ata
// ---------- Q18 ----------
// for (var i = 1; i <= 10; i++)
//     console.log(i)


//---------------------------------------------------------------
//-------------------- JS PART2 SOLUTION --------------------

// ---------- Q1 ----------
// let num1 = prompt("Enter the first number")
// let num2 = prompt("Enter the second number")
// let operation = prompt("Enter the operation")
// let result
// if (operation === "+") {
//     result = num1 + num2
// }
//  else if (operation === "-") {
//     result = num1 - num2
// }
//  else if (operation === "*") {
//     result = num1 * num2
// }
//  else if (operation === "/") {
//         result = num1 / num2
//     }
//  else {
//     result = "Error"
// }

// alert( result)

// ---------- Q2 ----------
// let name = prompt("What is your name")
// let color = prompt("What is your favorite color")
// let message = "Hello " + name + ", I see your favorite color is " + color + "!"
// alert(message)

// ---------- Q3 ----------
// let number = prompt("Enter a number")
// if (number % 2 === 0) {
//     alert(number + " is an even number")
// }
//  else {
//     alert(number + " is an odd number")
// }

// ---------- Q4 ----------
// let fruits = ["Apple", "Banana", "Mango", "Orange", "pineapple"]
// fruits.unshift("dates") 
// fruits.push("Grapes")      
// fruits.shift() 
// fruits.pop()
// console.log( fruits)

// ---------- Q5 ----------
// let correctAnswers = 0;  var answer1 = prompt("What is 2+2")
// if (answer1 === "4") {
//     correctAnswers++
// }
// let answer2 = prompt("What is the capital of France")
// if (answer2 === "paris") {
//     correctAnswers++
// }
// let answer3 = prompt("Which planet is known as the Red Planet")
// if (answer3 === "mars") {
//     correctAnswers++
// }
// alert("You got " + correctAnswers + " out of 3 correct")

// ---------- Q6 ----------
// let score = prompt("Enter your score")
// let grade
// if (score >= 90 && score <= 100) {
//     grade = "A+"
// }
//  else if (score >= 80 && score < 90) {
//     grade = "A"
// } 
// else if (score >= 70 && score < 80) {
//     grade = "B"
// }
//  else if (score >= 60 && score < 70) {
//     grade = "C"
// } 
// else if (score >= 50 && score < 60) {
//     grade = "D"
// } 
// else if (score >= 40 && score < 50) {
//     grade = "E"
// } 
// else if (score >= 30 && score < 40) {
//     grade = "F"
// } 
// else {
//     grade = " Please enter a score between 0 and 100"
// }
// alert("Your grade is " + grade )

// ---------- Q7 ----------
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// alert("Countdown complete")

// ---------- Q8 ----------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.shift()
// numbers.pop()
// numbers.unshift(0)
// numbers.push(11)

// let middlePortion = numbers.slice(2, 7)
// console.log( numbers)
// console.log( middlePortion)

