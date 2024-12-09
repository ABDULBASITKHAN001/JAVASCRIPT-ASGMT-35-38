// console.log("HELLO-WORLD");
// console.log("")
// console.log("-------------------------------------------------------------------------------------------")
// console.log("QUESTION NUMBER 01:")
// // Create a new Date object for the current date and time
//  var currentDate = new Date();
// console.log(currentDate.toDateString());

// console.log("")
// console.log("----------------------------------------------------------------------------------------------------");
// console.log("QUESTION NUMBER 02:");
// // Function to greet the user with their full name using prompt
// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");    
//     var fullName = firstName + " " + lastName;  
//     console.log("Hello, " + fullName + "!");    
// }
// greetUser();


// console.log("")
// console.log("----------------------------------------------------------------------------------------------------")
// console.log("QUESTION NUMBER 03:");
// // Function to add two numbers input by the user
// function addTwoNumbers() {
  
//     var num1 = Number(prompt("Enter the first number:"));
//     var num2 = Number(prompt("Enter the second number:"));
  
//     var sum = num1 + num2;
    
//     console.log("The sum of the two numbers is: " + sum);
//     return sum;
// }
// addTwoNumbers();

console.log("")
console.log("------------------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 04:")
alert("THIS IS SIMPLE CALCULATOR:")
function calculator(num1, num2, operator){
    var result;

    if(operator === "+"){
        result = num1 + num2;
    
    } else if(operator === "-"){
        result = num1 - num2
    }else if(operator === "*"){
        result = num1 * num2
    }else if(operator === "/"){
        if(num2 === 0){
            result = "ERROR: DIVISION BY ZERO IS NOT ALLOWED"
    }   
    else{
        result = num1/num2
    }         
}else {
    result = "ERROR: INVALID OPERATOR ! "
}
    console.log("RESULT:" + result);
    return result;
}

var num1 = Number(prompt("Enter the first number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var num2 = Number(prompt("Enter the second number:"));


calculator(num1, num2, operator);