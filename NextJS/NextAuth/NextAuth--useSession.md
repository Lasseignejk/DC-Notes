[useSession()](https://next-auth.js.org/getting-started/client#usesession)

Client Side: Yes
Server Side: No

To use `useSession()`, make sure `<SessionProvider>` is added to `pages/_app.js`

    import { useSession } from "next-auth/react"

    export default function Component() {
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        return <p>Signed in as {session.user.email}</p>
    }

    return <a href="/api/auth/signin">Sign in</a>
    }

Returns an object with two values: `data` and `status`
- `data` can be one of three values: `Session`, `undefined`, or `null`
- before the data has been fetched, `data` will be `undefined`
- if fetching fails, it will be `null`
- if it is successful, it will be `Session`
- `status` can be `loading`, `authenticated`, or `unauthenticated`

# Require Session
[Require Session](https://next-auth.js.org/getting-started/client#usesession)

Every protected page load has to make a server-side request to check if the session is valid and then generate the requested page (SSR). This increases the load on the server. Here is how you can do it using SSR: 

    import { useSession } from "next-auth/react"

    export default function Admin() {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
        // The user is not authenticated, handle it here.
        },
    })

    if (status === "loading") {
        return "Loading or not authenticated..."
    }

    return "User is logged in"
    }

and here's an alternative that uses CSR. This allows for showing a loaidng state on the initial check and every page transition afterward will be client-side, without having to check with the server and regenerate pages. 

    pages/admin.jsx
    export default function AdminDashboard() {
        const { data: session } = useSession()
        // session is always non-null inside this page, all the way down the React tree.
        return "Some super secret dashboard"
    }

    AdminDashboard.auth = true

    pages/_app.jsx
    export default function App({
        Component,
        pageProps: { session, ...pageProps },
        }) {
        return (
            <SessionProvider session={session}>
            {Component.auth ? (
                <Auth>
                <Component {...pageProps} />
                </Auth>
            ) : (
                <Component {...pageProps} />
            )}
            </SessionProvider>
        )
        }

        function Auth({ children }) {
        // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
        const { status } = useSession({ required: true })

        if (status === "loading") {
            return <div>Loading...</div>
        }

        return children
    }

Furthermore, the admin.jsx can be modified to support an object for role based authentication on pages, like this: 

    AdminDashboard.auth = {
        role: "admin",
        loading: <AdminLoadingSkeleton />,
        unauthorized: "/login-with-different-user", // redirect to this url
    }