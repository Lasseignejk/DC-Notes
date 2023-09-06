# Async Functions and Fetch

- async functions are functions that return a promise.
- a promise is either fulfilled, pending, or rejected.

`async function getDogPic() {
  const dogPic = asynclogic
  console.log(dogPic)
}`

- go on the internet, get me data, bring it back

## how to write an async function

`async function getPokemon() {
  const pokemon = await fetch("url", {})
  const json = await pokemon.json()
  console.log(json)
}`

- The object after url is optional. That's where you can pass in key/values specific to that api
- async await is how you wait on promises. You HAVE to use both.
- If you use both, your promise is no longer pending, it sends back a response.
- 9 times out of 10, we'll have to convert the data in the response to JSON (JS Object Notation)
- Changing data to json takes time. We need to await again.
