# API Endpoints
How we make an endpoint in a regular Express server: 

    const express = require('express')
    const app = express()

    app.get('api/users', (req,res) => {
      // Handle GET request for /api/users
      const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'}
      ];

      // Send the users as a response
      res.json(users)
    });

    app.listen(3000, () => {
      console.log('Server is listening on port 3000')
    })

There are two different ways to make route handlers in Next.js.
1. The first is to make file-based handlers, folders inside the api folder within the app folder. (`/app/api/nameOfHandler/route.js`)
2. The second is to add the route.js file directly in your app folder. (`/app   /api   /posts   layout.js   page.js   route.js`) But, if you want a route to start with `/`, like the page.js does, those will conflict. It'll look at them both and get confused -- which one is a frontend route? Which is a backend? 

<br>

    /app
      /users
        route.js
        page.js XXX

Because of this, route 1 is probably the best way to go -- put all of the backend routes within the /api folder. 

So, to make a backend route for the posts, the file structure will look like this: 

    /app
      /api
        /users
          route.js

To create a route that does the same thing as the Express route above, all we have to type is this: 

    //route.js
    export async function GET(request) {
      // Handle GET request for /api/users
      // Retrieve users from the database or any data source 
      const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'}
      ];

      // Send the users as a response 
      return new Response(JSON.stringify(users))
    }

The route to the above looks like this: `http://localhost:3000/api/users`