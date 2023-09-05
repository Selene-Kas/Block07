console.log("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

//alert("Hello World");

/* 
Pseudocode: 
Made multiple strings with assigned values and concatenated them together to give the user 
a message with the combination to the vault. 
Arithmetic calculation using subtraction operator to equal the first combination of value 10. 
Arithmetic calculation using multiplication operator to equal the second combination of value 40. 
Arithmetic calculation using division operator to equal the third combination of value 39. 
Concatenate all three values with a string with a dash between each munber.
Display the vault codes with dialog box and script tag in HTML page or an alert popup dialog. 
*/


/*Made two const strings named str1 and str2 with assigned values and concatenated them together 
with variable strComplete and declared with const, and sum of str1 and str2.To give the user 
a message with the combination to the vault. */
const str1 = "You have received this message because you have been chosen to open an important vault.";
const str2 = "Here is the secret combination:";
//const strComplete = `${str1} ${str2}`;

// Created variable num1 with an arithmetic calculation for value 10
const num1 = 15 - 5;
const num2 = 1 * 2 * 20;
const num3 = 117 / 3;
const numComplete =`${num1} - ${num2} - ${num3}`;
console.log(numComplete);



//console.log(strComplete);
// Send a dialog box with alert with the concatenation of both strings(variables str1 and str2) and all three numbers (variables num1, num2, num3).
alert(str1 + str2 + " " + num1 + " - " + num2 + " - " + num3);
//Expected output: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

