/* Pseudocode: 
1. (Declare each variable with const)
2. String Datatype with first phrase assigned to a variable.
3. String DataType with second phrase assigned to a variable.
4. Concatenate both strings by adding them with enclosed back-ticks(`)

5. Create a subtraction calculation to equal 10 to an assigned variable.
6. Create a multiplication calculation to equal 40 to an assigned variable.
7. create a division calculation to equal 39 to an assigned varible.
8. Concatenate all three values with a dash between each number enclosed by back-ticks.

9. Create a console.log to add both concatenated strings and numbers values
10. Create a dialog box with both concatenated strings and numbers values
*/


// To give the user a message with the combination to the vault in an alert dialog box and on the console. 
const str1 = "You have received this message because you have been chosen to open an important vault.";
const str2 = "Here is the secret combination:";
const strComplete = `${str1} ${str2}`;
  /* Expected output of strComplete: "You have received this message because you have been chosen to open an important vault. 
  Here is the secret combination:" */


const num1 = 15 - 5; //equals 10
const num2 = 1 * 2 * 20;
const num3 = 117 / 3;
const numComplete =`${num1} - ${num2} - ${num3}`;
  // Expected output of numComplete: "10 - 40 - 39"

console.log(strComplete + " " + numComplete);    
alert(strComplete + " " + numComplete);          
  /*Expected output: "You have received this message because you have been chosen to open an important vault.
   Here is the secret combination: 10 - 40 -39" */