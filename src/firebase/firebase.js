import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH--pRcUWNXk7I8hylhAHZBh72Cbt789U",
  authDomain: "ichoose-f6da4.firebaseapp.com",
  projectId: "ichoose-f6da4",
  storageBucket: "ichoose-f6da4.appspot.com",
  messagingSenderId: "1081075121283",
  appId: "1:1081075121283:web:043d59977ee60379da2fb6"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)