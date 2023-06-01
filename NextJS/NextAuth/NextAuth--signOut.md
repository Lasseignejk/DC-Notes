[signOut()](https://next-auth.js.org/getting-started/client#signout)

Client Side: Yes
Server Side: No

Reloads the page in the browser when complete 

    import { signOut } from "next-auth/react"

    export default () => <button onClick={() => signOut()}>Sign out</button>

## Specifying a callbackUrl
As with `signIn()`, you can specify a callbackUrl parameter by passing it as an option. 