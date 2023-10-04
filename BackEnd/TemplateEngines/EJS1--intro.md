[Embedded Javascript](https://ejs.co/)

# Installation

    npm i express ejs

# How to use EJS

We can use ejs in our routes like this:

    router.get("/user_data", (req,res) => {
        let student = {name: "Dustin"};
        let html = ejs.render(`<h1> Howdy, <%= student.name; %> </h1>`, {
            student: student,
        })
        res.send(html)
    })

But that's painful. Let's do it a little differently.

in the main index.js:

    app.set("views", "./views")
    app.set("view engine", "ejs");

Make a new folder named `views` in the root directory.

Inside that folder, make a folder named `user` and inside of there, a file named `user.ejs`

Inside user.ejs:

    <!DOCTYPE html>
    <html>

    <head>
        <title>EJS Template</title>
    </head>

    <body>
        <h1>Welcome to my EJS template!</h1>
        <p>
            <%= user.name %>
        </p>
    </body>

    </html>

And our route looks like this now:

    router.get("/user_data", (req, res) => {
        res.render("./user/user.ejs", {
            user: {
                name: "Dustin"}
        })
    })
