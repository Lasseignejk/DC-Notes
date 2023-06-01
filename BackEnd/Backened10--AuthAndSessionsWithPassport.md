
Must have an instance of Sequelize
- If a sequelize instance is not passed in, an error will be thrown. 
If you do not pass it a model, one will be created and available for you to access using the SequelizeSessionStore instance 

at the top of your main index.js: 

    const passport = require("passport")
    const LocalStrategy = require("passport-local").Strategy 

Then use it because it's middleware 

    passport.use(
        new LocalStrategy(async(email, password, done) => {
            const userToFind = await User.findOne({
                where: {
                    email: email,
                },
            })
            const passwordMatch = await bcrypt.compare(
                password,
                userToFind.password
            );
            if(passwordMatch) {
                return done(null, userToFind)
            } else {
                return done(null, false, {message: "email or password did not match, please try again"})
            }
        })
    )

Passport has something called 'strategies.' That's basically how we authenticate a user, locally (like I'll check it myself), with google, with facebook, etc.
