## Browser Events

events that you track in the browser. These events can be a variety of things, such as a click, a hover, a drag, etc.

## How to use Browser Events

1. Select the element you want to attach an event to. Remember, attaching an event to a browser element basically boils down to, if I do this event, this code will run. Most often times you see this in a click.

`const button = document.querySelector(".button)`

2. You can add an EventListener

`button.addEventListener("click", console.log("clicked"))`

EventListeners take two things -- an event and a function.

What happens when we run this in the browser? The console has "clicked" written in it, even though we didn't click the button. We need to WAIT for the event to run the function. To tell it to WAIT you need an anonymous function.

`button.addEventListener("click", () => console.log("clicked))`

We write anonymous functions because we don't need this function for antyhing else. We're just writing it to tell the function to WAIT until we click the button.

This is also ok:
`button.addEventListener("click", nameOfFunction)`
this will wait until we click the button. But if we want to pass our funciton something, we need to use the anonymous function
