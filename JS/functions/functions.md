# Functions

📂 functions.js

🔗 [function files on GitHub](https://github.com/Lasseignejk/DC-Notes/tree/main/JS/functions)

Functions have three parts -- a name, parameters, and a body.

    function functionName(parameters) {
        // function body
    }

The parameters section is where you can pass in data for the function to use. You can leave it blank if you want to.

Parameters are like placeholders -- everywhere you have a parameter variable in the function body, that'll later be updated with what you pass the function when you call it. For example:

    function addTwoNums(num1, num2) {
        const total = num1 + num2
        console.log(total)
    }

    addTwoNums(36, 79)   // 115

Here we've declared a function. It's called `addTwoNums`. We declared it with two parameters -- `num1` and `num2`. We could call them whatever we want, but `num1` and `num2` are meaningful and helpful for anyone who uses this function.

When we call the function, `addTwoNums(36, 79)`, `num1` <em>becomes<em> 36. Everywhere in the function body that we see `num1` used, that will become `36` when we run the function. You can think of the function as now looking like this:

    function addTwoNums(36, 79) {
        const total = 36 + 79 // 115
        console.log(115)
    }

👉 When you're writing lots of code, it's easy to forget what a function does and what parameters it takes. VS Code makes it easier to remember! If you call a function and hover over the name, a little box will appear. For example, if we hover `addTwoNums()`, the box says:

    function addTwoNums(num1: any, num2: any): void

VS Code tells us that `addTwoNums` is a function. It takes in two parameters, `num1` and `num2`, and they can be of any data type. The `void` at the end is there because we aren't <em>returning</em> anything in our function. If we `return total` instead of `console.log(total)`, we see that the box changes to say `any` at the end instead of void.
