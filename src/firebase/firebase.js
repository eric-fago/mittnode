import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDnSnaIMD2YNv2z4Sj_nLrS9LT7BYE1nYE",
	authDomain: "crwn-db-55348.firebaseapp.com",
	databaseURL: "https://crwn-db-55348.firebaseio.com",
	projectId: "crwn-db-55348",
	storageBucket: "crwn-db-55348.appspot.com",
	messagingSenderId: "1011348938776",
	appId: "1:1011348938776:web:db861186b2bc453fbe636d",
	measurementId: "G-485GMKPDFZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;