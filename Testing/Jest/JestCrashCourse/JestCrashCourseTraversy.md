[Jest Crash Course -- Unit Testing in JS](https://www.youtube.com/watch?v=7r4xVDI2vho)

# Installing Jest

    npm init -y
    npm i -D jest

In the package.json file, change "test" value to "jest"

# How to use 
Create a file called `functions.js` and write a simple function adding two numbers. 

    const functions = {
    add: (num1, num2) => num1 + num2
}

Export that function and require it in another file called `functions.test.js`.

## Whenever you make a test file, make it with the same name as where the functions are coming from. Helps with clarity.

Inside `functions.test.js`, we're going to write a test. 

`test` is a function. It takes in two params. The first is a description to help you, the developer, state what it is that function SHOULD be doing. The second is an anonymous function. 

The anonymous function is where you tell the test the numbers to plug into the adding function and what the answer should be. 

    test('Adds 2 + 2 to equal 4', () => {
        expect(functions.add(2,2)).toBe(4)
    })

To test, we can put `npm test` into the terminal and it'll show whether the function passed the test or not.

# .not
You can also run tests based on what the output should not be. For example: 

    test("Adds 2 + 2 to not equal 5", () => {
        expect(functions.add(2, 2)).not.toBe(5);
    });

You can also test for truthy/falsy, undefined, null, etc. 

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined 
- toBeTruthy matches anything that an if statement treats as true 
- toBeFalsy matches anything that an if statement treats as false

`toBe` is for primitive types. 
Objects/arrays are referenced types in JS, they're stored in the memory differently. So if you want to use `toBe` to check if they're the same, it'll throw an error and say you probably want to use `toEqual` instead.

You can also write the function logic in the test file itself, like this: 

    test("should be under 1600", () => {
        const load1 = 800
        const load2 = 700
        expect(load1 + load2).toBeLessThan(1600)
    });

# Working with async JS

    npm i axios

In the functions.js: 

    fetchUser: () => axios.get("http://jsonplaceholder.typicode.com/users/1").then(res => res.data)
    .catch(err => 'error')

To make the test, we have to use `expect.assertions()` and pass it the number of data we expect to get back, in this case, `expect.assertions(1)`

We also need a return, to return the promise. 

If we leave BOTH OF THOSE OUT, the assertions and the return statement, the test will PASS even if the condition isn't met. 

This passes:

    test("User fetched name should be Leanne Graham", () => {
        expect.assertions(1)
        return functions.fetchUser().then(data => {
            expect(data.name).toEqual("Leanne Graham")
        })
    })

This doesn't pass: 

    test("User fetched name should be Leanne Graham", () => {
        expect.assertions(1)
        return functions.fetchUser().then(data => {
            expect(data.name).toEqual("Leanne Graham1")
        })
    })

This PASSES even though the name is wrong: 

test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1)
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham1")
    })
})

(Upon testing on my file, it still failed, so maybe that was a thing with the older Jest; this video is from 2018) 
# LOOK UP USING JEST WITH ASYNC DATA TO CHECK THIS

To use with async/await: 

    test("User fetched name should be Leanne Graham", async () => {
        expect.assertions(1);
        const data = await functions.fetchUser();
        expect(data.name).toEqual("Leanne Graham");
    });

# Adding tests before and after other tests

    beforeEach(() => initDatabase())
    afterEach(() => closeDatabase())

    const initDatabase = () => console.log('Database Initialized...')
    const closeDatabase = () => console.log('Database Closed...')

Now, initDatabase will run before every test and closeDatabase will run after every test.

If you want to run them only once, run initDatabase before any of the tests run, then closeDatabase once the tests are finished, you can use `beforeAll` and `aferAll` instead of `beforeEach` and `afterEach`

If you want to run something only before specific tests, 