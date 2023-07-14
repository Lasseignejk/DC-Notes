📂 TA-work/week11/day2/morning/vite-project

# ✨ Logger ✨ 
📓 [Docs for logger](https://www.npmjs.com/package/redux-logger)

Logger middleware keeps track of your dispatched actions. 

Whenever you update state, logger catches it and prints it in the console.

Very good for debugging!

## Install Logger
`npm i --save redux-logger`

## Setup
Inside of `store.js`, you can add `logger` as a middleware. 

Middleware goes after your reducers, like this: 

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

# Thunk 
A middleware often used with redux, thunks are functions that can be delayed from executing.  

👉👉👉 [Diagram for where thunk fits into the redux flow](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

Normally, Redux actions are plain objects that describe an event that occurred and are immediately dispatched to the reducers. However, with thunks, you can dispatch functions instead of plain objects. These functions are called thunks.

Thunks give you the ability to perform async operations, such as making API calls, before dispatching the actual actions. This is useful when you need to fetch data from an external source or perform other async operations before updating the Redux store. 

We used to have to install a whole bunch of other stuff, but thunks are now in redux-toolkit

    import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

    const initialState = {
        value: [],
        loading: false
    };

    export const fetchPokemon = createAsyncThunk("data/getPokemon", async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        const json = await data.json()
        return data;
    });

    export const pokeSlice = createSlice({
        name: "poke",
        initialState,
        reducers: {},
        extraReducers: {
            [fetchPokemon.pending]: (state) => {
                state.loading = true
            },
            [fetchPokemon.fulfilled]: (state, {payload}) => {
                state.loading = false;
                state.value = payload
            }, 
            [fetchPokemon.rejected]: (state) => {
                state.loading = false;
            }
        }
    });

    export default pokeSlice.reducer;

The `data/getPokemon` part is whatever you want it to be; something you come up with that makes sense to you. The name of the action. 

⚠️ Remember, reducers are pure functions that act on state. <strong>They should only be responsible for one thing.</strong> If you need multiple things to happen when a reducer is triggered, you can use an `extraReducer`. One way to think about extraReducers is that they're addons, or extensions, for regular reducers. 

So when the `fetchPokemon` action is dispatched and the api call is initiated, the `state.loading` is set to `true` to show that the fetching is in progress. The others are then triggered, depending on if the call comes back as fulfilled or rejected. If it is fulfilled, the state is updated with the payload.

❓ `fetchPokemon.fulfilled` is in square brackets because that is an expression that will evaluate to a value dynamically. This is called `computed property names` in JavaScript. Here are more examples from [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):

    const items = ["A", "B", "C"];
    const obj = {
        [items]: "Hello",
    };

    console.log(obj);   // A,B,C: "Hello"
    console.log(obj["A,B,C"]);   // "Hello"


    const param = "size";
    const config = {
        [param]: 12,
        [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
    };

    console.log(config);   // {size: 12, mobileSize: 4}

# Example of Using Thunks with Supabase

## Setup

    npm i @supabase/supabase-js

### Slice.js 

    import { createClient } from "@supabase/supabase-js";

    const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_KEY
	);

    const initialState = {
        values: [],
        loading: false,
    };

    export const fetchProducts = createAsyncThunk("data/getProducts", async () => {
        const { data } = await supabase.from("ProductsDatabase").select();

        const parsedData = data.map((obj) => {
            const parsedItems = JSON.parse(obj.items);
            return { ...obj, items: parsedItems };
        });

        return parsedData;
    });

    export const productsSlice = createSlice({
    	name: "products",
        initialState,
        reducers: {},
        extraReducers: {
            [fetchProducts.pending]: (state) => {
                state.loading = true;
            },
            [fetchProducts.fulfilled]: (state, { payload }) => {
                state.loading = false;
                state.values = payload;
            },
            [fetchProducts.rejected]: (state) => {
                state.loading = false;
            },
        },
    });

    export default productsSlice.reducer;

The spread operator is used to keep everything in the object the same, but then we update the items to be equal to the parsedItems. This might not be needed, depending on the shape of the data that comes back.

### App.js

    import { useSelector, useDispatch } from "react-redux";
    import {fetchProducts} from "./reducers/productSlice";

    function App() {
    	const { values } = useSelector((state) => state.products);
        const dispatch = useDispatch();

        return (
            <>
                <button
                    onClick={() => dispatch(fetchProducts())}>
                        Fetch Products
                </button>
                <div className="flex flex-wrap justify-center gap-5">
                    {values.length != 0 &&
                        values?.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col w-36 text-center rounded-2xl shadow-xl top_shadow hover:scale-105 duration-100 ease-in">
                                <p className="text-xl underline">{item.name}</p>
                                <div>
                                    {item.items != null &&
                                        item?.items?.map((product) => (
                                            <p>{product.description}</p>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </>
        )
    }
