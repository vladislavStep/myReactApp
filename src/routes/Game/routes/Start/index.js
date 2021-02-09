import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';


import PokemonCard from '../../../../components/PokemonCard';

import style from './style.module.css';
import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../context/firebaseContext';

const DATA = {
	"abilities": [
		"blaze",
		"solar-power"
	],
	"base_experience": 62,
	"height": 6,
	"id": 4,
	"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	"name": "charmander",
	"stats": {
		"attack": 52,
		"defense": 43,
		"hp": 39,
		"special-attack": 60,
		"special-defense": 50,
		"speed": 65
	},
	"type": "fire",
	"values": {
		"bottom": 1,
		"left": 4,
		"right": 6,
		"top": 7
	}
}


const StartPage = () => {
	const history = useHistory();
	const [Pokemon, setPokemonState] = useState({});

	const firebase = useContext(FireBaseContext);
	const pokemonContext = useContext(PokemonContext);

	useEffect(() => {
		firebase.getPokemonSoket((Pokemon) => {
			setPokemonState(Pokemon);
		});
	}, []);

	const handleClickAddPokemon = () => {
		const data = DATA;
		firebase.addPokemon(data);
	};

	const handleClickCard = (keyID) => {
		setPokemonState(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				if (item[0] === keyID) {
					pokemonContext.onClickHandle(item);
				};
				acc[item[0]] = item[1];
				return acc;
			}, {});
		});
	}

	const handleClickStartGame = () => {
		history.push('/game/board');
	}

	return (
		<>
			<div className={style.container}>
				<div className={cn(style.container, style.title, style.flex)}>
					<div><button onClick={handleClickAddPokemon}>ADD NEW POKEMON</button>
						{/* <span className={style.separator}></span> */}
					</div>
					<div>
						<button onClick={handleClickStartGame}>Start Games</button>
						{/* <span className={style.separator}></span> */}
					</div>

				</div>

				<div className={cn(style.desc, style.full)}>
					<div className={style.flex}>
						{
							Object.entries(Pokemon).map(([keyID, { name, img, id, type, values }]) => < PokemonCard
								keyID={keyID}
								name={name}
								img={img}
								id={id}
								type={type}
								values={values}
								isActive={true}
								minimize={false}
								onClick={handleClickCard}
							/>
							)
						}
					</div>
				</div>
			</div>
		</>

	);
};

export default StartPage;