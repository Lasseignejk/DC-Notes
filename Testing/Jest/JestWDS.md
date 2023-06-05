[Introduction to Testing in JS with Jest](https://www.youtube.com/watch?v=FgnxcUQ5vho)

# Installing Jest

    npm init -y
    npm i --save-dev jest

Go into the package.json, change the "test" script to "jest"

    "scripts": {
        "test": "jest"
    }

To test, do `npm test`

To make a testing file: `nameOfFileYouWantToTest.test.js`

    sum.test.js

Now, in that file, import the function that you want to test. 

    const sum = require("./sum")

And we can write our test!

The `test` function takes 2 parameters. 
1. A string that describes what you want to test. This'll show up in the console when you run the test, so make sure it makes sense and is descriptive.
2. A function. To test this in normal JS, we'd probably use an if/else. But that's really bulky. Instead, Jest has built-in functions we can use. So instead of an if/else, the test looks like this: 

    test("properly adds two numbers", () => {
        expect(sum(1,2)).toBe(3)
    })

And if we now run this test, we should see the test pass. 

But the tests aren't very detailed. They don't tell us what lines were run, what functions were run -- none of that. So, go back into the package.json, and add `--coverage` to our test script 

    "test": "jest --coverage"

Now the test will display a table listing the files that were covered, the % of statements, branches, functions, and lines covered, as well as the numbers of any lines that were NOT covered.

It also creates a `coverage folder`. Inside of that folder is an index.html file that if you open up, displays the information nicely.

If we add another function to our `sum.js` file, but don't export it and don't run a test on it, then you'll see that reflected if we run the test again. The HTML file will also show you, in red, where exactly on the file the uncovered lines are. 

The tests we've done here are called `Unit Tests` because they test the smallest pieces of your code. Just test one thing at a time. 
