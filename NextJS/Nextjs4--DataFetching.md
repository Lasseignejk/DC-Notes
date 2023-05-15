# Data Fetching 
Next.js has three options for data fetching: 
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Generation (ISR)

With SSR, data is fetched fresh each time there is a request. Each request to the server triggers a new re-render and data fetch. 

To make something SSG, remove the `{cache: 'no-store'}` line after the fetch url. By default, it will now fetch the data and cache it. Use this for content that doesn't change frequently -- blog posts, documentation, etc. 

For ISR, we add a new parameter to the fetch request. Instead of `cache`, like SSG, we use `{next: {revalidate: 10}}`. It combines the perks of SSR and SSG to make dynamic content in static sites. The `revalidate` section is an amount of time after which you want to re-fetch the data so your page is always up-to-date. Best of both worlds for dynamic content.