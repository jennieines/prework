const firstName = "Jennie";
const middleName = "Lynn";
const lastName = "Ines";

const firstInitial = firstName[0];
const middleInitial = middleName[0];
const lastInitial = lastName[0];

const monogram = firstInitial + middleInitial + lastInitial;
console.log(`${firstName}'s monogram is ${monogram}`)

//Part.2
const fullString = "SOFTWARE DEV";

const vanityLetter1 = fullString[0]//your code here
const vanityLetter2 = fullString[2]//your code here
const vanityLetter3 = fullString[3]; //use this as an example
const vanityLetter4 = fullString[4]//your code here
const vanityLetter5 = fullString[6]//your code here
const vanityLetter6 = fullString[9]//your code here
const vanityLetter7 = fullString[11]//your code here

const vanityPlate = vanityLetter1 + vanityLetter2 + vanityLetter3 + vanityLetter4 + vanityLetter5 + vanityLetter6 + vanityLetter7//your code here

console.log(`The new vanity plate is ${vanityPlate}`);