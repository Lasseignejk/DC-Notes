Install the following dependencies: 

    npm i express passport passport-local express-session connect-session-sequelize sequelize bcrypt

# Configure the session store
At the top of your main index.js: 

    const express = require("express")
    const app = express()
    const port = 3000
    const session = require("express-session)
    const SequelizeStore = require("connect-session-sequelize")(session.Store);
    const {sequelize} = require("../models) // adjust if necessary

Then we're going to make a new sessionStore: 

    const sessionStore = new SequelizeStore({
        db: sequelize,
    })

# Configure Passport
To set up `Passport`, add this at the top: 

    const passport = require("passport")
    const LocalStrategy = require("passport-local").Strategy

And add this below somewhere: 

    app.use(
        new LocalStrategy(
            {
                usernameField: "email", // Field name for the email in the req.body
                passwordField: "password", // Field name for the password in the req.body
            },
        )
    )

Next, underneath the local strategy, we're going to have an async function with a try catch to find a user with the credentials they've entered. 

        app.use(
        new LocalStrategy(
            {
                usernameField: "email", // Field name for the email in the req.body
                passwordField: "password", // Field name for the password in the req.body
            },

            async (email, password, done) => {
                try {
                    // Find the user by email
                    const userToFind = await User.findOne({
                        where: {
                            email: email,
                        },
                    });
                    //check if the user exists and compare the password
                    if (!userToFind) {
                        return done(null, false, {
                            message: "Invalid email or password",
                        });
                    }
                    const passwordMatch = await bcrypt.compare(
                        password,
                        userToFind.password
                    )
                    if (passwordMatch) {
                        return done(null, userToFind); // User authenticated successfully {id: name, created}
                    } else {
                        return done(null, false, {
                            message: "Invalid email or password",
                        });
                    }
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

After allll of that, we have to serialize the user to store it in the session. 

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

Then deserialize them. We use deserialize to retrieve user data from the session. 

    passport.deserializeUser(async (id, done) => {
        try {
            const userToFind = await User.findOne({
                where: {
                    id: id,
                },
            });
            done(null, userToFind);
        } catch (error) {
            done (error)
        }
    })

Last, we initialize passport and session. 

    app.use(passport.initialize());
    app.use(passport.session())

# Configure Express session
Near the top of the index.js, configure the Express session by adding this code: 

    app.use(
        session({
            secret: "your-secret-key", // replace with a secret key for session encryption
            resave: false,
            saveUninitialized: false,
            store: sessionStore
        })
    )

# Protect routes 
In the index.js, create a function for authentication: 

    function authenticate(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        console.log(err, user, info);
            if (err) {
            return next(err);
            }
            if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
            }
            req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            next();
            });
        })(req, res, next);
    }

This `authenticate` function can be used as middleware. Let's use it on our login route: 

    app.post("/login", authenticate, (req,res) => {
        res.send("Successfully logged in")
    })

And here's an example of a `sign_up` route which doesn't need authentication: 

    app.post("/sign_up", async (req,res) => {
        const {email, password} = req.body;
        if (!email) {
            res.status(400).send("Please include an email);
            return
        }
        if (!password) {
            res.status(400).send("Please include a password)
            return
        }
        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password,10);
            // Create a new user with the hashed password
            const userToCreate = {email: email, password: hashedPassword};
            const newUser = await User.create
        }
    })