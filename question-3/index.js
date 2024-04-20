"use strict";
// //Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
//Solution
// The await keyword in JavaScript is indeed significant in handling asynchronous code in a more synchronous-like manner. Here's a breakdown:
//1- Waiting for Promises: The primary purpose of await is to pause the execution of an async function until a Promise is settled (resolved or rejected). This allows you to write code that appears to execute sequentially, even though it's actually asynchronous.
//2- Synchronous-Like Behavior: When you use await, the JavaScript runtime waits for the Promise to resolve before moving on to the next line of code. This behavior resembles synchronous programming, where each line is executed one after the other.
//3- Clarity and Readability: By using await, you can write asynchronous code that looks more like traditional synchronous code. This can greatly improve readability and maintainability, as it's easier to understand the flow of the program without deeply nested callbacks or Promise chains.
//4- Error Handling: When using await, you can catch errors using traditional try-catch blocks, just like synchronous code. This makes error handling more straightforward and less error-prone compared to handling errors with .then() and .catch().
//5- Avoiding Callback Hell: Using await along with async functions helps in avoiding callback hell, a situation where deeply nested callbacks become hard to manage and understand. With async/await, you can write asynchronous code in a more linear and organized fashion.
//6- Debugging: Asynchronous code can sometimes be difficult to debug due to its non-linear nature. await allows you to step through code more easily in debuggers, as the execution flow is closer to synchronous code.
// Overall, the await keyword is a powerful addition to JavaScript that simplifies asynchronous programming, improves code readability, and makes error handling more intuitive.
// An asynchronous function that adds two numbers after a delay
async function addAsync(a, b) {
    // Simulating a delay with setTimeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    return a + b;
}
// Function to call the asynchronous function and display the result
async function calculate() {
    console.log("Calculating...");
    const result = await addAsync(3, 4);
    console.log("Result:", result);
}
// Calling the function to start the calculation
calculate();
