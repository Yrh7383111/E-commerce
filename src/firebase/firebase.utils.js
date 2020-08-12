import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz6ujTDViXPrpNZFPq0V1hxm-1_jan2Ak",
    authDomain: "e-commerce-7b83e.firebaseapp.com",
    databaseURL: "https://e-commerce-7b83e.firebaseio.com",
    projectId: "e-commerce-7b83e",
    storageBucket: "e-commerce-7b83e.appspot.com",
    messagingSenderId: "718043204346",
    appId: "1:718043204346:web:2321110cf5f0d0e890d743",
    measurementId: "G-XFPC7B9SH2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Function to persist a new user in the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Safety check to ensure userAuth exists
    if (!userAuth)
        return;

    // Else
    // Query Reference (Controller) - object that represents the current place in the database
    // Only Query Reference can perform CRUD operations
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // Query Snapshot
    // Actual data in the database
    // CRUD - Retrieve
    const userSnapShot = await userRef.get();

    // If there is no user with associated uid exists in the database
    // Then, persist one
    if (!userSnapShot.exists)
    {
        const createdAt = new Date();
        // Object destructing
        const { displayName, email } = userAuth;

        try
        {
            // CRUD - Create
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            });
        }
        catch (error)
        {
            console.log(error);
        }
    }

    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Google account auth configurations
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
GoogleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleAuthProvider);



export default firebase;