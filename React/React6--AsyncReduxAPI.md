[docs](https://redux-toolkit.js.org/rtk-query/overview)
# RTK Query and create API
DON'T use RTK Query AND thunks in the same app. Pick one, stick with it. 

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
    console.log(fetchPokemon2);

    export const { useGetPokemonQuery, useLazyGetPokemonQuery } = fetchPokemon2;

    export default fetchPokemon2;

`reducerPath` is what'll show in the redux dev tools. That's the name of your state variable. 

The `baseUrl` does the BASE stuff. It's the part of the api url that doesn't change, no matter the endpoint. 

You HAVE to have an endpoint. The `/pokemon` will be added to the end of the base url. So when you run getPokemon, the url now looks like `http://pokeapi/co/api/v2/pokemon`

If you console.log (fetchPokemon2), you'll see that it creates an object with the queries, middleware, reducers, etc.

`useGet` will run immediately, every time it mounts. `useLazy` will wait for an event to trigger.


## Configure the store
    import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
    import logger from "redux-logger";

    import counterReducer from "./reducers/counterSlice";
    import pokeReducer from "./reducers/pokeSlice";
    import productsReducer from "./reducers/productsSlice";

    import fetchPokemon2 from "./reducers/pokemonCreateAPISlice";

    export const store = configureStore({
        reducer: {
            counter: counterReducer,
            poke: pokeReducer,
            products: productsReducer,
            [fetchPokemon2.reducerPath]: fetchPokemon2.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger).concat(fetchPokemon2.middleware),
    });

The `[]` on the `[fetchPokemon2Reducer]` part says that the stuff in the `[]` is a variable. 

By default, createAPI will create the state variable and the initial state for you. 

from the redux dev tools: 
    fetchPokemon2
        queries: {}
        mutations: {}
        provided: {}
        subscriptions: {}

## In App.jsx
    import {useLazyGetPokemonQuery} from "./reducers/pokemonCreateAPISlice

    function App() {
        const [trigger, {data, isLoading, error}] = useLazyGetPokemonQuery();

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