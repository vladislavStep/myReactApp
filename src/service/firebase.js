import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyBkKn2_doeTgTddGWhp7rF9-_yO1bFI2HQ",
	authDomain: "pokemon-game-91e9d.firebaseapp.com",
	databaseURL: "https://pokemon-game-91e9d-default-rtdb.firebaseio.com",
	projectId: "pokemon-game-91e9d",
	storageBucket: "pokemon-game-91e9d.appspot.com",
	messagingSenderId: "218370769904",
	appId: "1:218370769904:web:090121fbca268c4715d335"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;

