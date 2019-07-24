import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNiVJ_l1yDa8inrKWLM3tE4eQNlNodTAw",
    authDomain: "generic-login-376a0.firebaseapp.com",
    databaseURL: "https://generic-login-376a0.firebaseio.com",
    projectId: "generic-login-376a0",
    storageBucket: "",
    messagingSenderId: "585797468510",
    appId: "1:585797468510:web:b24d0b84b350a3c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export const auth = firebase.auth()

auth.useDeviceLanguage();

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)

export const signOut = () => auth.signOut()

window.firebase = firebase //hide

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return

    // Get a reference to the place in the database where a user profile might be
    const userRef = firestore.doc(`users/${user.uid}`)

    //Go and fetch the doc from that location
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('Error creating user: ', error.message)
        }
    }

    return getUserDocument(user.uid)
}

export const getUserDocument = async (uid) => {
    if (!uid) return null
    try {
        return firestore.collection('users').doc(uid)
    } catch (error) {
        console.error('Error fetching user: ', error.message)
    }
}

export default firebase