# Backend Routes

📂 index.js

🔗 [File on GitHub]()

There are 3 routes we'll cover here -- `GET`, `POST`, and `DELETE`.

## GET

The simplest of routes, `GET` routes only get data and send that data to the frontend. That's it.

    app.get("/", (req,res) => {
        res.send("This is the home page.")
    })

## POST

`POST` routes handle sending data back and forth from the frontend to the backend. That data can then be stored on the backend, used to check if something is correct (if a user-entered password matches the password saved in the database), or used to update information stored on the backend.

## To send data to the server...

To send data to the server with just Postman, first navigate to the `Body` tab in Postman. You should see options below -- none, form-data, etc. Click `raw` and a blue dropdown should appear at the end of the row. The default is `Text`, change it to `JSON`.

In the area below, we can type in a JSON object for the body of the request! We use this when we want to send data to the server, like when a user is logging in/signing up. For example:

    {
        "username": "FirstUser",
        "password": "1234password"
    }

We are entering the body in JSON so the keys of the object, `username` and `password`, need quotation marks around them too. Postman will show a little red squiggle if you forget the quotation marks.

## Closer look at the `req` object

Now that we've got Postman setup, we need to write our route. Before we get to far though, let's take a closer look at the `req` part of `(req, res)`. Before now, we've only used `res` -- `res.send("Hello World!")`. When we send information to the server, like in a `post` route, that information is set in the `req`.

First, we need to add this line to our `index.js` file. Put it <strong>above</strong> the routes but <strong>below</strong> the `const express`, `const app`, and `const PORT` lines at the top.

    app.use(express.json())

This line allows us to access the body of a request, which is important because that's where the users' username and password exists. If we don't have this line, it'll error out.

Here's a route to look at the `req` object:

    app.post("/req_object", (req, res) => {
        console.log(req);
        res.send("Look in the console in VS Code!!)
    })

To test it, make sure that you've typed in `localhost:3000/req_object` in Postman and you've changed `GET` to `POST`. Once you hit the route, you should see `Look in the console in VS Code!!` displaying. Open the console to see a <strong>massive</strong> object printed out. There is all kinds of information in there -- this is what every request looks like!

❓ Can you find where the user's information is stored in the `req` object? You should see `{username: 'FirstUser', password: '1234password'}` somewhere in there.

👉 The key the information is stored under is `body`! It looks like this:

    body: {username: 'FirstUser', password: '1234password'}

Now we just need to learn how to access the body in our routes, so we can pass data from the frontend to the backend.

### Handling the body of a request in the backend -- 2 ways

We just looked at the `req` object and we saw that the data we pass in the body on Postman is stored under a key called `body`. So, how do we access things inside of an object?

❓ Review! Let's say I have an object called `student` with a student's information inside. How would I get "Bob" to show in the console?

    const student = {
        firstName: "Bob",
        lastName: "Smith",
        email: "bobsmith@email.com"
    }

    console.log(// What goes in here?)

👉 We use dot notation!

    console.log(student.firstName) // "Bob"

We can use dot notation to access the information contained within the body of a request! Let's say a user is logging in. Here's the <strong>first</strong> way you could write the `post` route:

    app.post("/login", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        res.send(
            `Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
        );
    });

Let's break it down. On the second and third lines, we declare the variables `username` and `password` and we set them equal to `req.body.username` and `req.body.password` respectively. So the `username` variable will EQUAL whatever is inside of the `req.body` under the `username` key. If we change the username in Postman to be "MinionDave" instead of "FirstUser" and hit the route again in Postman, you'll see that "MinionDave" displays below.

Typically, it's a good idea to have the variable on the backend be the same as the key in the body -- `const username` and `{"username": ""}` for example. If they happen to be different, you have to write the route like we did above. The important thing is that the `req.body` part has to match what the data looks like, where we entered it in Postman.

    app.post("/login", (req, res) => {
        const user = req.body.username;
        const pass = req.body.password;
        res.send(
            `Logging in user with these credentials: Username -- ${user}, Password -- ${pass}`
        )
    })

If the variable and the data match, though, like in the original example, there's a shortcut we can use. Let's say we're going to create a new user. Compare the route below to the route above:

    app.post("/create_user", (req, res) => {
        const { username, password } = req.body;
        res.send(
            `Created new user: Username -- ${username}, Password -- ${password}`
        );
    });

Did you spot the difference? Instead of writing out `const username = req.body.username` and doing the same for password, we've condensed it into one line -- `const {username, password} = req.body`. This does the same thing as the first way we learned, it just saves us some keystrokes!
