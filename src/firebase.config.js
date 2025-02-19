import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxC_FEo6RcpekV86As1Pco-P9uHHlx-CY',
  authDomain: 'house-marketplace-94c82.firebaseapp.com',
  projectId: 'house-marketplace-94c82',
  storageBucket: 'house-marketplace-94c82.firebasestorage.app',
  messagingSenderId: '331847635515',
  appId: '1:331847635515:web:7b228e9de8e16c6010c21e',
  measurementId: 'G-BSXCX8YPGW',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
