// Variable Declarations

// var
// let
// const

// var can be redeclared. 
// It can also be problematic since a single varia ble
// can point to different values in different scopes.
var myGame = "Chess"; // using var
var myGame = "Football"; // re-declaring with var

// let can be reassigned but not redeclared in the same scope.
// It is block-scoped, meaning it is limited to the block in which it is defined
let myAge = 25; // using let
myAge = 30; // re-assigning with let


// const cannot be reassigned or redeclared.
// It is also block-scoped, similar to let.
const myCountry = "USA"; // using const
//myCountry = "Canada"; // Error: Cannot reassign a constant variable

// strings and how they are written
let myname = "Alice"; // string with double quotes
let Surname = 'Smith'; // string with single quotes
const fileName = `My names are ${myname} and ${Surname};` // Dynamic string using template literals

// Console log statements
console.log(fileName); // Output: My names are Alice and Smith

// camel casing
myNewVaiable = "This is a variable with camel casing";

// pascal casing 
MyNewVariable = "This is a variable with pascal casing";

// script.js - My first external JavaScript file

// Displaying different types of information
console.log("=== Welcome to JavaScript ===");
console.log("Today's date information:");
console.log("Year: 2025");
console.log("Month: July");
console.log("Day: 16");

// Performing calculations
console.log("=== Math Examples ===");
console.log("Adding numbers: 15 + 27 =", 15 + 27);
console.log("Multiplying: 8 * 7 =", 8 * 7);
console.log("Dividing: 100 / 4 =", 100 / 4);

// Working with text
console.log("=== Text Examples ===");
console.log("Combining words: " + "Java" + "Script");
console.log("My name is: " + "Student"); // They'll change this to their name
console.log("==========End==========")

let wholeNumber = 42;
let decimalNumber = 3.14159;
let negativeNumber = -17;

// JavaScript can perform math operations
let sum = wholeNumber + decimalNumber;
let product = wholeNumber * 2;
let Percentage = (wholeNumber / 100) * 85;

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Percentage:", Percentage);
console.log("approximate the value of percentage:", percentage.toFixed(2)); // Fixed to 2 decimal places
console.log("approximate value of pi:", Math.PI);

myNumbers = [1, 2, 3, 4, 5];

const lengthOfNumbers = myNumbers.length

console.log("Length of myNumbers array:", lengthOfNumbers);

let divideByZero = 10 / 0; // Results in Infinity
let impossibleMath = "hello" * 5; // Results in NaN

console.log("Division by zero:", divideByZero);
console.log("Text times number:", impossibleMath);

let irstName = "Sarah";
let astName = "Johnson";
let ge = 25;

// Old way of combining strings
let introduction1 = "Hi, I'm " + irstName + " " + astName + " and I'm " + ge + " years old.";

// New way with template literals
let introduction2 = `Hi, I'm ${irstName} ${astName} and I'm ${ge} years old.`;

console.log(introduction1);
console.log(introduction2);

let message = "JavaScript is Amazing";

console.log("Original:", message);
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Length:", message.length);
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);

let isLoggedIn = true;
let hasCompletedHomework = false;
let isWeekend = true;

console.log("User logged in:", isLoggedIn);
console.log("Homework done:", hasCompletedHomework);
console.log("Is it weekend:", isWeekend);


//Class Exercise
let myFirstName = "Chibuikem";
let myLastName = "Essell";
let dateOfBirth = "08/10/2010";
let Myage = "14 years old"

console.log("My First Name:", myFirstName)
console.log("My Last Name:", myLastName)
console.log("Date Of Birth:", dateOfBirth)
console.log("My Age:", Myage)
console.log("My Full Name:", myFirstName + " " + myLastName);


//Assignment
console.log("=== Assignment ===");
var numberOfAssignments = 4;
var totalPoints = "sum of all assignment grades"; // This should be a number, e.g., 100
var isPassing = "pass if average grade is >=70";

console.log("Individual assignment grades.");
console.log("Total Points:", totalPoints);
console.log("Average grade:", totalPoints / numberOfAssignments); // 25
console.log("To pass, average grade must be >= 70. Current average is:", totalPoints / numberOfAssignments >= 70 ?
     "pass" : "fail");
console.log("=== End of Assignment ===");

// Mathematical addition
let MathResult = 15 + 27;
console.log("Math addition:", mathResult); // 42

// String concatenation
let FirstName = "Sarah";
let LastName = "Johnson";
let FullName = FirstName + " " + LastName;
console.log("Name combination:", FullName); // "Sarah Johnson"`

