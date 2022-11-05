import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
	apiKey: "AIzaSyB1yed9a0WUCaN3ni-DkWmedM2eZ7lLwCE",
	authDomain: "letsconnect-994fd.firebaseapp.com",
	projectId: "letsconnect-994fd",
	storageBucket: "letsconnect-994fd.appspot.com",
	messagingSenderId: "833871715826",
	appId: "1:833871715826:web:fe02af2ad26779a214df6b",
}).auth();
