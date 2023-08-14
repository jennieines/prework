//Part.1
//const firstName = "Jane";
//const lastName = "Austen";
//const fullName = firstName + " " + lastName;
//console.log("The full name is", fullName);

//Part.2
const patientName = "John Doe";
let apptTime = "1:30pm";
let apptDay = "Tuesday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);


//Part.3
const firstName = "Jennie"; //add your first name
const lastName = "Ines"; //add your last name
const fullNameConcat = firstName + " " + lastName; //create your full name from the first two variables using concatenation 
const fullNameInterp = `${firstName + " " + lastName}`; //create your full name from the first two variables using interpolation

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = "27"; //add your age
let faveFood = "Surf and Turf"; //add your favorite food
let faveColor = "Purple"; //add your favorite color
let miniBio = `Hi! My name is ${fullNameInterp}. I am ${myAge} years old. My favorite food is ${faveFood} and my favorite color is ${faveColor}.`; //use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);