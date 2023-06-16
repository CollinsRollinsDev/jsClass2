// Types in js


var name = "Collins Rollins"


var age = 17 // Number


var isMale = true // Boolean


var isFemale = false // Boolean


var unbornBaby; // Undefined


var noPeace = null; // Null

var walletBal = 2000;
var welcomeBonus = 100;
var tax = 0.1;
var quantity = 2;
var foodAmount = 1000;

var addition = welcomeBonus + walletBal;
var subtraction = walletBal - welcomeBonus;
var multiplication = walletBal * welcomeBonus;
var division = walletBal / welcomeBonus;

// console.log(addition, "as addition")
// console.log(subtraction, "as subtraction")
// console.log(multiplication, "as multiplication")
// console.log(division, "as division")

//BODMAS

//can you buy food with your wallet balance
var remainingBalance = ((walletBal + welcomeBonus) - (foodAmount * quantity) - (tax * (foodAmount * quantity)));
console.log(remainingBalance, "as remainingBalance")

var fullWalletBal = walletBal + welcomeBonus;
var totalFoodAmount = foodAmount * quantity;
var totalTax = tax * totalFoodAmount;
var remainingBalance = fullWalletBal - totalFoodAmount - totalTax;
console.log(remainingBalance, "as remainingBalance from breakdown")

//assignment;
//1. create a variable called name and assign your name to it
//2. create a variable called age and assign your age to it
//3. create a variable called isMale and assign a boolean value to it
//4. create a variable called isFemale and assign a boolean value to it
//5. create a variable called unbornBaby and assign a value of undefined to it
//6. create a variable called noPeace and assign a value of null to it
//7. You have a wallet balance of 5000, you get a welcome bonus of 300, you bought 2 meals with each for 1230, you pay a tax of 10% on the food (each), how much is your remaining balance?

//Note: Use the one line method as well as the breakdown method. Good luck