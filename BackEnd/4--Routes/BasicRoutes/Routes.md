# Backend Routes

📂 index.js

🔗 [File on GitHub](https://github.com/Lasseignejk/DC-Notes/blob/main/BackEnd/4--Routes/BasicRoutes/index.js)

There are 4 routes we'll cover here -- `GET`, `POST`, `PUT`, and `DELETE`. At the top of the `index.js` file, I've created a variable called `users` which has dummy data in it. We'll be updating this variable using the routes below, like it's a database.

## GET

The simplest of routes, `GET` routes only <strong>get</strong> data and send that data to the frontend. That's it.

    app.get("/get_users", (req, res) => {
        res.send(users);
    });

## POST

`POST` routes handle sending data back and forth from the frontend to the backend. That data can then be stored on the backend, used to check if something is correct (if a user-entered password matches the password saved in the database), or used to update information stored on the backend.

### To send data to the server...

To send data to the server with just Postman, first navigate to the `Body` tab in Postman. You should see options below -- none, form-data, etc. Click `raw` and a blue dropdown should appear at the end of the row. The default is `Text`, change it to `JSON`.

In the area below, we can type in a JSON object for the body of the request! We use this when we want to send data to the server, like when a user is logging in/signing up. For example:

    {
        "username": "FirstUser",
        "password": "1234password"
    }

We are entering the body in JSON so the keys of the object, `username` and `password`, need quotation marks around them too. Postman will show a little red squiggle if you forget the quotation marks.

### Closer look at the `req` object

Now that we've got Postman setup, we need to write our route. Before we get too far though, let's take a closer look at the `req` part of `(req, res)`. Before now, we've only used `res` -- `res.send("Hello World!")`. When we send information to the server, like in a `post` route, that information is set in the `req`.

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

#### First way to write POST route

We can use dot notation to access the information contained within the body of a request! Let's say a user is logging in. Here's the <strong>first</strong> way you could write the `post` route:

    app.post("/login_1", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        res.send(
            `Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
        );
    });

Let's break it down. On the second and third lines, we declare the variables `username` and `password` and we set them equal to `req.body.username` and `req.body.password` respectively. So the `username` variable will EQUAL whatever is inside of the `req.body` under the `username` key. If we change the username in Postman to be "MinionDave" instead of "FirstUser" and hit the route again in Postman, you'll see that "MinionDave" displays below.

Typically, it's a good idea to have the variable on the backend be the same as the key in the body -- `const username` and `{"username": ""}` for example. If they happen to be different, you have to write the route like we did above and you <strong>can't</strong> use the second way. The important thing is that the `req.body` part has to match what the data looks like, where we entered it in Postman.

    app.post("/login_1", (req, res) => {
        const user = req.body.username;
        const pass = req.body.password;
        res.send(
            `Logging in user with these credentials: Username -- ${user}, Password -- ${pass}`
        )
    })

#### Second way to write a POST route

If the variable and the data match, though, like in the original example, there's a shortcut we can use. Let's say we're going to create a new user. Compare the route below to the route above:

    app.post("/login_2", (req, res) => {
        const { username, password } = req.body;
        res.send(
            `Logging in user with these credentials: Username -- ${username}, Password -- ${password}`
        );
    });

Did you spot the difference? Instead of writing out `const username = req.body.username` and doing the same for password, we've condensed it into one line -- `const {username, password} = req.body`. This does the same thing as the first way we learned, it just saves us some keystrokes! It's very handy when there's lots of information you need to send to the backend. We only have two things we're sending in this example, but maybe you're sending `form` data and the form has 20 fields. Instead of having to write out every variable, we can `destructure` the data using the `{ }` and save some time. Both ways work -- use whichever is more comfortable!

### Creating a new user using `POST`

Let's use what we know about `post` and `req.body` to add a new user to the `users` array.

    // ********** Postman **********
    {
        "username": "FirstUser",
        "password": "1234password"
    }

    // ********** Route **********
    app.post("/create_user", (req, res) => {
        const id = users.length + 1;
        users.push({ id, ...req.body });
        res.send(users);
    });

When you hit the route, you should see a new user added to the end of the array! If you're wondering about the second line in the route, `users.push({id, ...req.body})`, we're using the `spread operator` to edit the `req.body` slightly. It's taking whatever is already in the `req.body` and adding the `id` field inside of that object. Just using the variable `id` in the spread is enough -- Javascript looks at that and will create a key of 'id' and set the value equal to the value of the 'id' variable. It's a shorthand way of writing `id: id`.

## PUT

`put` requests update data in the database. We can use `post` for this as well, but `post` can have unintended consequences if we're not careful. Here's a route that lets the user update their password.

    app.put("/update_user", (req, res) => {
        const { username, password } = req.body;
        const userIndex = users.findIndex((user) => user.username === username);
        users[userIndex].password = password;
        res.send(
            `Updated ${username}'s password to "${users[userIndex].password}"`
        );
    });

This route takes in a username and password. Then it finds the index of the user it's going to update by comparing the usernames of everyone in the `users` array against the username passed in the `req.body`. Finally, it updates the password and sends back a success message.

## DELETE

Let's use a `delete` route to delete a user from the array. We could do this by searching for the index of a certain user, like we did in the `put` example above, but a more efficient way would be to use the Javascript `filter` method.

    app.delete("/delete_user", (req, res) => {
        const {username} = req.body
        const filteredUsers = users.filter((user) => user.username !== username);
        users = filteredUsers
        res.send(users)
    })

## Advanced Routes

All of these routes are the bare minimum for CRUD -- Create, Read, Update, Delete. If we don't enter in exactly the right information, the code just breaks. Check out the [Advanced Routes](https://github.com/Lasseignejk/DC-Notes/tree/main/BackEnd/4--Routes/AdvancedRoutes) folder for some more in-depth examples!
