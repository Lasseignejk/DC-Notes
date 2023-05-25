[Intro to JS Unit Testing and BDD](https://www.youtube.com/watch?v=u5cLK1UrFyQ)

# Introducing Unit Testing 
- BBD --> Behavior Driven Development
- Tests describe the <strong>expected</strong> behavior of the application
- Unit tests focus on small meaningful chunks of functionality 
- Should be easy to understand

# Proving Our Code Works
Normally, we test by writing code then running it to see what happens (or using console.log to keep track of what's going on). Obviously if we get an error that means we did something wrong, but that error message usually isn't that helpful or clear.

Let's say we have a function that looks like this: 

    function gatherNamesOf (arrayOfPeople) {
        return arrayOfPeople.map(function (person) {
            person.name
        })
    }

    let people = [{name: 'Gunter'}, {name: 'Marceline'}, {name: 'Simon'}]
    let names = gatherNamesOf(people)
    console.log(names)

So what this SHOULD do is print out the array with just the people's names in it.

But if we run it, we get `[undefined, undefined, undefined]`. That's it. No error message, no hints at where the code went wrong, nothing. So now you have to go back to the code and look for the error. And look. And look. And run. And run. 

## Problems with Manual Testing 
- Clogs up your code with console.logs and other things, just to check that everything is working, which also makes the code hard to read. And if you want to change and check something else, you have to go back through and change/remove all the console logs and re-write them somewhere else
- All of these are just temporary fixes.

# Running Your First Automated Test
- We're going to use Mocha.
