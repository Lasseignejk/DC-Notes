<a href="https://www.youtube.com/watch?v=wm5gMKuwSYk">Next.js Full Course 2023</a>

# What does Next.js have that React doesn't? 
- Next.js simplifies the development process 
- React renders on the client, Next.js lets you choose to render on the client or on the server
- Routing in Next.js is through the file system. For example: 
`app/blog, about, profile, services`
Each of those folders become a route on the site. 
`localhost:8080/blog`
- Next.js is an extension of React

## What's the difference between client-side/server-side rendering? 
- In client side, the user makes a request for a page to the server. The server sends the html and the js to the client, where the browser interprets and displays it
- In server side, the server renders it before it transmits it to the browser.
- Server-side rendering is much better for SEO.

## Serverless APIs 
- Next can create endpoints without the need for a traditional server
- So you can build and deploy an API without having to manage server infrastructure or worry about scaling the server to meet demand.
- To make those endpoints, all you have to do is put a `route.js` file inside of one of your folders in the file structure.

## Automatic Code Splitting 
- Technique that breaks JS code into small, manageable chunks that can be loaded <strong>as needed</strong>
- This lowers the amount of time for a page to load and optimizes the UX
- You can do this in React, but it's not automatic so as your app grows, you have to do lots of configuration 