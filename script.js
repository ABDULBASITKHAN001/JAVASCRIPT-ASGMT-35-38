console.log("HELLO-WORLD");
console.log("")
console.log("-------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 01:")
// Create a new Date object for the current date and time
 var currentDate = new Date();
console.log(currentDate.toDateString());

console.log("")
console.log("----------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 02:");
// Function to greet the user with their full name using prompt
function greetUser() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");    
    var fullName = firstName + " " + lastName;  
    console.log("Hello, " + fullName + "!");    
}
greetUser();


console.log("")
console.log("----------------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 03:");
// Function to add two numbers input by the user
function addTwoNumbers() {
  
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
  
    var sum = num1 + num2;
    
    console.log("The sum of the two numbers is: " + sum);
    return sum;
}
addTwoNumbers();

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


console.log("");
console.log("------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 05:");
function square(x) {
    console.log(x * x);
}

square(4);  


console.log("");
console.log("-------------------------------------------------------------------------------------------------")
console.log("QUESTION NUMBER 06:");
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  
    } else {
        return n * factorial(n - 1);  
    }
}

console.log(factorial(5));


console.log("")
console.log("------------------------------------------------------------------------------------------------------")
console.log("QURSTION NUMBER 07:");
function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
displayCounting(1, 10);  


console.log("")
console.log("------------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 08:");
function capitalizeFirstLetterOfEachWord(str) {
    var originalString = str; 
    var words = str.split(' ');  
    var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);  
    });
    var changedString = capitalizedWords.join(' '); 
    console.log("Original String: " + originalString);
    console.log("Changed String: " + changedString);
    
    return changedString; 
}

var result = capitalizeFirstLetterOfEachWord('the quick brown fox');

console.log("")
console.log("------------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 09:");
function findLongestWord(str) {
    var originalString = str; 
    var words = str.split(' ');
    var longestWord = '';
    
    // Loop through the words and find the longest one
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    console.log("Original String: " + originalString);
    console.log("Longest Word: " + longestWord);
    
    return longestWord;
}

var result = findLongestWord('Web Development Tutorial');


console.log("");
console.log("------------------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 10:");
function calculateArea(width, height) {
    return width * height;
  }
  var w = 5;  
  var h = 10; 
  var area = calculateArea(w, h);
  console.log("Area (using variables):", area);
  
