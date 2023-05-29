[signIn()](https://next-auth.js.org/getting-started/client#signin)

Client Side: Yes
Server Side: No

Using the `signIn()` method ensures the user ends back on the page they started on after completing a sign in flow. It will also handle CSRF (Cross Site Request Forgery) Tokens for you automatically when signing in with email

## Redirect to sign in page when clicked 
    import { signIn } from "next-auth/react"

    export default () => <button onClick={() => signIn()}>Sign in</button>

## Starts OAuth sign-in flow when clicked 
By default, when calling the `signIn()` method with no arguments (like in the example above), you will be redirected to the NextAuth.js sign-in page. If you want to be redirected to your provider's page instead, call the `signIn()` method with the provider's id. 

    import { signIn } from "next-auth/react"

    export default () => (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
    )

## Starts email sign-in flow when clicked 

    import { signIn } from "next-auth/react"

    export default ({ email }) => (
    <button onClick={() => signIn("email", { email })}>Sign in with Email</button>
    )

## Specifying a callbackUrl
Defaults to the page url the sign-in is initiated from. You can specify a different url by specifying it as the second argument of `signIn()`.
    `signIn(undefined, {callbackUrl: '/foo'})`
    `signIn('google', {callbackUrl: 'http://localhost:3000/bar'})`
    `signIn('email', {callbackUrl: 'http://localhost:3000/foo'})`

The url must be an absolute url at the same hose name or a relative url starting with a slash. If it doesn't match, it will redirect to the homepage.