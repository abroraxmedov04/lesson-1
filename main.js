// Display an alert
alert("Hi! Click OK");

// Ask for user's name, surname, email, contact, and money to convert
var nameUser = prompt("Enter your name...");
var userSurname = prompt("Enter your surname...");
var emailUser = prompt("Enter your email...");
var userContact = prompt("Enter your phone number...");
var userMoney = prompt("Enter the amount to convert to UZS...");

var DOLLAR_USD = 12400;

var moneyInUZS = userMoney * DOLLAR_USD;
console.log(
  "User name => " +
    nameUser +
    "\nUser surname => " +
    userSurname +
    "\nUser email => " +
    emailUser +
    "\nUser Contact => " +
    userContact +
    "\nUser money in UZS => " +
    moneyInUZS
);




