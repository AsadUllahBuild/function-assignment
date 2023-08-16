// Q1 : Create a block of code that you can use several times.

function sumTotalNumber(first_number , last_number){
    let sum = first_number + last_number;
return sum
}
let first_number = +prompt("Enter a First Number");
let last_number = +prompt("Enter a Second Number");
const totalnumber = (first_number + last_number)
console.log(sumTotalNumber(first_number, last_number));

// Q2 : Write a function that takes first & last name and then it greets the user using his full name.

function names(a, b) {
    let namesAdd = a + b;
    return namesAdd;

}
let names1 = prompt("Enter a first name");
let names2 = prompt("Enter a Last name");
console.log(names(names1 + "", names2));

// Q3 : Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function sumOfNumbers() {
    const num1 = +prompt("Enter the first number:");
    const num2 = +prompt("Enter the second number:");
    
    const sum = num1 + num2;
    return sum;
}

const result = sumOfNumbers();
console.log("The sum of two numbers is:", result);


// Q4 :  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the     desired result in your browser.

function calculator(num1, operator, num2, ) {

    switch (operator) {
        case ("+"):
            let sum = num1 + num2;
            console.log(sum)
            break;
        case ("-"):
            let sub = num1 - num2;
            console.log(sub)
            break;
        case ("*"):
            let multi = num1 * num2;
            console.log(multi)
            break;
        case ("/"):
            let divide = num1 / num2;
            console.log(divide)
            break;
        default:
            return "Enter correct";
    }

}

let num1 = +prompt("enter a number1")
let operator = prompt("enter a oprator")
let num2 = +prompt("enter a number2")
console.log(calculator(num1 , operator , num2));



// Q5 : Write a function that squares its argument.

function square(number) {
    return number * 3;
}

const inputNumber = +prompt("Enter number:");

const result = square(inputNumber);
console.log("The square number is:", result);








