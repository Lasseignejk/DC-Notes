// This event runs immediately. You'll see the console.log without having to click on the button. If you click on the button, nothing happens.
const button1 = document.querySelector("#button1");
button1.addEventListener("click", console.log("button1 -- I run immediately!"));

// This is an event with an anonymous arrow function. It waits for the event.
const button2 = document.querySelector("#button2");
button2.addEventListener("click", () =>
	console.log("button2 -- I wait for you to click.")
);

// This is an event with an anonymous function with the function keyword. It waits for the event.
const button3 = document.querySelector("#button3");
button3.addEventListener("click", function () {
	console.log("button3 -- I wait for you to click.");
});

// Extra
// This is an event without an anonymous function but it still waits. That's because we pass it a function that doesn't take in any parameters.
const button4 = document.querySelector("#button4");
function sayHello() {
	console.log("Hello");
}
button4.addEventListener("click", sayHello);
