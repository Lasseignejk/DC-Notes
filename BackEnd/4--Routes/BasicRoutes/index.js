const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let users = [
	{
		id: 1,
		name: "Alice",
		age: 28,
		email: "alice@example.com",
		username: "alice123",
		password: "password123",
	},
	{
		id: 2,
		name: "Bob",
		age: 32,
		email: "bob@example.com",
		username: "bob456",
		password: "securepass",
	},
	{
		id: 3,
		name: "Charlie",
		age: 24,
		email: "charlie@example.com",
		username: "charlie789",
		password: "test123",
	},
];

// ******************************************** GET ********************************************
app.get("/get_users", (req, res) => {
	res.send(users);
});

// ******************************************* POST ********************************************
// POST request that console.logs the req object.
app.post("/req_object", (req, res) => {
	console.log(req);
	res.send("Look in the console in VS Code!!");
});

// POST request using the 'body' of the request. Test in Postman.
app.post("/login_1", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	res.send(
		`Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
	);
});

// POST request using the 'body' of the request and destructuring it. Test in Postman.
app.post("/login_2", (req, res) => {
	const { username, password } = req.body;
	res.send(
		`Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
	);
});

// POST request that adds a user to the users array
app.post("/create_user", (req, res) => {
	const id = users.length + 1;
	users.push({ id, ...req.body });
	res.send(users);
});

// ******************************************** PUT ********************************************
// PUT request that lets user update password
app.put("/update_user", (req, res) => {
	const { username, password } = req.body;
	const userIndex = users.findIndex((user) => user.username === username);
	users[userIndex].password = password;
	res.send(
		`Updated ${username}'s password to "${users[userIndex].password}"`
	);
});
// ****************************************** DELETE *******************************************
// DELETE request that deletes a user based on a username
app.delete("/delete_user", (req, res) => {
	const { username } = req.body;
	const filteredUsers = users.filter((user) => user.username !== username);
	users = filteredUsers;
	res.send(users);
});

// **************************************** app.listen *****************************************
app.listen(PORT, console.log(`Listening on port ${PORT}`));
