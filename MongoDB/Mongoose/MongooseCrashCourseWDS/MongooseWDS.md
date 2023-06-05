[Mongoose Crash Course](https://www.youtube.com/watch?v=DZBGEVgL2eE)

    npm init -y
    npm i mongoose 
    npm i --save-dev nodemon

To connect with mongoose, all you need is this: 

    const mongoose = require('mongoose')
    const dotenv = require("dotenv")
    dotenv.config()

    mongoose.connect(process.env.MONGODB_URI)

If you have MongoDB installed on your computer, you can put the localhost address of your database in place of the process.env part.

# Schemas vs Models

MongoDB/Mongoose has `schemas`, basically what the structure of your data looks like. A `user` will have a username, age, birthday, etc. 

A `model` is just a schema in a form that you can actually use. Like the data of one user from the database.

# Creating a schema 
Make a `User.js` file. 

    const mongoose = require("mongoose")

    const userSchema = new mongoose.Schema({
        // here is where you define what the data will look like. 
    })

`.Schema` takes in an object, with the usual keys/values. Here, the keys are what will display in the database and the values are what the `type` is.

So, if we want our user to have a name and age, we'll put this inside the object: 

    name: String,
    age: Number

Once you're done with the schema, it's time to make the model. At the bottom of the file, we write `mongoose.model()`. `.model()` is a function that takes in the name of our schema, `User` (this is what we'll see in MongoDB, a collection of 'Users'), and the name of our schema. 

    mongoose.model("User", userSchema)

Let's require that model in the script.js file so we can use it.

# Create a new User
In the `script.js` file, require the `User` model and type `const user = new User({})`. Inside of the object goes the keys/values we want to be associated with that User. Since we defined in our schema that a User should have a name and an age, we can pass those values in.

    const user = new User({name: "Jaye", age: 2})

Of course, that value isn't being saved anywhere currently. It's not being sent to the database, it just exists here.

In order to send it, we use `user.save()` because that's the name of the variable we're storing our new User in.

Because it's asynchronous, we can use .then() on it. Or, we can use async/await 

    async function run() {
        const user = new User({ name: "Jaye", age: 2})
        await user.save()
    }

Start the server, it'll send that data, check Atlas and it's there!

The second way to create a new user is by actually using the `.create()` method on the User class itself. So instead of above, it'll look like this: 

    async function run() {
        const user = await User.create({name: "Jaye", age: 2})
    }

It also automatically saves for you.

# More Schema Types

    const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
        email: String,
        createdAt: Date,
        updatedAt: Date,
        bestFriend: mongoose.SchemaTypes.ObjectId,
        hobbies: [String]
        address: {
            street: String,
            city: String
        }
    })

The `bestFriend` type says that it is referring to the ObjectId, which is automatically created when you create a new entry in the database, of another User.

With `address`, you can define it that way or you can actually make an entirely separate schema for it (sounds like Typescript)

So above the userSchema we can type: 

    const addressSchema = new mongoose.Schema({
        street: String,
        city: String,
    })

And then on the `address`:

    address: addressSchema

# Required
Our schema looks great and all, but what if we want it to be more complicated? What if we want more than just the types, we want certain things to be required. If we want to use more than types, we can pass an object as the value.

    email: {
        type: String,
        required: true,
        lowercase: true,
    }

`lowercase` will make the email entered lowercase for you.

    createdAt: {
        type: Date,
        default: () => Date.now()
    }

Is there a date attached to this thing? If not, get the date for NOW and attach it.

You can also use the `immutable: true` on parts of the schema to make them unable to be edited. If you try to update it, you won't get an error because it's just being ignored completely.

    age: {
        type: Number,
        min: 1
    }

You can use `min` and `max` to define what the min/max for that value should be. 