[docs for logger](https://www.npmjs.com/package/redux-logger)

Logger middleware keeps track of your dispatched actions. 

Whenever you update state, logger catches it and prints it in the console.

Very good for debugging!

## Install Logger
`npm i --save redux-logger`

## Setup

`store.js`

    import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
    import logger from "redux-logger";

    import counterReducer from "./reducers/counterSlice";
    import pokeReducer from "./reducers/pokeSlice";

    export const store = configureStore({
        reducer: {
            counter: counterReducer,
            poke: pokeReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    });

`getDefaultMiddleware` is deprecated but still works. It recommends you use `builder callback` notation instead. 

## Thunk 
Middleware often used with redux

A function that can be delayed from executing. 

Normally, Redux actions are plain objects that describe an event that occurred and are immediately dispatched to the reducers. However, with thunks, you can dispatch functions instead of plain objects. These functions are called thunks.

Thunks give you the ability to perform async operations, such as making API calls, before dispatching the actual actions. This is useful when you need to fetch data from an external source or perform other async operations before updating the Redux store. 

We used to have to install a whole bunch of other stuff, but thunks are now in redux-toolkit

    import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

    const initialState = {
        value: [],
    };

    const fetchPokemon = createAsyncThunk("data/getPokemon", async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        return data;
    });

    export const pokeSlice = createSlice({
        name: "poke",
        initialState,
        reducers: {},
    });

    export const {} = pokeSlice.actions;
    export default pokeSlice.reducer;

The `data/getPokemon` part is whatever you want it to be; something you come up with that makes sense to you. The name of the action. 

## Install Supabase 

    npm i @supabase/supabase-js

In app.jsx: 

    import { createClient } from "@supabase/supabase-js";

    const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_KEY
	);

### Thunk example with supabase and JSON.parse

    export const fetchProducts = createAsyncThunk("data/getProducts", async () => {
        const { data } = await supabase.from("ProductsDatabase").select();

        const parsedData = data.map((obj) => {
            const parsedItems = JSON.parse(obj.items);
            return { ...obj, items: parsedItems };
        });

        return parsedData;
    });

The spread operator is used to keep everything in the object the same, but then we update the items to be equal to the parsedItems.
