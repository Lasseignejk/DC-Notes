# Installing Next.js
    npx create-next-app@latest ./
The ./ will ensure that the app is created within the current repository.

You'll be asked if you want to install TS, ESLint, or Tailwind. Say yes or no to each.

Once you get through all the options, it'll install 
    react, react-dom, next, tailwindcss, postcss, and autoprefixer

## The app folder 
The most important folder 

Inside, there are files like `layout.js`, `page.js`, and `globals.css`.

### layout.js
The `layout.js` file is the main entry point of our application. All other components are nested inside, as its children.

As a result, any code you write on this page, such as `<h2>Hellooooo</h2>`, will appear on every route page. This helps you create a layout or template for all your pages. (Navs, footers, sidebars, etc.)

The layout file also allows you to change the appearance of an html document. You can change the language, metadata, links, script tags, and more.

### page.js
Represents the homepage route of the application.

If you look at it, it looks like a normal react page, but it's actually rendered on the server. 

By default, all components created in the app folder will be rendered on the server. If you want to instead render something on the client-side, you'll have to add a directive to the top of the page.

    1   "use client" 

You have to declare that at the top of any page where you're using state or other hooks.

<u>When should we use server-side vs client-side components?</u>


Check the Next.js documentation <a href="https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components">here</a> for a handy table

|  | Server Component  | Client Component |
| ----------- | ----------- | ------------|
|Fetch Data | O | X |
|Access backend resources (directly) | O | X |
|Keep sensitive information (access tokens, API keys, etc) | O | X |
|Keep large dependencies / Reduce client-side JS| O | X |
|Add interactivity and event listeners(onClick, onChange, etc) | X | O |
|Use State and Lifecycle Effects | X | O |
|Use browser-only APIs | X | O | 
|Use custom hooks that depend on state, effects of browser-only APIs | X | O |
|Use React Class components | X | O |

From the docs: 
> To improve the performance of your application, we recommend moving Client Components to the leaves of your component tree where possible.

> For example, you may have a Layout that has static elements and an interactive search bar that uses state. 

> Instead of making the whole layout a Client Component, move the interactive logic to a Client Component (e.g. <SearchBar />) and keep your layout as a Server Component. This means you don't have to send all the component JS of the layout to the client. 


### globals.css 
Houses the css for the app

## Routing System
All you need to create a route is to add a folder inside the app folder, with the name of the route. 

23.18
