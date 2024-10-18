import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyABzdJSY1ytU5ke6RPjf6SRZtlLfv8voXU",
  authDomain: "test-a0926.firebaseapp.com",
  projectId: "test-a0926",
  storageBucket: "test-a0926.appspot.com",
  messagingSenderId: "387616338664",
  appId: "1:387616338664:web:0281b58f2438488fcb4f5d",
  measurementId: "G-VDXK7BX94C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage  = getStorage(app);
export const db = getFirestore(app);





let messaging;

if(typeof window !=="undefined" && typeof window.navigator  !== 'undefined'){
  messaging = getMessaging();
}

export const getClientToken = async ()=>{
  const key = 'BK9rMr8rYmzkqSGhGfNxJQB9GOhTEfIIMBYTKmsqRKUc5okNDI4cRswlSmHEE5Hbr7WhimTdUpMxdEKZQwGLwcs';
  const currentToken = await getToken(messaging, { vapidKey: key })
  return currentToken;
}


