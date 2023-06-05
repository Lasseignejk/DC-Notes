const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const User = require("./User")

mongoose.connect(process.env.MONGODB_URI)

async function run() {
    try {
    const user = await User.create(
        {
            name: "Hunter", 
            age: 2,
            hobbies: ["cycling", "running", "playing Zelda"]
        })
    console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}

run()