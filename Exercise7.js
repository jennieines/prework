const a = 4;
const b = 3; 
let c = 2*a + b;

console.log("The value of c is");
console.log(c);

//Part.2
const cookiesInBox = 12;
let numberOfBoxes = 4;
let totalCookies = cookiesInBox * numberOfBoxes;

let phoneBill = 55.00;
let wifiBill = 30.00;
let tvBill = 14.99;

let billsTotal = phoneBill + wifiBill + tvBill;

console.log("The total number of cookies is", totalCookies);
console.log("I owe", billsTotal, "in bills this month");

//Part.3
const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal = mikesMeal + juansMeal + sheasMeal; //complete the line to calculate the total price for all of the meals
const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks; //complete the line to calculate the total price for all of the meals

const subtotal = mealsTotal + drinksTotal; //calculate the subtotal for the entire bill (both drinks and meals)

const tax = subtotal * .1; //calculate the tax on the bill assuming a 10% tax rate
const tip = subtotal * .2; //calculate what a 20% tip on the bill would be

const billTotal = subtotal + tax + tip; //calculate the total due for the bill
const splitAmount = billTotal/3; //calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");
