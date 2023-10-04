# Routing System

All you need to create a route is to add a folder inside the app folder, with the name of the route.

    /app
        /user
            page.js

Inside `page.js`, you can write your react component like normal and you can view it at `localhost:3000/user`

## Nested Routes

Without Next.js, nested routing looks something like this:

    const App = () => {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='posts' element={<Posts/>} />
                        <Route path='new' element={<NewPost/>} /> {/* A nested route */}
                        <Route path=':postId' element={<Post/>} /> {/* A dynamic route */}

                    </Route>
                </Routes>
            </Router>
        )
    }

With Next.js, all we have to do is nest the folders.

    /app
        /posts
            page.js
            /new
                page.js

## Dynamic Routes

/posts/:postId (see nested route for an example of a dynamic route in normal react)

With Next.js, we add square brackets around the folder name.

    /app
        /posts
            page.js
            /new
                page.js
            /[postId]
                page.js

## Layout.js in Route Folders

In any of the route folders, you can have a layout.js file to share components between those routes. Components that are only shown on those specific route pages.

    /app
        /posts
            page.js
            layout.js
            /new
                page.js
            /[postId]
                page.js

## Loading.js

In any of the subfolders, you can add a loading.js file which will hold spinners/ skeletons to load when the page is loading.

    /app
        /posts
            page.js
            layout.js
            loading.js
            /new
                page.js
            /[postId]
                page.js

## Error.js

Similar to loading.js, the error.js file will appear if there is an error.

Error components must be Client components, so don't forget to declare that at the top of the page.
