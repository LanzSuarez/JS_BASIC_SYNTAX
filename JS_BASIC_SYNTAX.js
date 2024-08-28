// JS BASIC SYNTAX

// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let name = "Lanz"; // 'let' is used for variables that can change
let age = 20;
let hasHobbies = true;

const nameThatCannotChange = "Lanz"; // 'const' is used for values that should not change
// The value of 'nameThatCannotChange' cannot be reassigned

// 2. CONDITIONAL STATEMENTS

if (hasHobbies) { // if hasHobbies is true 
    console.log("I have hobbies");
}

if (age > 20) {
    console.log("I'm older than 20");
} else if (age < 20) {
    console.log("I'm younger than 20");
} else {
    console.log("I'm exactly 20");
}

switch (name) {
    case "Lanz":
        console.log("My name is Lanz");
        break; // 'break' is used to exit the switch statement
    default: // 'default' is used when none of the cases are met
        console.log("My name is not Lanz");
}

// 3. PRINTING TO THE CONSOLE

console.log(name);
console.log(age);
console.log(hasHobbies);
console.log(nameThatCannotChange);

console.log(`My name is ${name} and my age is ${age} years old.`); // Output: "My name is Lanz and my age is 20 years old."
// `${name}` is an example of string interpolation (template literals)

// 4. ARRAYS DECLARATION

let hobbies = ["Sports", "Cooking"];

// printing the array
console.log(hobbies); // Output: ["Sports", "Cooking"]
// accessing an element in the array
console.log(hobbies[0]); // Output: Sports

for (let hobby of hobbies) {
    console.log(hobby);
}

// adding an element to the array
hobbies.push("Programming");

console.log(hobbies); // Output: ["Sports", "Cooking", "Programming"]

// * MAPPING AN ARRAY
// mapping is used to loop through an array and modify the elements
hobbies = hobbies.map((hobby) => hobby + " is fun");

console.log(hobbies); // Output: ["Sports is fun", "Cooking is fun", "Programming is fun"]

// 5. OBJECT DECLARATION

let person = {
    name: "Lanz", // this is a property/field
    age: 20, // this is a property/field
    hasHobbies: true, // this is a property/field
    greet() { // this is a method/function of the object
        console.log("Hello, I am " + this.name);
    }
};

// accessing object properties 
console.log(person.name); // Output: Lanz
console.log(person.age); // Output: 20
console.log(person.hasHobbies); // Output: true

// calling the object's method
person.greet(); // Output: Hello, I am Lanz

// 6. FUNCTION DECLARATION

function myFunction() {
    console.log("Hello from myFunction");
}

// calling the function
myFunction(); // Output: Hello from myFunction

const myArrowFunction = () => {
    return "Hello from myArrowFunction"; // RETURN is used to return a value from a function
    // 'return' stops the function from executing further
};

// calling the arrow function
console.log(myArrowFunction()); // Output: Hello from myArrowFunction

// 7. ADDING PARAMETERS/ARGUMENTS TO A FUNCTION

function describeStudent(name, age) { // this is a function that takes in two parameters/arguments
    console.log("This person is " + name + " and is " + age + " years old");
}

describeStudent(name, age); // Output: This person is Lanz and is 20 years old

// 8. ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
const describeStudentArrow = (name, age) => {
    return `This person is ${name} and is ${age} years old`;
};

console.log(describeStudentArrow(name, age)); // Output: This person is Lanz and is 20 years old





