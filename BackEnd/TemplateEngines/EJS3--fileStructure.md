## folders: 
1. public / css
2. routes
3. views / partials

## main index.js: 

    const express = require("express")
    const app = express()
    const PORT = 3005
    const userRoutes = require("./routes/user")


    app.set("views", "./views")
    app.set("view engine", "ejs")
    app.use(express.static(__dirname + "/views/partials"))
    app.use(express.static(__dirname + "/public/css"))



    app.use("/user", userRoutes)


    app.listen(PORT, console.log(`listening on port ${PORT}`))