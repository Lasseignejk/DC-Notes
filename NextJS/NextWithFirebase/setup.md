To set up Firebase Authentication in a Next.js project, you can follow these steps:

1. Create a Firebase project:
- Go to the Firebase console (https://console.firebase.google.com/) and create a new project.
- Enable the Authentication service in your Firebase project.

2. Install Firebase SDK and dependencies:
- In your Next.js project, open a terminal and run the following command to install the Firebase JavaScript SDK and required dependencies:

        npm install firebase

3. Set up Firebase configuration:
- Create a new file named firebaseConfig.js in the root of your project.
- In the firebaseConfig.js file, add the following code and replace the placeholders with your Firebase project's configuration values:

        import firebase from 'firebase/app';
        import 'firebase/auth';

        const firebaseConfig = {
        apiKey: '<YOUR_API_KEY>',
        authDomain: '<YOUR_AUTH_DOMAIN>',
        projectId: '<YOUR_PROJECT_ID>',
        storageBucket: '<YOUR_STORAGE_BUCKET>',
        messagingSenderId: '<YOUR_MESSAGING_SENDER_ID>',
        appId: '<YOUR_APP_ID>',
        };

        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }

        export default firebase;

4. Create a custom Firebase authentication hook:
- Create a new file named useFirebaseAuth.js in your project's hooks directory (create one if it doesn't exist).
- In the useFirebaseAuth.js file, add the following code:

        import { useEffect, useState } from 'react';
        import firebase from '../firebaseConfig';

        const useFirebaseAuth = () => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            });

            return () => unsubscribe();
        }, []);

        const signInWithGoogle = async () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            try {
            await firebase.auth().signInWithPopup(provider);
            } catch (error) {
            console.error(error);
            }
        };

        const signOut = async () => {
            try {
            await firebase.auth().signOut();
            } catch (error) {
            console.error(error);
            }
        };

        return { user, signInWithGoogle, signOut };
        };

        export default useFirebaseAuth;

5. Integrate Firebase authentication in your Next.js pages:
- Import the useFirebaseAuth hook in your page component where you want to use authentication.
- Use the user, signInWithGoogle, and signOut methods from the hook to handle authentication state and actions.
- Here's an example of how to integrate Firebase authentication in a Next.js page:

        import useFirebaseAuth from '../hooks/useFirebaseAuth';

        const HomePage = () => {
        const { user, signInWithGoogle, signOut } = useFirebaseAuth();

        return (
            <div>
            {user ? (
                <div>
                <p>Welcome, {user.displayName}!</p>
                <button onClick={signOut}>Sign Out</button>
                </div>
            ) : (
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            )}
            </div>
        );
        };

        export default HomePage;

6. Ensure the Firebase configuration file is loaded:
- In your Next.js project, open the _app.js file (located in the pages directory).
- Add the following code to ensure the Firebase configuration file is loaded:

        import firebase from '../firebaseConfig';

        if (typeof window !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }
        
That's it! You've set up Firebase Authentication in your Next.js project. The useFirebaseAuth hook provides the user object to track the current authenticated user, along with signInWithGoogle and signOut methods for authentication actions.