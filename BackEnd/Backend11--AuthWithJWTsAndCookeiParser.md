[Learn JWT in 10 minutes with Express, Node, and Cookie Parser](https://www.youtube.com/watch?v=dX_LteE0NFM)

    npm i express cookie-parser jsonwebtoken

index.js

    const express = require("express");
    const cookieParser = require("cookie-parser");
    const path = require("path")
    const app = express()
    const loginRoute = require("./routes/login");
    const addRoute = require("./routes/add")
    const {cookieJwtAuth} = require("./middleware/cookieJwtAuth)
    const PORT = 8080

    app.use(
        express.urlencoded({
            extended: true
        })
    )
    app.use(cookieParser())

    app.get("/", (req,res) => {
        res.render("home")
    })

    app.get("/welcome", (req,res) => {
        res.render("welcome)
    })

    app.post("/login", loginRoute);
    app.post("/add", cookieJwtAuth, addRoute)

routes/login.js

    const jwt = require("jsonwebtoken")

    const getUser = async (username) => {
        return {usrId: 123, password: "123456", username}
    };

    module.exports = async (req,res) => {
        const {username, password} = req.body;

        const user = await getUser(username);

        if (user.password !== password) {
            return res.status(403.json({
                error: "invalid login",
            }))
        }

        delete user.password;

        // the important part
        const token = jwt.sign(user, process.env.MY_SECRET, {expiresIn: "1h"});

        res.cookie("token",token, {
            httpOnly: true,
        })
        return res.redirect("/welcome")
    }

middleware/cookieJwtAuth.js

    const jwt = require("jsonwebtoken");

    exports.cookieJwtAuth = (req,res,next) => {
        const token = req.cookies.token;
        try {
            // The important part
            const user = jwt.verify(token, process.env.MY_SECRET);
            req.user = user;
            next()
        } catch (err) {
            res.clearCookie("token")
            return res.redirect("/")
        }
    }

The middleware here looks at the cookie, extracts the token, and compares the secret. 