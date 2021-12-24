import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOImFemdO-QwZH8N_lEfEhsPIDbN05bOs",
    authDomain: "deetee-clothing-ecom.firebaseapp.com",
    projectId: "deetee-clothing-ecom",
    storageBucket: "deetee-clothing-ecom.appspot.com",
    messagingSenderId: "817089336680",
    appId: "1:817089336680:web:d4ae6df449662289dbb2dd",
    measurementId: "G-P86PENZNHY"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return

    const userRef = doc(db, 'users', `${userAuth.uid}`)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc((userRef), {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase


