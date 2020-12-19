import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ChatRoom from './chatRoom';


firebase.initializeApp({
    apiKey: "AIzaSyDlqXuI4STgCIiwiNi5eBRDhNg09jS-cvI",
    authDomain: "videochat-7788c.firebaseapp.com",
    databaseURL: "https://videochat-7788c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "videochat-7788c",
    storageBucket: "videochat-7788c.appspot.com",
    messagingSenderId: "792334542052",
    appId: "1:792334542052:web:9fdb6ee1455f5b30c078f1",
    measurementId: "G-J3RT0KNVEG"
})

export const firestore = firebase.firestore()

function Chat() {


    return (
        <div style={{ marginTop: '5rem' }}>
            <ChatRoom />
        </div>
    )

}
export default Chat