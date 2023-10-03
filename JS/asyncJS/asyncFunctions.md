# Async Functions and Fetch

🔗 [Files on GitHub](https://github.com/Lasseignejk/DC-Notes/tree/main/JS/asyncJS)
📓 [Examples from The Modern JavaScript Tutorial](https://javascript.info/async-await)
📓 [W3Schools tutorial](https://www.w3schools.com/js/js_async.asp)

Many times when we use async functions, or `async/await`, it's because we're also using `fetch`. `fetch` is used when we want to retrieve data from somewhere not stored on our local machine, like from a database or an API.

Before we get into the code, let's think about something that happens asynchronously vs synchronously.

## Asynchronous vs Synchronous

A good example to use when we’re talking about async vs sync is communication. Let’s say you want to talk to your good friend Bob. There are many different ways you could talk to Bob – phone call, video chat, email, text. Today, you feel like calling Bob. You pick up the phone, type in the number, **ring, ring**, and he picks up. You both talk about the weather, your jobs, an upcoming event. This is done synchronously. You speak, Bob replies immediately. Bob speaks, you reply immediately.

The next day, you realize you forgot to tell Bob something, but your day is packed with meetings. So you decide to send him a text. You send the text and you wait. And wait. And wait. Three hours later (Bob has a busy day too), you get a reply. You chat over text a bit more – a few minutes go by between each text. This is done asynchronously. The time it takes for Bob to reply will never be consistent! It may take him 3 hours, or 1 hour, or a couple of minutes, or a couple of days! You can’t do anything to make Bob reply faster or more consistently. The same is true with asynchronous JavaScript!

## How to write an async function

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
