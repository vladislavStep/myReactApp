import { useState, useEffect } from 'react';
import cn from 'classnames';
import database from '../../service/firebase';

import PokemonCard from '../../components/PokemonCard';

import style from './style.module.css';


const GamePage = () => {
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});

	}, []);

	const onClickAddPokemons = () => {

		const newKey = database.ref().child('pokemons').push().key;
		const data = Object.entries(pokemons)[0];
		database.ref('pokemons/' + newKey).set(data[1]);
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	};

	const onClickCard = (id) => {
		setPokemons(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (item[0] === id) {
					pokemon.active = !pokemon.active;
					console.log(acc);
					console.log(item);
					database.ref('pokemons/' + id).update({
						active: pokemon.active
					});
				};
				acc[item[0]] = pokemon;
				return acc;
			}, {});
		});
	}

	return (
		<>

			<div className={style.container}>
				<div className={cn(style.container, style.title)}>
					<button onClick={onClickAddPokemons}>ADD NEW POKEMONS</button>
					<span className={style.separator}></span>
				</div>
				<div className={cn(style.desc, style.full)}>
					<div className={style.flex}>
						{
							Object.entries(pokemons).map(([keyID, { name, img, id, type, values, active }]) => < PokemonCard
								keyID={keyID}
								name={name}
								img={img}
								id={id}
								type={type}
								values={values}
								isActive={active}
								onClick={onClickCard}
							/>
							)
						}
					</div>
				</div>
			</div>
		</>

	);
};

export default GamePage;