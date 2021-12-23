import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOImFemdO-QwZH8N_lEfEhsPIDbN05bOs",
    authDomain: "deetee-clothing-ecom.firebaseapp.com",
    projectId: "deetee-clothing-ecom",
    storageBucket: "deetee-clothing-ecom.appspot.com",
    messagingSenderId: "817089336680",
    appId: "1:817089336680:web:d4ae6df449662289dbb2dd",
    measurementId: "G-P86PENZNHY"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)




