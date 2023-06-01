# Elephant SQL 

  "development": {
    "username": User & Default database,
    "password": Password,
    "database": User & Default database,
    "host": Server,
    "dialect": "postgres"
  },

# Using Router

Make a new top-level folder called 'routes'. Inside, make a file named 'clinicRoutes.js'. 

Remove all of your clinic routes from the index.js and put them in that file. At the top, copy or remove all the stuff from index.js that your clinic routes need. For example: 

    const express = require('express')
    const {Op} = require("sequelize");
    const router = express.Router()
    const {Clinics} = require("../models")

Then, on your routes, change all of the app.gets etc. to router.get.

At the bottom, include this:

    module.exports = router

This exports the routes on this page to the index.js. All the routes are contained within 'router' because we put ROUTER in front of all our routes. It's not app.get or app.post now, it's router.get, router.post.

On your index.js, now you just have to require that clinicRoutes.js file. 

    const clinicRoutes = require("./routes/clinicRoutes")

And tell the index.js to use that. 

    app.use("/clinic", clinicRoutes)

Now, that /clinic, is PART OF THE ROUTE. All the routes included in the clinicRoutes.js file have their routes but they now have /clinic in front of them. So for this route:

    router.get("/all_clinics", async (req,res) => {
        const allClinics = await Clinics.findAll()
        res.send(allClinics);
    })

The path looks like this:

    localhost:3012/clinic/all_clinics
