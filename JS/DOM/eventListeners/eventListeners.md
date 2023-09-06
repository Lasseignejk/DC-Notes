# Browser Events

📂 eventListeners.js, eventListeners.html

🔗 [eventListeners files on GitHub]()

🔬 [lab](https://github.com/DigitalCraftsStudents/js-lab-event-handling-exercises)

📓 [list of events on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

Browser Events are things that happen in the browser that cause something to happen or change -- an alert to appear, a color to change, a number to go up or down. These events can be a variety of things, such as a click, a hover, a drag, etc.

| Event                                                                               | Description                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ["click"](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)     | Event fires when a mouse is pressed and released on a certain element.                                                                                                                                                                                   |
| ["keydown"](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) | Event is fired when a key is pressed. To use when a specific key is pressed, you'll need to know the `keyCode` of the key in question. For example, if you want an event to fire when `Enter` is pushed, you need to check if the `event.keyCode === 13` |

## How to Use Browser Events

1. Select the element you want to attach an event to. Remember, attaching an event to an element basically boils down to, if I do this event, this code will run. Most often times you see this in a `click`.

    const button = document.querySelector(".button)

2. Add an EventListener

    button.addEventListener("click", console.log("clicked"))

EventListeners take <strong>two things</strong> -- an event and a function. In the EventListener above, the `event` is `"click"` and the `function` is `console.log("clicked")`.

## Anonymous Functions

❓ What happens when we run this in the browser? The console has "clicked" written in it, <strong>even though we didn't click the button.</strong> And even if we click on the button, nothing happens in the console! We need to <strong>wait</strong> for the event to run the function. To tell it to wait, you need an `anonymous function`. We can rewrite the EventListener like this, with an arrow function:

    button.addEventListener("click", () => console.log("clicked))

Or like this, with the `function` keyword:

    button.addEventListener("click", function () {
        console.log("clicked")
    })

The function is anonymous because it doesn't have a name. Instead, we just have the function keyword, the parenthesis for the parameters, and the curly brackets for the function body. Because this function doesn't have a name, it means we can't call it anywhere else. That's fine -- we only need to use it right here!

## 💡 Extra 💡

Instead of writing the event listener with an anonymous function, we can also write it like this:

    button.addEventListener("click", nameOfFunction)

Notice how this time, we don't have the parenthesis for the parameters on the function -- we just type the name of the function. This will wait for the event to fire (the button to be clicked on), but you <strong>can't</strong> pass parameters this way. If you do, the event will fire immediately instead of waiting. When in doubt, use the anonymous function method!

This is also ok:
`button.addEventListener("click", nameOfFunction)`
this will wait until we click the button. But if we want to pass our funciton something, we need to use the anonymous function
