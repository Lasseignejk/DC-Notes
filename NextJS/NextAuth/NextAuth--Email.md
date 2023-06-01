[Email](https://next-auth.js.org/configuration/providers/email)

Install nodemailer
    npm i nodemailer

Sends 'magic links' via email that the user can click on to sign in. 

Adding support for signing in via email in addition to one or more OAuth services provides a way for users to sign in if they lose access to their OAuth account (e.g. if it is locked or deleted)

    import EmailProvider from "next-auth/providers/email"
    ...
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
            // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
        }),
    ],
    ...

On initial sign in, a verification token is sent to the email address provided. By default, this token is valid for 24 hours. If the token is used within that time, an account is created for the user and they are signed in. 

If someone provides the email address of an existing account when signing in, an email is sent and they are signed into the account associated with that email address when they follow the link in the email. 

## Configuration 
1. install nodemailer 
1. have an SMTP account (gmail, hotmail, etc.)

There are two ways to configure the server connection, a connection string or a nodemailer configuration object. 

### 1. connection string 
in your env file, add the connection string and email address 
    EMAIL_SERVER=smtp://username:password@smtp.example.com:587
    EMAIL_FROM=noreply@example.com

Then you can add the email provider to the `[...nextauth].js` file
    import EmailProvider from "next-auth/providers/email";
    ...
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
    ],

### 2. configuration object 
in your env file, add the configuration object options individually: 
    EMAIL_SERVER_USER=username
    EMAIL_SERVER_PASSWORD=password
    EMAIL_SERVER_HOST=smtp.example.com
    EMAIL_SERVER_PORT=587
    EMAIL_FROM=noreply@example.com

Then add the provider settings to the NextAuth.js options object in the Email Provider 

    import EmailProvider from "next-auth/providers/email";
    ...
    providers: [
        EmailProvider({
            server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
            }
            },
            from: process.env.EMAIL_FROM
        }),
    ],

# DON'T FORGET TO SETUP ONE OF THE DATABASE ADAPTERS
[MongoDB](https://authjs.dev/reference/adapter/mongodb)

    npm install next-auth @next-auth/mongodb-adapter mongodb