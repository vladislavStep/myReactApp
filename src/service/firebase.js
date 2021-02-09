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
class Firebase {
	constructor() {


		this.fire = firebase;
		this.database = this.fire.database();
	}

	getPokemonBD = () => {
		return this.database.ref('pokemons');
	}
	getPokemonSoket = (cb) => {
		this.database.ref('pokemons').on('value', (snapshot) => {
			cb(snapshot.val());
		})
	}
	getPokemonsOnce = async () => {
		return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
	}
	postPokemon = (key, pokemon) => {
		this.database.ref(`pokemons/${key}`).set(pokemon);
	}
	addPokemon = (data, cb) => {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database.ref('pokemons/' + newKey).set(data);
	}

}

export default Firebase;

