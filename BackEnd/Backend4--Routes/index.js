const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("This is the home page.");
});

// POST request that console.logs the req object. Look at all the stuff that's contained in it!
app.post("/req_object", (req, res) => {
	console.log(req);
	res.send("Look in the console in VS Code!!");
});

// POST request using the 'body' of the request. Test in Postman.
app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	res.send(
		`Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
	);
});

// POST request using the 'body' of the request and destructuring it. Test in Postman.
app.post("/create_user", (req, res) => {
	const { username, password } = req.body;
	res.send(
		`Created new user: Username -- ${username}, Password -- ${password}`
	);
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));
