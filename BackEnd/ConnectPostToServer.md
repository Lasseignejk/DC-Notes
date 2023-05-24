# Error Handling & Destructuring 

## Error Handling

```
app.get("/get_all_users", (req,res) => {
    // this route will return either an error or the client, which is where we can run our queries. 
    connectionCreds.connect((err,client,release) => {
        if(err){
            // if we get an error, release the connection. stop the connection.
            release()
            console.error("Error connecting to database: ", err)
            res.status(500).send("Internal server error")
            return
        }
        client.query(`SELECT * FROM users;`, (err,result) => {
            release()
            if(err){
                console.error("Error in executing the query: ", err)
                res.status(500).send("Internal server error")
                return
            }
            res.send(result.rows)
        })
    })
})
```

## Destructuring 
Syntactic sugar

If you're accessing lots of stuff in the body, you can write it like this: 

```
const email = req.body.email
const username = req.body.username
const password = req.body.password
```

But that's a pain, so instead, we can write it this way: 

    const {email, username, password} = req.body

Make sure the variables match something in the req.body

## SQL Injection
NEVER INTERPOLATE INSIDE OF A SQL QUERY

    const sqlQuery = `INSERT INTO users(username,email,password) VALUES (${username},${email},${password});`;

That's how people drop your tables. Instead, give it money: 

    const sqlQuery = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3)`;

Then make a new variable that HOLDS the data we were interpolating with: 

    const values = [username,email,password]

...And pass both of those into your query

    app.post("/create_user", (req, res) => {
        const {username, email, password} = req.body
        connectionCreds.connect((err, client, release) => {
            if (err) {
                // if we get an error, release the connection. stop the connection.
                release();
                console.error("Error connecting to database: ", err);
                res.status(500).send("Internal server error");
                return;
            }

            const sqlQuery = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3);`;
            const values = [username,email,password]
            client.query(sqlQuery,values, (err, result) => {
                release();
                if (err) {
                    console.error("Error in executing the query: ", err);
                    res.status(500).send("Internal server error");
                    return;
                }
                res.send(result);
            });
        });
    })