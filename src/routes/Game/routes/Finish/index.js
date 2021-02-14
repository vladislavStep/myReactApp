import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';


import PokemonCard from '../../../../components/PokemonCard';

import style from './style.module.css';
import { PokemonContext } from '../../../../context/pokemonContext';
import { PokemonContextEnemy } from '../../../../context/pokemonContextEnemy';
import { FireBaseContext } from '../../../../context/firebaseContext';

const FinishPage = () => {
	const history = useHistory();
	const [Pokemon, setPokemonState] = useState([]);

	const pokemonContext = useContext(PokemonContext);
	const pokemonContextEnemy = useContext(PokemonContextEnemy);
	const firebase = useContext(FireBaseContext);

	if (Object.keys(pokemonContext.pokemon).length < 5) {
		history.replace('/game');
	}

	const handleClickEndGame = () => {

		if (Pokemon != []) {
			firebase.addPokemon(Pokemon);
			history.push('/game');
		}


	};

	const handleClickCard = (keyID) => {
		// console.log("____#___", keyID);
		// console.log("###_###", Pokemon);
		Object.entries(pokemonContextEnemy.pokemon).map((item) => {

			if (keyID === item[0]) {
				item[1]['isSelected'] = true;
				setPokemonState(item[1]);
			} else {
				item[1]['isSelected'] = false;
			}

		});

	};


	return (
		<>
			<div className={cn(style.desc, style.full)}>
				<div className={style.flex}>
					{
						Object.entries(pokemonContext.pokemon).map(([keyID, { name, img, id, type, isSelected, values }]) => < PokemonCard
							keyID={keyID}
							name={name}
							img={img}
							id={id}
							type={type}
							values={values}
							isActive={true}
							minimize={false}
							isSelected={isSelected}
							onClick={handleClickCard}
						/>
						)
					}
				</div>
			</div>

			<div className={cn(style.container, style.title, style.flex)}>

				<div>
					<button onClick={handleClickEndGame}>END GAMES</button>
					{/* <span className={style.separator}></span> */}
				</div>

			</div>
			<div className={cn(style.desc, style.full)}>
				<div className={style.flex}>
					{
						Object.entries(pokemonContextEnemy.pokemon).map(([keyID, { name, img, id, type, isSelected, values }]) => < PokemonCard
							keyID={keyID}
							name={name}
							img={img}
							id={id}
							type={type}
							values={values}
							isActive={true}
							minimize={false}
							isSelected={isSelected}
							onClick={handleClickCard}
						/>
						)
					}
				</div>
			</div>

		</>

	);
};

export default FinishPage;

