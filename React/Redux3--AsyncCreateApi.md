📂 TA-work/week11/day2/morning/vite-project

📓 [RTK Query Docs](https://redux-toolkit.js.org/rtk-query/overview) 
# RTK Query and create API
DON'T use RTK Query AND thunks in the same app. Pick one, stick with it. 

## The Slice

    import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    const fetchPokemon2 = createApi({
        reducerPath: "fetchPokemon2",
        baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
        endpoints: (builder) => ({
            getPokemon: builder.query({
                query: () => `/pokemon`,
            }),
        }),
    });

    export const { useGetPokemonQuery, useLazyGetPokemonQuery } = fetchPokemon2;

    export default fetchPokemon2;

`reducerPath` is what'll show in the redux dev tools. That's the name of your state variable. 

The `baseUrl` does the BASE stuff. It's the part of the api url that doesn't change, no matter the endpoint. 

You HAVE to have an endpoint. The `/pokemon` will be added to the end of the base url. So when you run getPokemon, the url now looks like `http://pokeapi/co/api/v2/pokemon`

If you `console.log(fetchPokemon2)``, you'll see that it creates an object with the queries, middleware, reducers, etc.

`useGet` will run immediately, every time the component mounts. `useLazy` will wait for an event to trigger.


## Configure the store
    import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
    import logger from "redux-logger";

    import pokeReducer from "./reducers/pokeSlice";

    import fetchPokemon2 from "./reducers/pokemonCreateAPISlice";

    export const store = configureStore({
        reducer: {
            // reducer created with asyncThunk
            poke: pokeReducer,

            // reducer made with createApi
            [fetchPokemon2.reducerPath]: fetchPokemon2.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger).concat(fetchPokemon2.middleware),
    });

The `[]` on the `[fetchPokemon2Reducer]` is an example of `computed property names` in JavaScript. More information in <strong>Redux2--LoggerAndThunks</strong>.

⚠️ In addition to setting up the reducer differently, you also have to update the middleware.

By default, createAPI will create the state variable and the initial state for you. 

From the redux dev tools: 
    fetchPokemon2
        queries: {}
        mutations: {}
        provided: {}
        subscriptions: {}

## In App.jsx
### Example with `useLazy`

    import {useLazyGetPokemonQuery} from "./reducers/pokemonCreateAPISlice

    function App() {
        const [trigger, {data, isLoading, error}] = useLazyGetPokemonQuery();
        console.log(data)

        const handleClick = () => {
            trigger()
        }

        return (
            <button
                className="border-green-400 bg-green-400 rounded-2xl px-3"
                onClick={handleClick}>
                Fetch Pokemon
			</button>
        )
    }

The data will show in the console once you click the button.

### Example with `useGet`
    import {useGetPokemonQuery} from "./reducers/pokemonCreateAPISlice

    function App() {
        const {data, error} = useGetPokemonQuery()
        console.log(data)

        return (
            <p>Example with `useGet`</p>
        )
    }

Because `useGet` runs immediately, you'll see the data in the console when the page loads.