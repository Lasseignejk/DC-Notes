// https://www.youtube.com/watch?v=_8M-YVY76O8

var cors = require("cors");
const stripe = require("stripe")("SECRET KEY");

app.post("/checkout", async (req, res) => {
	//
	// req.body.items (our data looks like this)
	// [
	//     {
	//         id: 1,
	//         quantity: 3
	//     }
	// ]

	// stripe wants
	// [
	//     {
	//         price: 1,
	//         quantity: 3
	//     }
	// ]
	//
	const items = req.body.items;
	let lineItems = [];
	items.forEach((item) => {
		lineItems.push({
			price: item.id,
			quantity: item.quantity,
		});
	});

	// this is all from stripe documentation. They want a thing called line_items, which is formatted like our lineItems array above.

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: "payment",
		success_url: "http://localhost3000/success",
		cancel_url: "http://localhost3000/cancel",
	});

	// So because the session above is async, the server will wait until stripe is done and it'll make a unique url for our user to go to to checkout.

	res.send(
		JSON.stringify({
			url: session.url,
		})
	);
});

// on the frontend, on the checkout button,

// This is a fetch request to our backend, to the checkout route. You're passing the items in the cart to the backend. In the backend we're going to take those items, make them into a format that stripe understands, and then create a session with those cart items. Once the session is created, we're going to send the stripe url back to the frontend, then push the user to that page using the window.location.assign line.
const checkout = async () => {
	await fetch("http://localhost:4000/checkout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ items: cart.items }),
	})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.url) {
				window.location.assign(response.url);
			}
		});
};

<Button onClick={checkout}>Purchase!</Button>;

// Stripe fake credit card # is 4242 4242 4242 4242 then sometime in the future for the experation, a random cvv code, random zip code
