# how to set up a node server

## Step 1

1. `npm init` this initializes your server to accept packages. Hey, a bunch of stuff is coming. Be ready to accept it!

-   This creates the `package.json` file. It has the details of all the tools you've downloaded, like 'express' or 'cowsay'

-   This is just a settings file, an object with a bunch of keys and values. You can change everything in here, you might break something so be careful.

-   If you don't want to have to hit enter a whole bunch of times, you can just write `npm init -y` and it skips all of that; assumes you want the default

## Step 2

2. `npm install express` or `npm i express`

-   This creates a whole buncha stuff, including `node_modules`.

-   DO NOT NOT NOT NOT NOT NOT PUSH YOUR NODE_MODULES UP TO GITHUB you will get a WARNING from github telling you to not do it again. If you keep doing it, they will DELETE YOUR REPOSITORY

-   node_modules is ~2mb with express installed. If all the github users pushed that up, that'd be 166 terabytes of data. That's why github doesn't want it.

-   Go into your file, create a `.gitignore` file, go inside, write `node_modules` and you should see the `node_modules` get dimmed out. That's because git is now ignoring that file.

-   You can also go into github desktop, right click the node_modules, and hit `ignore file`. it'll make the gitignore file for you

-   If you're cloning someone's project down, first thing: `npm i` installs all the necessary tools (if they used node) to run the program

-   `Express` handles the http methods, rules to transfer data

-   `Postman` mimics making http requests

## Step 3

3. Store your packages as variables

-   `const express = require("express");` require is like import in python. It goes into the node_modules and finds the 'express' folder.

-   `const app = express();`

-   `const PORT = 3000;` PORT is in caps so we are less likely to try to use 'port' somewhere else. Don't want that to change! The port number can be anything rom 3000 to 3099. Those are the available ports for us to use.

-   `node --watch nameoffile.js` will update the server as you change it. MAKE SURE YOU CLOSE YOUR SERVERS before you close your computer

-   `Express` is just a tool used with node to make servers.

## Step 4

4. Your code needs to have this in it for your server to be ready to start making routes.

```
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
```

## Step 5

5. Run `node --watch index.js` and you should see your console.log in your terminal showing your port is ready to accept requests.

## Step 6 routes

-   A route is a path for your server to do a specified action. Generally a route has a HTTP Method that is required to access it (`get`, `post`, `put`, `delete`, etc).

-   This is a basic route:

```
app.get("/home", (req, res) => {
    res.send("Hello World!");
});
```

-   If you go to `localhost:3000/home`, you should see "Hello World!" printed on the screen. We use `localhost` because the server is currently running on our computer. If the server was hosted somewhere else, we'd have to change localhost to whatever the address was. We use `3000` because that's the port number we defined above. We use `/home` because that's the endpoint we defined in the route. We can change that to be whatever we want, then we'd have to change the url to match.

-   `req` is short for `request` and `res` is short for `response`. You can technically call these whatever you want, but the practice is to use either req/res or request/response. THE ORDER MATTERS. Make sure it's always `req`, THEN `res`.

-   If you put `console.log("Hello World")` instead of `res.send("Hello World!")`, the request will never finish. Infinity. Every route needs a RESPONSE.

-   Each route can have only ONE response. If you have more than one you'll get an error. You can also chain onto the response -- `res.status(401).send("Nope")`

-   Don't use spaces or - in route names, use \_ instead.

## To send data to the server...

`app.use(express.json())`

postman --> body --> raw --> JSON

## Parts of backend

Backend has two parts -- the server and the database.

Server receives a request, goes to the database, finds the data, and serves it to the client.
