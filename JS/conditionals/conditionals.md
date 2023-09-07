# Conditionals

📂 conditionals.js

🔗 [conditional files on GitHub](https://github.com/Lasseignejk/DC-Notes/tree/main/JS/conditionals)

## Simple Syntax

Simple conditionals have three parts -- the `if` keyword, a `condition`, and the `code` that should run if that condition is met.

    if (condition) {
        // code that runs if the condition is true
    }

    // Ex:
    const skyColor = "blue"
    if (skyColor === "blue") {
        console.log("Sunny skies today!")
    }

In the above example, `"Sunny skies today!"` will print in the console because `skyColor === "blue"` is true.

❓ What will happen if `skyColor` does <strong>not</strong> equal `"blue"`? What will print in the console?

    const skyColor = "grey"
    if (skyColor === "blue") {
        console.log("Sunny skies today!")
    }

👉 Nothing prints in the console! When we run the code above, the computer checks the `condition`. Remember, the code in the curly brackets will <strong>only run</strong> if the condition is `true`. If the condition is `false`, nothing happens.

## `else if` and `else`

We can use `else if` and `else` to make conditionals more complex. Here's the syntax:

    if (condition) {
        // Code that runs if the condition is true
    } else if (condition2) {
        // If the first condition isn't true, this condition will be checked. The code here will run if the second condition is true.
    } else {
        // Code that runs if none of the above conditions are true.
    }

❗ Pay close attention to the syntax of the `else` statement -- it doesn't take a `condition`!

Let's take our example from before and add an `else if` and an `else` to it.

    // Ex:
    const skyColor = "blue"
    if (skyColor === "blue") {
        console.log("Sunny skies today!")
    } else if (skyColor === "grey") {
        console.log("It might rain!")
    } else {
        console.log("The day is in your hands!")
    }

❓ Based on the code above, if we change `skyColor` to be `"grey"`, what will show in the console?

➡️ It should print `"It might rain!"` That's because when we run the code, the computer will first check the `if` statement. The condition for the `if` statement is false -- `skyColor` does <strong>not</strong> equal `"blue"` -- so it will check the `else if` statement next. That condition <strong>is</strong> true, so the code attached to it runs.

❗ Since the `else if` statement was triggered, the computer doesn't check any code after it. The `else` statement doesn't run.

<br>

❓ What if we change `skyColor` to be `"red"`? What will show in the console?

➡️ It should print `"The day is in your hands!"` Just like before, it checks the `if` statement (false), then the `else if` (also false). Since there are no other conditions to check, and everything above it was false, the `else` statement is triggered.

While the above example only had one `else if`, you can have multiple in the same conditional!

    if (condition) {
        // code
    } else if (condition2) {
        // code
    } else if (condition3) {
        // code
    } else {
        // code
    }

## At the bare minimum...

At the bare minimum, you only need an `if` statement for a conditional, like our very first example. That being said, the first thing in a conditional is <strong>always</strong> an `if` statement. You can't start a conditional with an `else if` or an `else`. VS Code will throw an error!

❌

    else if (skyColor === "grey") {
        console.log("It might rain!")
    }

❌

    else {
        console.log("The day is in your hands!")
    }