// Mixed types - JavaScript converts numbers to strings
let Age = 25;
let Introduction = "I am " + Age + " years old";
console.log("Mixed types:", Introduction); // "I am 25 years old"

// Mathematical addition
let mathResult = 15 + 27;
console.log("Math addition:", MathResult); // 42

// String concatenation
let firstName = "Sarah";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log("Name combination:", fullName); // "Sarah Johnson"

// Mixed types - JavaScript converts numbers to strings
let age = 25;
let introduction = "I am " + age + " years old";
console.log("Mixed types:", introduction); // "I am 25 years old"



console.log("=================End of Addition=========")



let totalStudents = 150;
let classSize = 30;
let numberOfClasses = totalStudents / classSize;

console.log("Students per class:", classSize);
console.log("Total students:", totalStudents);
console.log("Number of classes needed:", numberOfClasses);

// Calculating percentages
let correctAnswers = 18;
let totalQuestions = 20;
let percentage = (correctAnswers / totalQuestions) * 100;
console.log("Test score:", percentage + "%");

// Working with money
let itemPrice = 24.99;
let taxRate = 0.08;
let taxAmount = itemPrice * taxRate;
let totalCost = itemPrice + taxAmount;

console.log("Item price: " + "$"  + itemPrice);
console.log("Tax Amount: " + "$" + taxAmount);
console.log("Tax amount: $" + taxAmount.toFixed(2));
console.log("Total cost: $" + totalCost.toFixed(2));



// Checking if numbers are even or odd
let number1 = 17;
let number2 = 18;

console.log("17 divided by 2 remainder:", number1 % 2); // 1 (odd)
console.log("18 divided by 2 remainder:", number2 % 2); // 0 (even)

// Practical applications
let totalMinutes = 147;
let hours = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;

console.log(`${totalMinutes} minutes = ${hours} hours and ${remainingMinutes} minutes`);

// Cycling through options
let currentPage = 1;
let itemsPerPage = 5;
let totalItems = 23;
let lastPageItems = totalItems % itemsPerPage;

console.log("Items on the last page:", lastPageItems);

// Without parentheses
let result1 = 10 + 5 * 2;
console.log("10 + 5 * 2 =", result1); // 20 (not 30!)

// With parentheses to change order
let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", result2); // 30

// Complex calculation example
let principal = 1000;
let rate = 0.05;
let time = 2;
let compoundInterest = principal * (1 + rate) ** time - principal;

console.log("Compound interest earned:", compoundInterest.toFixed(2));

let studentName = "Alex Rodriguez";
let currentGrade = 85;
let maxGrade = 100;
let myPercentage = (currentGrade / maxGrade) * 100;

// Old way - hard to read and error-prone
let oldReport = "Student " + studentName + " scored " + currentGrade + " out of " + maxGrade + " (" + myPercentage + "%)";

// Modern way - clear and powerful
let modernReport = Student `${studentName} scored ${currentGrade} out of ${maxGrade} (${myPercentage}`%")";

console.log("Old way:", oldReport);
console.log("Modern way:", modernReport);

// Multi-line strings with template literals
let emailTemplate = `
Dear ${studentName},

Your current grade is ${currentGrade}/${maxGrade} (${percentage}%).

${percentage >= 70 ? "Congratulations! You're passing." : "Please see me for extra help."}

Best regards,
Professor Smith
`;

console.log(emailTemplate);

let userInput = "  JavaScript Programming  ";

// Cleaning up user input
let cleaned = userInput.trim(); // Removes spaces from beginning and end
console.log("Original:", "${userInput}");
console.log("Cleaned:", "${cleaned}");

// Changing case
let courseName = "javascript fundamentals";
let properCase = courseName.charAt(0).toUpperCase() + courseName.slice(1);
console.log("Proper case:", properCase);

let result = schoolName.slice(startindex, endIndex) 
console.log("sliced string:", result); // "uni"

// Finding and extracting information
let email = "student@university.edu";
let atPosition = email.indexOf("@");
let username = email.slice(0, atPosition);
let domain = email.slice(atPosition + 1);

console.log("Email parts:");
console.log("Username:", username);
console.log("Domain:", domain);

// Checking if strings contain specific text
let searchTerm = "script";
let hasJavaScript = cleaned.toLowerCase().includes(searchTerm);
console.log(`Contains "${searchTerm}":, hasJavaScript`);