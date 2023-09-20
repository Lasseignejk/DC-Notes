# Async Functions and Fetch

Many times when we use async functions, or `async/await`, it's because we're also using `fetch`. `fetch` is used when we want to retreive data from somewhere not stored on our local machine, like from a database or an API.

## how to write an async function

Here is a basic example of an async function using the `function` keyword:

    async function getPokemon() {
      const response = await fetch("url")
      const json = await response.json()
      console.log(json)
    }

Here's the same example but using an `arrow function` instead:

    const getPokemon = async () => {
        const response = await fetch("url")
        const json = await response.json()
        console.log(json)
    }

Let's break it down. First we'll take a look at the new terms, then we'll look at how they work together.

On the first line, we see the word `async`. This marks the function as `asynchronous`, meaning not happening at the same time.

On the next line, we see `const response = await fetch("url")`. The word `await` is used inside of `async functions`. It pauses the execution of the code until a promise resolves. The function `fetch()` does just that -- it fetches data from somewhere and returns a promise.

That's a lot of technical stuff. We can look at it like this. If you refresh a tab on an internet browser, it typically loads pretty fast. But is it consistent? No! The first time it might be 200ms, the second time could be 26ms, the third 75ms.

-   The object after url is optional. That's where you can pass in key/values specific to that api
-   async await is how you wait on promises. You HAVE to use both.
-   If you use both, your promise is no longer pending, it sends back a response.
-   9 times out of 10, we'll have to convert the data in the response to JSON (JS Object Notation)
-   Changing data to json takes time. We need to await again.
