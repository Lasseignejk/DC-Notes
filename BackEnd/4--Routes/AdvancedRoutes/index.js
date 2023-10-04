const express = require("express");
const app = express();

app.use(express.json());

let restaurants = [
	{ name: "Uchi", style: "Asian", price: "$$$$" },
	{ name: "Smoochi", style: "Asian", price: "$$$$" },
];

// GET all restaurants
app.get("/get_restaurants", (req, res) => {
	res.send(restaurants);
});

// create (POST) a restaurant
app.post("/create_restaurant", (req, res) => {
	restaurants.push(req.body);
	res.send(`Added new restaurant called ${req.body.name}`);
});

// update (PUT) a restaurant
app.put("/update_restaurant", (req, res) => {
	const indexOfRestaurantToUpdate = restaurants.findIndex(
		(restaurant) => restaurant.name === req.body.name
	);
	if (indexOfRestaurantToUpdate === -1) {
		res.status(404).send(
			"That restaurant does not exist, please consider adding it!"
		);
	} else {
		if (req.body.name && req.body.price && req.body.style) {
			restaurants[indexOfRestaurantToUpdate].name =
				req.body.nameToUpdateTo;
			restaurants[indexOfRestaurantToUpdate].price = req.body.price;
			restaurants[indexOfRestaurantToUpdate].style = req.body.style;
			res.send(
				`This is your newly updated restaurant ${restaurants[indexOfRestaurantToUpdate].name}`
			);
		} else {
			res.send("You need to provide a name and a price and a style.");
		}
	}
});

// DELETE a restaurant
app.post("/delete_restaurant", (req, res) => {
	const filteredRestaurants = restaurants.filter(
		(restaurant) => restaurant.name !== req.body.name
	);
	restaurants = filteredRestaurants;
	res.send(restaurants);
});

// app.listen
app.listen(3003, () => {
	console.log("Server is running on port 3003");
});
