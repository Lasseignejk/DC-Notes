const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/home", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
