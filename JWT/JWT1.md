# JWT

The same way a session is being created, same thing happens with a JWT, but we send the JTW to the front end

A way to get access to a user for a set amount of time as they logged in. Part of authentication. Login, check if the user is in the database, verify them, send a token. When they log out, destroy the token. KInda like a cookie. It's in local storage. A way to authenticate

## Benefits

You can tell redux to look at store and see if they're logged in

Not just for React; can be used with basically anything.

Sessions: auth is on the server

JWT: auth is on the server, then sent to the frontend

JWT.io

JWTs have expiration times, after which it is no longer valid.

fetches are http requests. inside that request is an object. The 'request object.'

There are things like params, headers, mode, etc. There is also a method. That's where you have to specify "GET","POST", etc.

Another part is the body. Whatever is inside the body, JSON.stringify(data),

servers listen for http requests.

You can not send bodies in get requests. You can only send them in posts. You can send headers and params, but not in the body. That is where your JWT exists: in the params or headers.

on login, check the username/pw, jwt.sign({token:user})

check the user, store it in an object

    const user = await Users.findOne()
    jwt.sign({token:user})

This is why you need to always store an await in a variable. That way you can see the response. res.send(user)

That token goes to your client's local storage.

localstorage: token
{
username,
email,
id,
}

So anywhere on the frontend, we can check the token and pull data out of it.

Pass this token everytime we make a new fetch. Send the token too, check it on the backend. If it's valid for the information they're trying to access, send them. Let them go. If not, redirect to login or say they don't have authorization to view that page.
