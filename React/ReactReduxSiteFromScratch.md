## Installation

Install React via Vite

    npm create vite@latest
    npm install

Install dependencies

    npm i react-router-dom dotenv @reduxjs/toolkit react-redux

If using Tailwind:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

If using FontAwesome:

    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/react-fontawesome@latest

## Delete

- Delete the assets folder inside 'src'
- Delete 'app.css'
- Delete everything inside 'index.css'.

- Inside 'App.jsx' delete the import for 'app.css' and the import for the logo. Delete everything inside the return statement except for the outer-most div
- Inside 'index.html' delete the svg image link in the head and change the title of the document to something else

## If using Tailwind:

Insert this into index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

... and this into the tailwind config file

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

## File Structure

Inside 'src,' make two more folders: 'components' and 'reducers.'

Inside the top-most folder, make a .env file. Make sure to add it to the .gitignore file. Also create a store.js file.

## .env File with Vite

When adding something to the .env file, it MUST start with

    VITE_

Then when you want to use that value, you MUST preface it with

    import.meta.env.

For example:

    <!-- In the .env file -->
    VITE_API_URL="http://www.api"

    <!-- In the .jsx file -->
    const rawData = await fetch(import.meta.env.VITE_API_URL);
