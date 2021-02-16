import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import { PokemonContextEnemy } from '../../context/pokemonContextEnemy';


import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {

	const [pokemons, setPokemons] = useState({});
	const [pokemonsEnemy, setPokemonsEnemy] = useState({});
	const match = useRouteMatch('/game');

	const handleClickCard = (item) => {
		// console.log('Pokenons: ', Object.keys(pokemons).length);
		if (Object.keys(pokemons).length < 5) {
			pokemons[item[0]] = item[1];
			setPokemons(pokemons);
		}
	}

	const handleClickCardEnemy = (item) => {
		setPokemonsEnemy(item);
	}

	return (
		<PokemonContext.Provider value={{
			pokemon: pokemons,
			onClickHandle: handleClickCard
		}}>
			<PokemonContextEnemy.Provider value={{
				pokemon: pokemonsEnemy,
				onClickHandle: handleClickCardEnemy
			}}>
				<Switch>
					<Route path={`${match.path}/`} exact component={StartPage} />
					<Route path={`${match.path}/board`} component={BoardPage} />
					<Route path={`${match.path}/finish`} component={FinishPage} />
				</Switch>
			</PokemonContextEnemy.Provider>
		</PokemonContext.Provider >
	);
};

export default GamePage;