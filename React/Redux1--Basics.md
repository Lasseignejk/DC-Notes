# Redux

[Redux gif](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

[Redux documentation](https://redux-toolkit.js.org/)

Redux is overkill for most of our projects. It's one of the more popular state-management tools for React.

Two trains of thought: Redux and React Context.

They do the same thing -- global state.

We need that global state because it gives us a <strong>single source of truth</strong>. If we update the frontend, we update the backend. If we update the backend, we update the frontend.

## What is a pure function?

-   Given the same input, it will always return the same output.
-   Produces no side effects
-   It relies on no external mutable state

    function square(x) {
    return x\*x
    }

## What is an impure function?

-   Output can be influenced by external forces
-   Has side effects

    function square(x) {
    update x in Database(x);
    return x \* x
    }

    function squareAll(items) {
    for (let i = 0; i < items.length; i++>) {
    items[i] = square(items[i])
    }
    }

-   Basically, your functions should do WHAT YOU NAME THEM TO DO. And only let them do ONE thing. Don't have multiple things happening in one function, break it down into smaller bits.

## Avoiding Mutations

There are two key points for avoiding mutations

-   Using `concat()`, `slice()`, and `[...spread]` for Arrays
-   Using `Object.assign()` and something else for Objects

## Parts of Redux

-   The Store -- The state of your whole application is stored in an object tree within a single store.
-   Actions -- The only way to change the state is to emit an action, an object describing what happened.
    -   State is immutable, it cannot change in place.
-   Reducers -- To specify how the state tree is transformed by actions, you write pure reducers.

### 1. The Store

-   State of the entire application lives in the store
-   A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
-   A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore

-   Let's use Amazon as an example. There's a warehouse(store) with employees(reducers) and shelves of products(state). An order comes in to the warehouse for a kleenex box. A call goes out -- 'Who's job is to get a kleenex box?' ONE employee raises his hand -- 'I do that!' So that employee goes to the shelves and gets the box for the customer. That employee's ONLY JOB is to get kleenex. They don't get anything else, they don't control anything else, they don't affect anything else.

### 2. Actions

-   The only way to change the state is to emit an action, an object describing what happened.
-   Nothing more than JS objects
-   Every action needs a type property for describing how the state should change
-   Need a payload
-   Best practice to wrap every action within a function, called action creator.

### 3. Reducers

-   To specify how the state tree is transformed by actions, you write pure reducers\*.
-   Just a plain JS function with two parameters
    -   "In essence, a reducer is a function which takes two arguments -- the current state and an action -- and returns based on both arguments a new state"
-   Reducer knows how to produce the next state because of actions
-   When the store needs to know how an action changes the state, it asks the reducers.
-   `rootReducer` combines all of the reducers

## Install Redux

    npm install @reduxjs/toolkit react-redux

## Prop-Drilling -- the act of passing and calling props all the way through our application

So we've made a mini site with lots of components and we've prop drilled all over the place. But what if the data just keeps growing? What if our user needs different profiles based on different locations or something?

What if you fix one thing and then the data changes again? And again? And again? Do we just keep prop drilling?

Nope, we use global state! We can give state to everything, immediately, without passing props.

Redux is global state management. Right now, state is only defined in App, and if something wants to use it, we have to pass it all the way down. Using Redux, we can create a 'store.'

Redux uses actions, stores, and reducers.

Actions are like our setUserLoggedIn.

Reducers are just functions that act on state.

## Setting up Redux

We have to go where everything starts -- main.jsx

    import { store } from "";
    import { Provider } from "react-redux";

Wrap your app in the provider

    <React.StrictMode>
    	<Provider>
    		<App />
    	</Provider>
    </React.StrictMode>

Then pass your provider the prop of store

    <Provider store={store}>

Now let's create our store. Make a new file in src called store.js. Inside that file, import

    import { configureStore } from "@reduxjs/toolkit";

This import exports a variable called store.

Inside src, make a new folder called 'reducers'. Inside here you define your functions and your state.

Inside reducers, make a file named Counter.js or CounterSlice.js. We're going to do two things here. First, import:

    import {createSlice} from "@reduxjs/toolkit"

Then, create a variable called initialState and give it the initial value of the variable.

    const initialState = {
        value: 0
    }

Next:

    export const counterSlice = createSlice({
        name: "counter",
        initialState,
        reducers: {
            increment: (state) => {
                state.value += 1;
            },
            decrement: (state) => {
                state.value -= 1;
            },
            incrementByAmount: (state) => {
                state.value += 1;
            },
        },
    });

Then export all of the reducers you made, like this:

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;

Finally, export default:

    export default counterSlice.reducer;

Now we're going to move to store.js. Import:

    import counterReducer from "./reducers/counterSlice"

Then:

    export const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
    });

Finally, finish the import statement for store in main.jsx

Now let's try and access that counter in UserSettings. First, import useSelector:

    import {useSelector} from "react-redux"

Then, pull the part of state you want:

    const counter = useSelector((state) => state.counter.value);

    <h2> The counter is at: {counter}</h2>

Once that's done, create two buttons, one to add and one to subtract. Add an on click. The onclick will take a dispatch function which in turn takes a function we made in the reducers.

To use dispatch, import useDispatch:

    import { useSelector, useDispatch } from "react-redux"

Then define it in a variable:

    	const counter = useSelector((state) => state.counter.value);
        const dispatch = useDispatch();

Then import the functions you want to pass to the dispatch:

    import { increment, decrement } from "../../reducers/counterSlice";

Then add everything to your onClick:

    <button onClick={() => dispatch(increment())}>increase</button>
    <button onClick={() => dispatch(decrement())}>decrease</button>

Setting up Redux is a pain. But if you do it right in the beginning, it'll make your life easier in the long run. Overkill for small projects, lifesaver in large projects.

For the increment by amount:

In the user settings, add this button:

    <button onClick={() => dispatch(incrementByAmount(2))}>
    			increment by 2
    		</button>

Then in the counterSlice:

    incrementByAmount: (state, action) => {
    		state.value += action.payload;
    	},

So the 2 passed in the userSettings goes to that function on counterSlice, goes into the action argument, which is an object, and that 2 is stored as a value with the key of payload.

## Anytime you want to change state, call dispatch. Then you have a way to track it.

<br>
You can still use the useState hook along with redux, but the important pieces of info should be in redux.

## Changing arrays in state

We want to click two buttons. One will add a student to the array, the other will remove the last student from the array. To do this, we need to make sure that we don't mutate our state. Use the `spread operator` and `slice` to properly update state.

`studentsSlice.js`

    import { createSlice } from "@reduxjs/toolkit";

    const studentsSlice = createSlice({
        name: "students",
        initialState: ["Jaye"],
        reducers: {
            // add yourself to the array
            addStudent: (state) => [...state, "Joe"],
            // remove the last student in the array
            removeLastStudent: (state) => [...state.slice(0, state.length - 1)]
        },
    });

    export const { addStudent, removeLastStudent } = studentsSlice.actions;
    export default studentsSlice.reducer;
