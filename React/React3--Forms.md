# Forms

## Install Tailwind

(install tailwind with vite documentation)[https://tailwindcss.com/docs/guides/vite]

## Set up Tailwind

Go into the tailwind.config.cjs.

Copy and paste code from documentation

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

Close tailwind.config, go to index.css, delete everything inside the index.css and add code from documentation

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Close out of all files and open app.jsx; delete line 3 where the css is imported and line 2 where the logo is imported. Delete everything inside the div.

Make a components folder with a file inside called SignUp.jsx

Paste a form in there from tailwind, change the classes to className

## Edit the form

We need to make our input fields have a value that is in state.

import useState at the top, then add:

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

So we need to track the state every time the input field changes, every time the user types something. TO practice, put this on one of your inputs

    onChange={() => console.log("joe is typing")}

Every time you put something in that input, it should console log that. Level up:

    onChange={(e) => console.log(e.target.value)}

That will console log every time you put something new.

    j
    jo
    joe
    joei
    joeis   etc.

To put that in state:

    onChange={(e) => setUsername(e.target.value)}

And we can do the same logic on email and password.

Now look at the code. There is no difference between our three state variables, which means there might be a more efficient way to do this. Make it more dynamic.

## Make it more generic

ALWAYS EXPECT your form will need to be scalable. You don't know if at some point more input fields will need to be added to your form.

Make a new state variable, signUpForm:

    const [signUpForm, setSignUpForm] = useState({});

Make a helper function, setFormState:

    const setFormState = (e) => {
    	setSignUpForm({
    		...signUpForm,
    		[e.target.name]: e.target.value,
    	});
    };

And change all your inputs to:

    onChange={(e) => setFormState(e)}

This is still not considered to be a controlled form. The state can be physically changed in the dev tools and the UI does not reflect that change. So the user typed in their username, I go in and change state, and now they're different. In a controlled form, they will always be the same.

## Make it controlled

Give each input a value. The value should be something like this:

    value={signUpForm.username}

Now if we go and change the state, it also changes it on the UI.

If you do not have an onchange function but have a default value, you'll get a warning in the console. You ALSO won't be able to change the state by typing in the input field. You CAN'T type in the input field. You can only update it by changing the state directly. So for a form to be controlled you need BOTH an onChange and a value.

It's signUpForm.username because we gave that input a name of username. (name="username)

## Form Validation

Treat your user like they have literally no idea what they're doing. You need to check what they type and make sure it's correct.

When do we validate? When the user hits sign up? As they're typing?

Let's make a new function.

    	const authenticateForm = () => {
            // username needs to be at least 6 characters long and shorter than 14 characters
            if (signUpForm?.username?.length < 6 || signUpForm.username.length > 14) {
                window.alert(
                    "Username needs to be at least 6 characters and shorter than 14"
                );
            }
            // password 1 special character, at least 3 numbers, at least 6 characters
            if (signUpForm?.password?.length < 6) {
                window.alert("Password needs to be at least 6 characters");
            }
            // email needs ONE @ symbol, check if it's a valid email
            if (!signUpForm?.email?.includes("@")) {
                window.alert("Please enter a valid email.");
            }
        };

## Install the toast package with npm

Toast makes nice little popup alerts so we don't need to use the window alerts

(Toastify website)[https://www.npmjs.com/package/react-toastify]

## Setting up the backend

## UseEffect

We use useEffect to run something immediately on page load. It ensures you get data back and you can use the data. When the component is mounted, it runs this function immediately.

    useEffect(() => {
          const fetchDitto = async () => {
    			const getDitto = await fetch(
    				"https://pokeapi.co/api/v2/pokemon/ditto"
    			);
    			const jsonDitto = await getDitto.json();
    			setDitto(jsonDitto);
    		};
      fetchDitto();
    },[])

DO NOT SET STATE INSIDE OF A USE EFFECT -- if you do, you'll trigger an infinite rerender. Doing it inside of a function like we have it is ok, but putting 'setDitto' underneath the 'fetchDitto' on line 20 will cause an infinite rerender.

    // DON'T RUN THIS
    useEffect(() => {
        const fetchDitto = async () => {
    			const getDitto = await fetch(
    				"https://pokeapi.co/api/v2/pokemon/ditto"
    			);
    			const jsonDitto = await getDitto.json();
    			setDitto(jsonDitto);
    		};
      fetchDitto();
      setDitto(jsonDitto);
    })
