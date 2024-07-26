// let var_one = "Amaging";
// console.log(var_one, "This is the result");

// ======
// Codding Challange 1
// ======

// For Test Data 1
// let mark_weight = 78;
// let john_weight = 92;

// let mark_height = 1.69;
// let john_height = 1.95;

// let mark_bmi = mark_weight / (mark_height * mark_height);
// console.log("Mark BMI is", mark_bmi);
// let john_bmi = john_weight / (john_height * john_height);
// console.log("John BMI is", john_bmi);

// var bmi_comparison = mark_bmi > john_bmi;
// console.log("Comapadison Result", bmi_comparison);

// Tamplate Litarals

// const firtsName = "Aman";
// const job = "Web Developer";
// const dob = 1997;
// const current_year = 2024;
// console.log(
//   "I'm " + firtsName + ", a " + (current_year - dob) + " years old " + job + "!"
// );
// // Now use literals
// console.log(`I'm ${firtsName} a ${current_year - dob} years old ${job}!`);
// // A fantastic use of Tamplate literal is line breake
// console.log(`Hello\n\Aman`);
// // Now this
// console.log(`Heloo
//     Aman`);

// Type converstion and coercion
// TypeConversion
// const inputYear = "1996";
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number(inputYear)+18)
// // Type Coercion
// console.log(180-'30')
// Number type subtrac with string but can't sum
// When String and Subtraction ( - ) operation occurs then strings comes to a Number but when they try to add ( + ) then strings remains string the summation comes to a concatination

// Truthy values and false values
// In JS there are 5 values are false values exept these five all are truthy vlaues

// Those false values are
// 0,undefined,(),Nan
// For Example
// let chcekTrueFlase = 0;
// console.log(Boolean(chcekTrueFlase));
// console.log(Boolean());
// console.log(Boolean({}));
// console.log(Boolean("Aman"));
// // Now lets have some condition
// let height;
// if (height) {
//   console.log("Yaa!! Height is Defined");
// } else {
//   console.log("Height is undefiend  :(");
// }
// Into the if statement there in first brackter() trying to convert value to a boolean and booleans always has two types True and false
// The condition if(height) menas that height is true or false
// let age = 18;
// if (age === 18) console.log("You are an adult now :D");
// The operator == and === are two different operators for diffrent tasks the == is luss equal and === is strict equal the === works for strick check it means it doesn't play type coercion but on the otherhand the == performs the type coercion.
// So in === it checks values with their type
// In == it try to type coercion and then check the values

// Switch Case Statements
// let day = "Friday";
// switch (day) {
//   case "Saturday":
//     console.log("Today is ", day);
//     break;
//   case "Sunday":
//     console.log("Today is ", day);
//     break;
//   case "Monday":
//     console.log("Today is ", day);
//     break;
//   case "Tuesday":
//     console.log("Today is ", day);
//     break;
//   case "Wednsday":
//     console.log("Today is ", day);
//     break;
//   case "Thursday":
//     console.log("Today is ", day);
//     break;
//   case "Friday":
//     console.log("Today is ", day);
//   default:
//     console.log("This is", day, "not among the day");
//     break;
// }

// let day = "Wednsday";
// if (day === "Sunday") {
//   console.log("Today is ", day);
// } else if (day === "Monday") {
//   console.log("Today is ", day);
// } else if (day === "Tuesday" || day === "Wednesday") {
//   console.log("Today is ", day);
// } else {
//   console.log("Not among the days");
// }

// Ternary operatoe syntaxt
// let age =
//   25 >= 18
//     ? console.log("I would like to drink wine")
//     : console.log("I would like to drink water");

// Codding Challange
// let bill = 40;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// total_bill = bill + tip;
// console.log(
//   "The bill was ",
//   bill,
//   " The tip was ",
//   tip,
//   " And the total  billl was ",
//   total_bill
// );
// console.log(
//   `The bill was ${bill} ,The tipp was ${tip} and the Total bill was ${total_bill}`
// );

