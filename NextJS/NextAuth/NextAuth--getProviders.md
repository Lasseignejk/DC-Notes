[getProviders()](https://next-auth.js.org/getting-started/client#getproviders)

Client Side: Yes
Server Side: Yes

Returns the list of providers currently configured for sign in

It calls /api/auth/providers and returns a list of the currently configured authentication providers 

It can be useful if you are creating a dynamic custom sign in page 

    pages/api/example.js
    import { getProviders } from "next-auth/react"

    export default async (req, res) => {
    const providers = await getProviders()
    console.log("Providers", providers)
    res.end()
    }