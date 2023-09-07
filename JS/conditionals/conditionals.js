// Simple conditional
const skyColor = "blue";
if (skyColor === "blue") {
	console.log("Sunny skies today!");
}

// Conditional with 'else if' and 'else'
const sky = "grey";
if (sky === "blue") {
	console.log("Sunny skies today!");
} else if (sky === "grey") {
	console.log("It might rain!");
} else {
	console.log("The day is in your hands!");
}

// An example with a function
function checkAge(age) {
	if (age <= 2 || age > 65) {
		console.log("You get in for free!");
	} else if (age > 2 && age <= 18) {
		console.log("The admission price is $5");
	} else {
		console.log("The admission price is $10.");
	}
}

checkAge(1);
checkAge(10);
checkAge(25);
checkAge(70);
