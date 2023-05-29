[sessionProvider](https://next-auth.js.org/getting-started/client#sessionprovider)

Using `<SessionProvider> allows instances of `useSession()` to share the session object across components, using React Context under the hood. It also makes sure the session is updated an synced between tabs/windows 

    pages/_app.js
    import { SessionProvider } from "next-auth/react"

    export default function App({
        Component,
        pageProps: { session, ...pageProps },
        }) {
        return (
            <SessionProvider session={session}>
            <Component {...pageProps} />
            </SessionProvider>
        )
    }